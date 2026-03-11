
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgColor?: string;
  className?: string;
}

const CTASection = ({ 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  bgColor = "bg-iza-purple-light",
  className
}: CTASectionProps) => {
  return (
    <section className={cn("py-16", bgColor, className)}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-4">{title}</h2>
          {subtitle && <p className="text-iza-gray-dark mb-8">{subtitle}</p>}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={primaryButtonLink}>
              <Button className="w-full sm:w-auto bg-iza-blue hover:bg-iza-blue-dark text-base px-8">
                {primaryButtonText}
              </Button>
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink}>
                <Button variant="outline" className="w-full sm:w-auto btn-outline text-base px-8">
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
