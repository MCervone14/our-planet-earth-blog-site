"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const LaudatoSiCategories = [
  {
    id: "0",
    title: "RESPONSE TO THE CRY OF THE EARTH",
    description:
      "The Response to the Cry of the Earth is a call to protect our common home for the wellbeing of all, as we equitably address the climate crisis, biodiversity loss, and ecological sustainability. Actions could include the adoption of renewable energies and energy sufficiency measures, achieving carbon neutrality, protecting biodiversity, promoting sustainable agriculture, and guaranteeing access to clean water for all.",
    color: "bg-green-700",
    icon: "/LSAP/LSAP_1_Response_to_the_Cry_of_the_Earth-1.png",
    image: "/images/earth-hour.jpg",
    keywords: ["earth", "climate", "biodiversity", "sustainability"],
  },
  {
    id: "1",
    title: "RESPONSE TO THE CRY OF THE POOR",
    description:
      "The Response to the Cry of the Poor is a call to promote eco-justice, aware that we are called to defend human life from conception to death, and all forms of life on Earth. Actions could include projects to promote solidarity, with special attention given to vulnerable groups such as indigenous communities, refugees, migrants, and children at risk, analysis and improvement of social systems, and social service programs.",
    color: "bg-yellow-700",
    icon: "/LSAP/LSAP_2_Response_to_the_Cry_of_the_Poor-370x370.png",
    image: "/images/Larm-Rmah-icon-photo.jpg",
    keywords: ["justice", "solidarity", "vulnerable"],
  },
  {
    id: "2",
    title: "ECOLOGICAL ECONOMICS",
    description:
      "Ecological Economics acknowledges that the economy is a sub-system of human society. Actions could include sustainable production and consumption, ethical investments, divestment from fossil fuels and any activity harmful to the planet and the people, supporting circular economies, and prioritizing care labor and protecting the dignity of workers.",
    color: "bg-purple-700",
    icon: "/LSAP/LSAP_3_Ecological_Economics-1.png",
    image: "/images/Appolinary-Kalashnikova-icon-photo.jpg",
    keywords: ["economics", "sustainable", "consumption"],
  },
  {
    id: "3",
    title: "ADOPTION OF SUSTAINABLE LIFESTYLES",
    description:
      "The Adoption of Sustainable Lifestyles is grounded in the idea of sufficiency, and promoting sobriety in the use of resources and energy. Actions could include reducing waste and recycling, adopting sustainable dietary habits (opting for a more plant-based diet and reducing meat consumption), greater use of public transport, active mobility (walking, cycling), and avoiding single use items (e.g. plastic, etc.).",
    color: "bg-yellow-300",
    icon: "/LSAP/LSAP_4_Adoption_of_Sustainable_Lifestyles-1.png",
    image: "/images/Didier-Weemaels-icon-photo.jpg",
    keywords: ["sustainable", "lifestyles", "sufficiency"],
  },
  {
    id: "4",
    title: "ECOLOGICAL EDUCATION",
    description:
      "Ecological Education is about re-thinking and re-designing curricular and institutional reform in the spirit of integral ecology in order to foster ecological awareness and transformative action. Actions could include ensuring equitable access to education for all and promoting human rights, fostering Laudato Si’ themes within the community, encouraging ecological leadership (students, teachers), and ecological restoration activities.",
    color: "bg-red-700",
    icon: "/LSAP/LSAP_5_Ecological_Education-1.png",
    image: "/images/Parker-Gibbons-icon-photo.jpg",
    keywords: ["education", "awareness", "action"],
  },
  {
    id: "5",
    title: "ECOLOGICAL SPIRITUALITY",
    description:
      "Ecological Spirituality springs from a profound ecological conversion and helps us to “discover God in all things”, both in the beauty of creation and in the sighs of the sick and the groans of the afflicted, aware that the life of the spirit is not dissociated from worldly realities. Actions could include promoting creation-based liturgical celebrations, developing ecological catechesis, retreats and formation programs, etc.",
    color: "bg-blue-700",
    icon: "/LSAP/LSAP_6_Ecological_Spirituality-1.png",
    image: "/images/Davide-Cantelli-icon-photo.jpg",
    keywords: ["spirituality", "conversion", "creation"],
  },
  {
    id: "6",
    title: "COMMUNITY RESILIENCE AND EMPOWERMENT",
    description:
      "Community resilience and empowerment envisage a synodal journey of community engagement and participatory action at various levels. Actions could include promoting advocacy and developing people’s campaigns, encouraging rootedness and a sense of belonging in local communities and neighborhood ecosystems.",
    color: "bg-[steelblue]",
    icon: "/LSAP/LSAP_7_Community_Resilience_and_Empowerment-1.png",
    image: "/images/Chang-Duong-icon-photo.jpg",
    keywords: ["resilience", "empowerment", "community"],
  },
];

const LaudatoSiGoals = () => {
  const [isSelected, setIsSelected] = useState("0");
  return (
    <div className="flex flex-col lg:flex-row w-full justify-center items-start gap-10 p-5">
      <div className="flex flex-col gap-2 mx-auto w-full sm:w-fit">
        {LaudatoSiCategories.map((category) => (
          <Button
            className="p-5"
            variant="default"
            key={category.id}
            onClick={() => setIsSelected(category.id)}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <div className="flex-1">
        {LaudatoSiCategories.filter(
          (category) => category.id === isSelected
        ).map((category) => (
          <div key={category.id} className="h-[650px] relative p-5">
            <Image
              src={category.icon}
              alt={category.title}
              width={200}
              height={200}
              className="object-cover p-5 mx-auto  rounded-xl"
            />
            <p className="bg-white bg-opacity-70 w-full lg:w-1/2 mx-auto rounded p-5">
              {category.description}
            </p>
            <Image
              src={category.image}
              alt={category.title}
              placeholder="blur"
              blurDataURL={category.image}
              fill
              className="object-cover rounded-xl -z-10"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaudatoSiGoals;
