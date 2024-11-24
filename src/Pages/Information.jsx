import React from "react";
import InformationTemplate from "../Components/InformationTemplate";

const pricing = [
  {
    id: 1,
    title: "Lowest Rate Guarantee",
    image:
      "https://lh6.googleusercontent.com/wzW0lL-76YhwicvXmZdHTmFtTLRWjNoZZISgWnctRERAmJAT1A5bOysIOnpk509nP17ubSBU7tUTG2-KK8Q8tLmXoRqowHI9pc9CEOxnthGnnq7hOKear9Pi8b6Y5smYoA=w1280",
    price: "200 US$ For 2 Person",
  },
  {
    id: 2,
    title: "Lowest Rate Guarantee",
    image:
      "https://lh4.googleusercontent.com/C8B_77q3aKT5mfcm6azn9mYikfNPmVPHXlSck0ZSGdymlHVohJ6eGKApGtiJLHR9fGeNpx_b9r3rg-EDZi_C8ytunl4NVwOpXXdlj7qTXP_6Z1x1DcgQmQPdhInDAfEMBA=w1280",
    price: "200 US$ For 2 Person",
  },
  {
    id: 3,
    title: "Lowest Rate Guarantee",
    image:
      "https://lh5.googleusercontent.com/2VeXxfZsh2Xa5mK_VsfmGyg5JGZl3pEmjd81rom7c3xDQXifCpcJkSUMdD-4MmD-3kPOZqgLrEYEtkh4R_sIfqJwLmBcss-S0qXRyw3PWX7_4KiQmhs6UkC-6j66Pbvx5A=w1280",
    price: "90 US$ For 2 Person",
  },
];

const Information = () => {
  return (
    <div className="py-28 lg:py-32">
      {/* <Trekking /> */}

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-8 px-2">
          {pricing.map((item) => {
            return (
              <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full ">
                <div className="relative h-56 m-4 overflow-hidden text-white rounded-md">
                  <img src={item.image} alt="card-image" />
                </div>
                <div className="p-2">
                  <div className="flex items-center mb-2">
                    <h6 className="text-slate-800 text-xl font-semibold">
                      {item.title}
                    </h6>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-0 mt-2">
                  <div className="w-full rounded-md bg-primary py-2 px-4 border border-transparent text-center text-sm text-white">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="">
        <InformationTemplate
          title="Trekking Hiking Nature Walks in Ella, Haputale, Ohiya, Belihuloya, Nuwaraeliya & Bandarawela Sri Lanka"
          subtitle={PlantationTreking.subtitle}
          paragraph={PlantationTreking.paragraph}
          schedule={PlantationTreking.schedule}
          imageSrc={PlantationTreking.image}
        />
      </div>

      <div className="">
        <InformationTemplate
          subtitle={ThangamaleTrekking.subtitle}
          schedule={ThangamaleTrekking.schedule}
          imageSrc={ThangamaleTrekking.image}
        />
      </div>
      <div className="">
        <InformationTemplate
          subtitle={OhiyaTrekking.subtitle}
          schedule={OhiyaTrekking.schedule}
          imageSrc={OhiyaTrekking.image}
          duration={OhiyaTrekking.duration}
          whatsIncluded={OhiyaTrekking.whatsIncluded}
          departure={OhiyaTrekking.departure}
          trekkingLevel={OhiyaTrekking.trekkingLevel}
          physicalFitness={OhiyaTrekking.physicalFitness}
          lowestRate={OhiyaTrekking.lowestRate}
          trainTimes={OhiyaTrekking.trainTimes}
        />
      </div>
      <div className="">
        <InformationTemplate
          paragraph={HortonPlainsHike.paragraphs}
          schedule={HortonPlainsHike.schedule}
          imageSrc={HortonPlainsHike.image}
          subtitle={HortonPlainsHike.subtitle}
          duration={HortonPlainsHike.duration}
          whatsIncluded={HortonPlainsHike.whatsIncluded}
          departure={HortonPlainsHike.departure}
          trekkingLevel={HortonPlainsHike.trekkingLevel}
          physicalFitness={HortonPlainsHike.physicalFitness}
          lowestRate={HortonPlainsHike.lowestRate}
          trainTimes={HortonPlainsHike.trainTimes}
        />
      </div>
      <div className="">
        <InformationTemplate
          subtitle={LittleAdamsPeakAndNineArches.subtitle}
          schedule={LittleAdamsPeakAndNineArches.schedule}
          paragraph={LittleAdamsPeakAndNineArches.paragraphs}
          imageSrc={LittleAdamsPeakAndNineArches.image}
          duration={LittleAdamsPeakAndNineArches.duration}
          whatsIncluded={LittleAdamsPeakAndNineArches.whatsIncluded}
          departure={LittleAdamsPeakAndNineArches.departure}
          trekkingLevel={LittleAdamsPeakAndNineArches.trekkingLevel}
          physicalFitness={LittleAdamsPeakAndNineArches.physicalFitness}
          lowestRate={LittleAdamsPeakAndNineArches.lowestRate}
        />
      </div>
      <div className="">
        <InformationTemplate
          subtitle={TrekkingToEllaAttractions.subtitle}
          schedule={TrekkingToEllaAttractions.schedule}
          paragraph={TrekkingToEllaAttractions.paragraphs}
          imageSrc={TrekkingToEllaAttractions.image}
          duration={TrekkingToEllaAttractions.duration}
          whatsIncluded={TrekkingToEllaAttractions.whatsIncluded}
          departure={TrekkingToEllaAttractions.departure}
          trekkingLevel={TrekkingToEllaAttractions.trekkingLevel}
          physicalFitness={TrekkingToEllaAttractions.physicalFitness}
          lowestRate={TrekkingToEllaAttractions.lowestRate}
        />
      </div>
      <div className="">
        <InformationTemplate
          subtitle={HortonPlainsTrekkingTour.subtitle}
          schedule={HortonPlainsTrekkingTour.schedule}
          paragraph={HortonPlainsTrekkingTour.paragraphs}
          imageSrc={HortonPlainsTrekkingTour.image}
          duration={HortonPlainsTrekkingTour.duration}
          whatsIncluded={HortonPlainsTrekkingTour.whatsIncluded}
          departure={HortonPlainsTrekkingTour.departure}
          trekkingLevel={HortonPlainsTrekkingTour.trekkingLevel}
          physicalFitness={HortonPlainsTrekkingTour.physicalFitness}
          lowestRate={HortonPlainsTrekkingTour.lowestRate}
        />
      </div>
      <div className="">
        <InformationTemplate
          subtitle={SingelTreeTrekkingTour.subtitle}
          schedule={SingelTreeTrekkingTour.schedule}
          paragraph={SingelTreeTrekkingTour.paragraphs}
          imageSrc={SingelTreeTrekkingTour.image}
          duration={SingelTreeTrekkingTour.duration}
          whatsIncluded={SingelTreeTrekkingTour.whatsIncluded}
          departure={SingelTreeTrekkingTour.departure}
          trekkingLevel={SingelTreeTrekkingTour.trekkingLevel}
          physicalFitness={SingelTreeTrekkingTour.physicalFitness}
          lowestRate={SingelTreeTrekkingTour.lowestRate}
        />
      </div>
    </div>
  );
};

export default Information;
