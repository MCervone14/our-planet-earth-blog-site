import LaudatoSiGoals from "@/components/laudato-si-goals";

const LaudatoSiPage = () => {
  return (
    <div className="mx-auto flex-col lg:flex-row">
      <h1 className="text-[steelblue] my-16 h-20 text-4xl lg:text-8xl flex justify-center items-end z-10">
        Laudato Si Action Platform
      </h1>
      <div className="">
        <LaudatoSiGoals />
      </div>
      {/* <div>
        <div className="">
        {laudatoSiGoals.map((goal) => (
          <div
          key={goal.title}
          className="flex flex-col lg:flex-row justify-center items-center h-[800px]"
          >
          <Image
          src={goal.image}
          alt={goal.title}
                width={800}
                height={800}
                className="w-full h-full object-cover "
              />
              <h3 className="text-xl lg:text-2xl text-[steelblue] font-bold my-4">
                {goal.title}
              </h3>
              <p className="text-lg lg:text-xl text-[steelblue] text-center">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default LaudatoSiPage;
