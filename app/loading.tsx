import Spinner from "./components/elements/Spinner";

function Loading() {
  return (
    <div className="absolute inset-0 w-full h-full z-50 opacity-50 bg-black text-white">
      <div className="flex justify-center w-full h-full items-center">
        <Spinner />
        <h1 className="s1"> Loading...</h1>
      </div>
    </div>
  );
}

export default Loading;
