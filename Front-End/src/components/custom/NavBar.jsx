import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "/cityTouch.png";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 shadow-md bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-28 h-28 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6 text-2xl text-gray-700">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-2xl">
                  Home
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-2xl">
                  Services
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-2xl">
                  Contact
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Bigger Text */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2 px-4 text-2xl">
          <Button
            variant="ghost"
            className="justify-start text-left w-full text-2xl"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-left w-full text-2xl"
          >
            Services
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-left w-full text-2xl"
          >
            Contact
          </Button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
