"use client";

import { useState } from "react";
import Image from "next/image";

const LaudatoSiCategories = [
  {
    id: "0",
    title: "RESPONSE TO THE CRY OF THE EARTH",
    description:
      "The Response to the Cry of the Earth is a call to protect our common home for the wellbeing of all, as we equitably address the climate crisis, biodiversity loss, and ecological sustainability. Actions could include the adoption of renewable energies and energy sufficiency measures, achieving carbon neutrality, protecting biodiversity, promoting sustainable agriculture, and guaranteeing access to clean water for all.",
    color: "bg-green-700",
    icon: "/LSAP/LSAP_1_Response_to_the_Cry_of_the_Earth-1.png",
    image: "/images/earth-hour.jpg",
  },
  {
    id: "1",
    title: "RESPONSE TO THE CRY OF THE POOR",
    description:
      "The Response to the Cry of the Poor is a call to promote eco-justice, aware that we are called to defend human life from conception to death, and all forms of life on Earth. Actions could include projects to promote solidarity, with special attention given to vulnerable groups such as indigenous communities, refugees, migrants, and children at risk, analysis and improvement of social systems, and social service programmes.",
    color: "bg-yellow-700",
    icon: "/LSAP/LSAP_2_Response_to_the_Cry_of_the_Poor-370x370.png",
    image: "/images/Larm-Rmah-icon-photo.jpg",
  },
  {
    id: "2",
    title: "ECOLOGICAL ECONOMICS",
    description:
      "Ecological Economics acknowledges that the economy is a sub-system of human society, which itself is embedded within the biosphere–our common home. Actions could include sustainable production and consumption, ethical investments, divestment from fossil fuels and any activity harmful to the planet and the people, supporting circular economies, and prioritizing care labour and protecting the dignity of workers.",
    color: "bg-purple-700",
    icon: "/LSAP/LSAP_3_Ecological_Economics-1.png",
    image: "/images/Appolinary-Kalashnikova-icon-photo.jpg",
  },
  {
    id: "3",
    title: "ADOPTION OF SUSTAINABLE LIFESTYLES",
    description:
      "The Adoption of Sustainable Lifestyles is grounded in the idea of sufficiency, and promoting sobriety in the use of resources and energy. Actions could include reducing waste and recycling, adopting sustainable dietary habits (opting for a more plant-based diet and reducing meat consumption), greater use of public transport, active mobility (walking, cycling), and avoiding single use items (e.g. plastic, etc.).",
    color: "bg-yellow-300",
    icon: "/LSAP/LSAP_4_Adoption_of_Sustainable_Lifestyles-1.png",
    image: "/images/Didier-Weemaels-icon-photo.jpg",
  },
  {
    id: "4",
    title: "ECOLOGICAL EDUCATION",
    description:
      "Ecological Education is about re-thinking and re-designing curricular and institutional reform in the spirit of integral ecology in order to foster ecological awareness and transformative action. Actions could include ensuring equitable access to education for all and promoting human rights, fostering Laudato Si’ themes within the community, encouraging ecological leadership (students, teachers), and ecological restoration activities.",
    color: "bg-red-700",
    icon: "/LSAP/LSAP_5_Ecological_Education-1.png",
    image: "/images/Parker-Gibbons-icon-photo.jpg",
  },
  {
    id: "5",
    title: "ECOLOGICAL SPIRITUALITY",
    description:
      "Ecological Spirituality springs from a profound ecological conversion and helps us to “discover God in all things”, both in the beauty of creation and in the sighs of the sick and the groans of the afflicted, aware that the life of the spirit is not dissociated from worldly realities. Actions could include promoting creation-based liturgical celebrations, developing ecological catechesis, retreats and formation programmes, etc.",
    color: "bg-blue-700",
    icon: "/LSAP/LSAP_6_Ecological_Spirituality-1.png",
    image: "/images/Davide-Cantelli-icon-photo.jpg",
  },
  {
    id: "6",
    title: "COMMUNITY RESILIENCE AND EMPOWERMENT",
    description:
      "Community resilience and empowerment envisage a synodal journey of community engagement and participatory action at various levels. Actions could include promoting advocacy and developing people’s campaigns, encouraging rootedness and a sense of belonging in local communities and neighborhood ecosystems.",
    color: "bg-[steelblue]",
    icon: "/LSAP/LSAP_7_Community_Resilience_and_Empowerment-1.png",
    image: "/images/Chang-Duong-icon-photo.jpg",
  },
];

const LaudatoSiGoals = () => {
  const [isSelected, setIsSelected] = useState("0");
  return (
    <div className="w-full flex flex-wrap justify-center items-center flex-col lg:flex-row gap-10 z-10 p-5">
      {LaudatoSiCategories.map((category) => (
        <div
          id={category.id}
          key={category.id}
          className={`${
            isSelected === category.id
              ? "relative animate-fade-right bg-white rounded-lg order-first "
              : "bg-transparent relative"
          }`}
          onClick={(e) => {
            setIsSelected(e.currentTarget.id);
          }}
        >
          <div
            className={`flex flex-col flex-nowrap lg:flex-row justify-center gap-10 items-center relative ${
              isSelected === category.id && "h-[500px]"
            }`}
          >
            <Image
              src={category.icon}
              alt={category.title}
              width={150}
              height={150}
              className={`z-10 ${
                isSelected === category.id
                  ? "w-[300px] h-[300px] object-cover rounded-xl"
                  : "hover:scale-110 transform transition duration-500 ease-in-out"
              }`}
            />
            <p
              className={`w-1/2 text-2xl z-10 bg-white bg-opacity-70 rounded p-5 animate-in duration-500 ${
                isSelected === category.id ? "block" : "hidden"
              }`}
            >
              {category.description}
            </p>
            <Image
              src={category.image}
              alt={category.title}
              fill
              className={
                isSelected === category.id
                  ? " object-cover block rounded-xl"
                  : "hidden"
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LaudatoSiGoals;
