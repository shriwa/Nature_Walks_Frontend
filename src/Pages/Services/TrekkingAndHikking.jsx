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
  ];

  const title = "TREKKING & HIKING";
  const description =
    "A day out in the Tuk Tuk to the best Sri Lankan Tea Plantation in Sri Lanka. Lipton’s Seat and popular tea factory called Dambethanna Tea Factory. Nothing can be compared to the blowing wind in the countryside in a tuk-tuk ride.";

  return (
    <ServicesLayout
      title={title}
      description={description}
      servicesDetails={servicesDetails}
    />
  );
};

export default TrekkingAndHiking;
