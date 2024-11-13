import React from "react";
import logo_1 from "../../assets/logo_1.png";

const Item = ({ Links, title }) => {
  return (
    <ul className="flex flex-col gap-2">
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name} className="">
          <a
            className="text-gray-700 hover:text-secondary duration-300 text-sm cursor-pointer leading-6 flex items-center gap-2"
            href={link.link}
          >
            {link.icon && <link.icon />}
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <a
        href="/"
        className="flex md:flex items-center justify-center md:gap-4 gap-3 md:pt-0 pt-4"
      >
        <img
          src={logo_1}
          className="md:h-16 h-16 rounded-md"
          alt="Naturewalk Logo"
        />
        <span className="self-center md:text-lg text-lg font-bold whitespace-nowrap text-primary">
          Lanka Nature Walks
        </span>
      </a>
    </div>
  );
};

// const Contact = ({ Links, title }) => {
//   return (
//     <ul className=" flex flex-col gap-2">
//       <h1 className="mb-1 font-semibold">{title}</h1>
//       {Links.map((link) => (
//         <li key={link.name} className=" ">
//           <a
//             className=" text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
//             href={link.link}
//           >
//             {link.icon} {link.name}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// };

export { Item, Logo };
