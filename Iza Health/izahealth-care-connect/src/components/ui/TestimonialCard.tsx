
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarUrl?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatarUrl,
  className,
}: TestimonialCardProps) => {
  return (
    <Card className={cn("card-hover", className)}>
      <CardContent className="p-6">
        <div className="mb-4 text-iza-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-20"
          >
            <path d="M11.0392 0.415039H7.03919L0.539185 11.4151V15.415H7.53919V23.415H15.5392V15.415H11.5392L11.0392 11.415V0.415039Z" />
            <path d="M23.0392 0.415039H19.0392L12.5392 11.4151V15.415H19.5392V23.415H27.5392V15.415H23.5392L23.0392 11.415V0.415039Z" />
          </svg>
        </div>
        <p className="text-iza-gray-dark mb-6 italic">{quote}</p>
        <div className="flex items-center">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={author}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-iza-purple-light text-iza-purple flex items-center justify-center mr-4">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-medium text-iza-gray-dark">{author}</p>
            <p className="text-sm text-iza-gray">
              {role}
              {company && `, ${company}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
