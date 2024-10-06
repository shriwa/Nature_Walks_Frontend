import React from "react";

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

const Pricing = () => {
  return (
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
  );
};

export default Pricing;
