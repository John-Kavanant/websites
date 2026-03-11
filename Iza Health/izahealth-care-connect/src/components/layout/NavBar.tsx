
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-iza-blue">Iza<span className="text-iza-purple">Health</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-iza-purple font-bold hover:text-iza-blue transition-colors">HOME</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-iza-purple font-bold bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">MONITORING</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/rpm"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            onClick={() => isMenuOpen && toggleMenu()}
                          >
                            <div className="text-sm font-medium leading-none">RPM</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Remote Patient Monitoring
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/rtm"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            onClick={() => isMenuOpen && toggleMenu()}
                          >
                            <div className="text-sm font-medium leading-none">RTM</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Remote Therapeutic Monitoring
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/cardiac"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            onClick={() => isMenuOpen && toggleMenu()}
                          >
                            <div className="text-sm font-medium leading-none">Cardiac</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Cardiac Monitoring Services
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/services" className="text-iza-purple font-bold hover:text-iza-blue transition-colors">SERVICES</Link>
            <Link to="/onboarding" className="text-iza-purple font-bold hover:text-iza-blue transition-colors">ONBOARDING</Link>
            <Link to="/reimbursement" className="text-iza-purple font-bold hover:text-iza-blue transition-colors">REIMBURSMENT</Link>
            <Link to="/contact" className="ml-4">
              <Button className="bg-iza-blue hover:bg-iza-blue-dark">Contact Us</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-iza-gray-dark hover:text-iza-blue p-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-iza-gray-dark hover:text-iza-blue transition-colors" onClick={toggleMenu}>Home</Link>
              
              <div className="pl-0">
                <div className="text-iza-gray-dark font-medium mb-2">Monitoring</div>
                <div className="pl-4 flex flex-col space-y-3">
                  <Link to="/rpm" className="text-iza-gray-dark hover:text-iza-blue transition-colors" onClick={toggleMenu}>RPM</Link>
                  <Link to="/rtm" className="text-iza-gray-dark hover:text-iza-blue transition-colors" onClick={toggleMenu}>RTM</Link>
                  <Link to="/cardiac" className="text-iza-gray-dark hover:text-iza-blue transition-colors" onClick={toggleMenu}>Cardiac</Link>
                </div>
              </div>
              
              <Link to="/services" className="text-iza-gray-dark hover:text-iza-blue transition-colors" onClick={toggleMenu}>Services</Link>
              <Link to="/onboarding" className="text-iza-gray-dark hover:text-iza-blue transition-colors" onClick={toggleMenu}>Onboarding</Link>
              <Link to="/reimbursement" className="text-iza-gray-dark hover:text-iza-blue transition-colors" onClick={toggleMenu}>Reimbursement</Link>
              <Link to="/contact" className="inline-block mt-2" onClick={toggleMenu}>
                <Button className="w-full bg-iza-blue hover:bg-iza-blue-dark">Contact Us</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
