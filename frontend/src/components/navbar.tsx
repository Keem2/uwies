//Menu on top of page
import ThemeSwitcher from "./ui/themeswitcher";
import MenuDropdown from "./ui/dropdown";
const Navbar = () => {
   return (
      <div className="flex justify-between pt-6 gap-10 text-black dark:text-white">
         <MenuDropdown />
         <ThemeSwitcher />
      </div>
   );
};

export default Navbar;
