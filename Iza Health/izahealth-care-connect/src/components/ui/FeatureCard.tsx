
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <Card className={cn("card-hover border-l-4 border-l-iza-blue", className)}>
      <CardHeader className="pb-2">
        {icon && <div className="mb-3 text-iza-blue">{icon}</div>}
        <CardTitle className="text-xl font-semibold text-iza-gray-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-iza-gray">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
