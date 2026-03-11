
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-iza-gray-light py-20">
      <div className="text-center max-w-md px-4">
        <h1 className="heading-xl mb-2">404</h1>
        <h2 className="heading-md mb-6">Page Not Found</h2>
        <p className="text-iza-gray mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="space-y-4">
          <Link to="/">
            <Button className="w-full bg-iza-blue hover:bg-iza-blue-dark">
              Return to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="w-full border-iza-blue text-iza-blue hover:bg-iza-blue hover:text-white">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
