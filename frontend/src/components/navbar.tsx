import ThemeSwitcher from "./ui/themeswitcher";
const Navbar = () => {
   return (
      <div className="flex justify-end pt-6 text-black dark:text-white">
         <ThemeSwitcher />
      </div>
   );
};

export default Navbar;
