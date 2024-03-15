import { Link } from "react-router-dom";
const Footer = () => {
   return (
      <footer className="text-center text-sm mb-7 ">
         <div className="flex justify-center gap-3 mb-6 text-neutral-500 dark:text-neutral-300">
            <Link to={`/privacy`} className="underline">
               Privacy Policy
            </Link>
            <span>&#183;</span>
            <Link to={`/terms`} className="underline">
               Terms of Service
            </Link>
         </div>
         <p className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-400 inline-block text-transparent bg-clip-text">
            A ❤️️ project by Akeem Smith
         </p>
      </footer>
   );
};

export default Footer;
