
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  subtitleClassName?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  alignment = "center",
  className,
  subtitleClassName
}: SectionHeadingProps) => {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("mb-10 md:mb-16", alignmentClass[alignment])}>
      <h2 className={cn("heading-lg text-gradient", className)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-iza-gray-dark max-w-3xl", 
          alignmentClass[alignment] === "text-center" && "mx-auto", 
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
