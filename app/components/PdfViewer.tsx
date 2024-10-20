"use client";
import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import { Dialog } from "@headlessui/react";
import { Icon, Icons } from "./elements/Icon";
import CustomButton from "./elements/CustomButton";
import Footer from "./Footer";
import { getPolicyDocument } from "../utils/api/document";
import { base64ToUint8Array } from "../utils";
import Spinner from "./elements/Spinner";
import { Item } from "../types/document";

interface PdfViewerProps {
  entegrasyonPoliceHareketId: number;
  isOpen: boolean;
  close: () => void;
}

function PdfViewer({
  entegrasyonPoliceHareketId,
  isOpen,
  close,
}: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [policeData, setPoliceData] = useState<Item | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      GlobalWorkerOptions.workerSrc = `${window.location.origin}/pdf.worker.min.js`;
    }
    getPoliceDocument();
  }, []);

  const getPoliceDocument = async () => {
    const { Items } = await getPolicyDocument(entegrasyonPoliceHareketId);
    if (Items[0]) {
      setPoliceData(Items[0]);
    }
  };

  useEffect(() => {
    const loadPdf = async () => {
      try {
        if (policeData?.BINARY_DATA) {
          const pdfData = base64ToUint8Array(policeData.BINARY_DATA);
          const pdf = await getDocument({ data: pdfData }).promise;
          const page = await pdf.getPage(1);

          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = canvasRef.current;
          if (!canvas) {
            return;
          }

          const context = canvas.getContext("2d");
          if (!context) {
            return;
          }

          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          await page.render(renderContext).promise;
        }
      } catch (error) {
        console.error("PDF yüklenirken hata oluştu:", error);
      }
    };

    loadPdf();
  }, [isOpen, policeData]);

  const downloadPdf = (policeData: Item) => {
    const uint8Array = base64ToUint8Array(policeData.BINARY_DATA);
    const blob = new Blob([uint8Array], { type: policeData.CONTENT_TYPE });

    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = policeData.FILE_NAME || "download.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={isOpen} onClose={() => close()}>
      <div className="z-1 fixed inset-0 flex justify-center items-end">
        <div
          className="w-full h-full z-0 absolute inset-0 opacity-50"
          onClick={close}
        />
        <div className="container relative flex items-end mx-1">
          <div className="bg-white rounded-t-3xl shadow w-full">
            <div className="p-4 flex items-center justify-end border-b-2">
              <button className="focus:outline-none" onClick={close}>
                <Icon icon={Icons.CLOSE_ICON} />
              </button>
            </div>
            <div className="flex flex-col gap-4 px-4 py-6 sm:px-6 md:px-8">
              <div className="flex flex-col gap-y-8 h-[calc(80vh-15rem)] overflow-y-auto">
                {policeData ? (
                  <canvas ref={canvasRef}></canvas>
                ) : (
                  <Spinner className="mx-auto" />
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mb-6">
              <CustomButton
                onClick={() =>
                  policeData?.BINARY_DATA && downloadPdf(policeData)
                }
                className="mb-3.5"
              >
                Poliçe İndir
              </CustomButton>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default PdfViewer;
