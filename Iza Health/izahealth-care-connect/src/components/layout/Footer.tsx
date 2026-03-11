
import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-iza-gray-light border-t">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-iza-blue">Iza<span className="text-iza-purple">Health</span></span>
            </Link>
            <p className="mt-4 text-iza-gray-dark">
              End-to-end RPM, RTM & Cardiac Monitoring solutions for healthcare providers.
            </p>
            <div className="mt-4 flex space-x-2">
              {/* Social Media Icons placeholder */}
              {/* <a href="#" className="w-10 h-10 rounded-full bg-iza-blue-light flex items-center justify-center text-iza-blue hover:bg-iza-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a> */}
              <a href="#" className="w-10 h-10 rounded-full bg-iza-blue-light flex items-center justify-center text-iza-blue hover:bg-iza-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-iza-blue-light flex items-center justify-center text-iza-blue hover:bg-iza-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-iza-gray-dark">Our Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/rpm" className="text-iza-gray hover:text-iza-blue transition-colors">Remote Patient Monitoring</Link></li>
              <li><Link to="/rtm" className="text-iza-gray hover:text-iza-blue transition-colors">Remote Therapeutic Monitoring</Link></li>
              <li><Link to="/cardiac" className="text-iza-gray hover:text-iza-blue transition-colors">Cardiac Monitoring</Link></li>
              <li><Link to="/services" className="text-iza-gray hover:text-iza-blue transition-colors">Support Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-iza-gray-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/onboarding" className="text-iza-gray hover:text-iza-blue transition-colors">Onboarding</Link></li>
              <li><Link to="/reimbursement" className="text-iza-gray hover:text-iza-blue transition-colors">Reimbursement</Link></li>
              <li><Link to="#" className="text-iza-gray hover:text-iza-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-iza-gray hover:text-iza-blue transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-iza-gray-dark">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-iza-blue" />
                <span className="text-iza-gray">1800 19th St NW<br/>Washington, DC 20009</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-iza-blue" />
                <span className="text-iza-gray">+1 (571) 585-2278</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-iza-blue" />
                <span className="text-iza-gray">info@izahealth.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-iza-gray text-sm">
              © {currentYear} IzaHealth. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="text-iza-gray text-sm flex items-center">
                Made with <Heart className="mx-1 h-4 w-4 text-iza-purple" /> for healthcare providers
              </span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-iza-green-light text-iza-green-dark">
              HIPAA Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
