import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">PCT</span>
              </div>
              <span className="text-lg font-bold">Physicians Care Team</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete Remote Patient Monitoring solutions that drive revenue and improve patient outcomes.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Improving lives through technology</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/platform" className="block text-sm hover:text-primary transition-colors">
                Platform
              </Link>
              <Link to="/services" className="block text-sm hover:text-primary transition-colors">
                Services
              </Link>
              {/* <Link to="/programs" className="block text-sm hover:text-primary transition-colors">
                Programs
              </Link> */}
              <Link to="/about" className="block text-sm hover:text-primary transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <div className="space-y-2">
              <Link to="/programs#rpm" className="block text-sm hover:text-primary transition-colors">
                Remote Patient Monitoring
              </Link>
              <Link to="/programs#rtm" className="block text-sm hover:text-primary transition-colors">
                Remote Therapeutic Monitoring
              </Link>
              <Link to="/programs#mcm" className="block text-sm hover:text-primary transition-colors">
                Mobile Cardiac Monitoring
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              {/* <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+1 352-240-1184</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@physicianscareteam.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">917 south 14th street, Leesburg Fl 34748 </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Physicians Care Team. All rights reserved. End to end platform and solutions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;