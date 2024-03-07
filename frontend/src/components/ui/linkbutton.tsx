<<<<<<< HEAD
import { Link } from "react-router-dom";

type Props = {
   title: string;
   svgSrc: string;
   link: string;
   alt: string;
};

const LinkButton = ({ title, svgSrc, link, alt }: Props) => {
   return (
      <Link
         to={link}
         className="font-light text-gray-600 text-center px-5 py-8 rounded-xl border border-gray-400 md:px-12 text-lg block w-100 transition-all cursor-pointer hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 active:scale-90"
      >
         <img src={svgSrc} className="w-10 m-auto mb-5 dark:invert" alt={alt} />
         {title}
      </Link>
   );
};

export default LinkButton;
=======
import { Link } from "react-router-dom";

type Props = {
   title: string;
   svgSrc: string;
   link: string;
   alt: string;
};

const LinkButton = ({ title, svgSrc, link, alt }: Props) => {
   return (
      <Link
         to={link}
         className="font-light text-gray-600 text-center px-5 py-8 rounded-xl border border-gray-400 md:px-12 text-lg block w-100 transition-all cursor-pointer hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 active:scale-90"
      >
         <img src={svgSrc} className="w-10 m-auto mb-5 dark:invert" alt={alt} />
         {title}
      </Link>
   );
};

export default LinkButton;
>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194
