import React from "react";
import {
  PlantationTreking,
  ThangamaleTrekking,
  OhiyaTrekking,
  HortonPlainsHike,
  LittleAdamsPeakAndNineArches,
  TrekkingToEllaRock,
  TrekkingToEllaAttraction,
  KinchiguneTrekking,
  BaliuloyaTrekking,
  HortonPlainsWaterfallsTrekking,
  TeaPlantationEllaTrekking,
  ThangamaleSanctuaryTrekking,
  MistyMountainTrekking,
  MistyMountainHortonTrekking,
  NuwaraeliyaToEllaTrekking,
  VillageTrekkingWithTempleStay,
  TeaPluckingExperience,
  LiptonsFactory,
  BuduruwagalaBuddhaStatue,
  HortonplainWorldsendKirigalpoththaTrekking,
  SafariInYala,
} from "../../Components/Locations/TrekkingData";

import ServicesLayout from "../../Layout/ServicesLayout";

const TrekkingAndHiking = () => {
  const servicesDetails = [
    PlantationTreking,
    ThangamaleTrekking,
    OhiyaTrekking,
    HortonPlainsHike,
    LittleAdamsPeakAndNineArches,
    TrekkingToEllaRock,
    TrekkingToEllaAttraction,
    KinchiguneTrekking,
    BaliuloyaTrekking,
    HortonPlainsWaterfallsTrekking,
    TeaPlantationEllaTrekking,
    MistyMountainTrekking,
    MistyMountainHortonTrekking,
    NuwaraeliyaToEllaTrekking,
    VillageTrekkingWithTempleStay,
    TeaPluckingExperience,
    LiptonsFactory,
    BuduruwagalaBuddhaStatue,
    HortonplainWorldsendKirigalpoththaTrekking,
    SafariInYala,
  ];

  const title = "TREKKING & HIKING";
  const description =
    "Trekking and hiking in Sri Lanka offer breathtaking experiences across the country's lush landscapes. Popular areas such as Ella, Haputale, Ohiya, Belihuloya, Nuwara Eliya, and Bandarawela are ideal for adventurers. These regions are known for their rolling hills, tea plantations, misty mountains, and serene forests. One of the most captivating experiences is trekking through Sri Lankan tea plantations, where hikers can enjoy panoramic views, cool climates, and the rich cultural heritage of tea cultivation. Trails in these areas are perfect for nature lovers seeking to explore the island's natural beauty and tranquility.";

  return (
    <ServicesLayout
      title={title}
      description={description}
      servicesDetails={servicesDetails}
    />
  );
};

export default TrekkingAndHiking;
