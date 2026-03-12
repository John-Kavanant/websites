import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/PCTLogog.png";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/platform", label: "Platform" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const programItems = [
    { href: "/programs/rpm", label: "RPM" },
    { href: "/programs/rtm", label: "RTM" },
    { href: "/programs/cardiac-monitoring", label: "Cardiac Monitoring" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">PCT</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Physicians Care Team
            </span> */}
            <img src={logo} alt="PCT Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
  {navItems.map((item) => (
    <Link
      key={item.href}
      to={item.href}
      className={cn(
        "text-base font-large font-bold transition-colors hover:text-primary",
        location.pathname === item.href
          ? "text-primary"
          : "text-muted-foreground"
      )}
    >
      {item.label.toUpperCase()}
    </Link>
  ))}
  
  {/* Programs Dropdown */}
  <DropdownMenu>
    <DropdownMenuTrigger className={cn(
      "flex items-center gap-1 text-base font-medium transition-colors hover:text-primary",
      location.pathname.startsWith("/programs")
        ? "text-primary"
        : "text-muted-foreground"
    )}>
      PROGRAMS
      <ChevronDown className="h-4 w-4" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-background border shadow-lg">
      {programItems.map((item) => (
        <DropdownMenuItem key={item.href} asChild>
          <Link
            to={item.href}
            className={cn(
              "block px-2 py-1 text-base transition-colors hover:text-primary",
              location.pathname === item.href
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {item.label.toUpperCase()}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
  
  <Button variant="hero" size="default" asChild>
    <Link to="/contact">GET STARTED</Link>
  </Button>
</div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="flex flex-col space-y-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-2 py-2 text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Programs Submenu */}
              <div className="px-2 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Programs</div>
                <div className="ml-4 space-y-1">
                  {programItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "block px-2 py-1 text-sm transition-colors hover:text-primary",
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Button variant="hero" size="sm" className="mt-2 mx-2" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;