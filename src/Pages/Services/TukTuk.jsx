import React from "react";
import ServicesLayout from "../../Layout/ServicesLayout";
import {
  LiptionsTukService,
  PlantationTukService,
  PlantationTukService_2,
  FullDayTukTukSafari,
  EllaRockTukTukSafari,
  PekoeTrailExperience,
} from "../../Components/Locations/TukTukData";

const TukTuk = () => {
  const servicesDetails = [
    LiptionsTukService,
    PlantationTukService,
    PlantationTukService_2,
    FullDayTukTukSafari,
    EllaRockTukTukSafari,
    PekoeTrailExperience,
  ];

  const title = "Pekoe Tuk Tuk Safari";
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

export default TukTuk;
