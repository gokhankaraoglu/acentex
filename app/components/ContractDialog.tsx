import { Dialog } from "@headlessui/react";
import CustomButton from "./elements/CustomButton";
import { Icon, Icons } from "./elements/Icon";

const contractText = [
  {
    title: "Ekran Kırılması",
    icon: Icons.CRASH_ICON,
    description: `Telefonun bir cisim ile şiddetli teması veya belirli
    yükseklikten düşmesi sonrasında ekranının çatlaması, iç
    ekranının kırılması veya dış camının kırılması / çatlaması
    durumlarıdır.`,
  },
  {
    title: "Hırsızlık",
    icon: Icons.ROBBER_ICON,
    description: `Güvenlik önlemleri alınarak kapıları kilitli ve camları kapalı olan otomobilden veya konut içerisinden kapıların veya camların kırılmış olması suretiyle (zor kullanarak) ve güvenlik güçleri tarafından kayıt altına alınmış hırsızlık durumlarıdır.`,
  },
  {
    title: "Yüksek Voltaj",
    icon: Icons.VOLTAGE_ICON,
    description: `Elektrik şebekelerinin yoğun kullanımı ve özellikle saatsel olarak aşırı yüklenmeler sonucu santral kaynaklı olarak voltaj dalgalanmaları ve bu dalgalanmaların batarya üzerinde oluşturduğu ani akım gerilimleri sonrası yanmalar ve patlamalar ile cihazın zarar görmesidir.`,
  },
  {
    title: "Sıvı Teması",
    icon: Icons.AQUA_ICON,
    description: `Cihazın düşme sonucu veya sıvılı bir yüzeye bırakılması ile iç ünite ve devrelerinin sıvı ile teması sonrasında oluşan hasarlardır.`,
  },
  {
    title: "Kaza Sonucu Hasar",
    icon: Icons.CRASH_ICON,
    description: `Ani ve beklenmedik bir olay sonucunda telefonun kazayla zarara uğramasıdır.`,
  },
  {
    title: "Hatalı Aksesuar Kullanımı",
    icon: Icons.FAULTY_ICON,
    description: `Cihaz üreticilerinin önerdiği aksesuar ve araçlar dışında kullanıcı inisiyatifi ile cihaza takılmak istenen her türlü aksesuar ve cihazın vermiş olduğu zararlardır.
    `,
  },
];

function ContractDialog() {
  function close() {
    console.log("close");
  }
  const isOpen = true;

  return (
    <Dialog open={isOpen} onClose={() => close()}>
      <div className="z-1 fixed inset-0 flex justify-center items-end">
        <div className="w-full h-full z-0 absolute inset-0 opacity-50" />
        <div className="container relative w-full sm:px-8 lg:px-10">
          <div className="bg-white rounded-3xl shadow w-full sm:w-full">
            <div className="rounded-tl-md p-4 flex items-center justify-end border-b-2">
              <button className="focus:outline-none" onClick={close}>
                <Icon icon={Icons.CLOSE_ICON} />
              </button>
            </div>

            <div className="flex flex-col gap-4 px-8">
              <p className="text-center text-2xl font-bold mb-10">
                Koruma Kapsamları
              </p>
              <div className="h-[460px] overflow-y-auto">
                {contractText.map(({ title, icon, description }, index) => (
                  <section className="mb-8" key={index}>
                    <div className="flex items-center text-[#667085] mb-2.5">
                      <Icon icon={icon} />
                      <h2 className="ml-2 text-2xl font-semibold">{title}</h2>
                    </div>
                    <p className="text-black text-sm font-light">
                      {description}
                    </p>
                  </section>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-4">
              <CustomButton form="form1" type="submit">
                Onayla
              </CustomButton>
              <p className="text-[#667085] font-extralight text-xs mt-2">
                Şu anda Insurelab Sigorta ve Reasürans Brokerlığı
                sayfasındasınız.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ContractDialog;
