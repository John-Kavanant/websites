
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  features?: string[];
  link: string;
  className?: string;
  imageUrl?: string;
}

const ServiceCard = ({ title, description, icon, features, link, className, imageUrl }: ServiceCardProps) => {
  return (
    <Card className={cn("h-full flex flex-col card-hover overflow-hidden", className)}>
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      <CardHeader className={cn(imageUrl ? "pt-4" : "")}>
        {icon && <div className="mb-3 text-iza-blue">{icon}</div>}
        <h3 className="heading-sm">{title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-iza-gray mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-iza-gray-dark">
                <svg className="h-4 w-4 mr-2 text-iza-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter>
        <Link to={link} className="w-full">
          <Button variant="default" className="w-full bg-iza-blue hover:bg-iza-blue-dark">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
