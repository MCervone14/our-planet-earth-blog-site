import LaudatoSiGoals from "@/components/laudato-si-goals";

const LaudatoSiPage = () => {
  return (
    <div className="mx-auto flex-col lg:flex-row">
      <h1 className="text-[steelblue] text-center my-16 h-20 text-4xl lg:text-8xl flex justify-center items-end z-10">
        Laudato Si Action Platform
      </h1>
      <div className="">
        <LaudatoSiGoals />
      </div>
    </div>
  );
};

export default LaudatoSiPage;
