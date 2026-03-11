
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import ReimbursementTable from "@/components/ui/ReimbursementTable";
import CTASection from "@/components/sections/CTASection";

const RTMPage = () => {
  // RTM reimbursement data
  const rtmReimbursementData = [
    {
      code: "98975",
      description: "Initial setup and patient education",
      amount: "$19.38",
      frequency: "Once per patient"
    },
    {
      code: "98976/98977",
      description: "Supply of devices with daily recordings/alerts",
      amount: "$50.72",
      frequency: "Monthly"
    },
    {
      code: "98980",
      description: "First 20 min of RTM services",
      amount: "$50.18",
      frequency: "Monthly"
    },
    {
      code: "98981",
      description: "Each additional 20 min of RTM services",
      amount: "$40.84",
      frequency: "Up to 2x monthly"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white via-iza-blue-light to-iza-purple-light">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h1 className="heading-xl mb-6">
                Remote Therapeutic Monitoring
              </h1>
              <p className="text-iza-gray-dark text-lg mb-8">
                Track non-physiologic data for respiratory, musculoskeletal, and behavioral health conditions
                while generating additional revenue for your practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto btn-primary text-base">Get Started</Button>
                </Link>
                <Link to="/reimbursement">
                  <Button variant="outline" className="w-full sm:w-auto btn-outline text-base">
                    View Reimbursements
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <img 
                src="./RTMcoverUpdated.png" 
                alt="Remote Therapeutic Monitoring" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is RTM Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="What is Remote Therapeutic Monitoring?" 
            subtitle="RTM tracks non-physiologic data related to respiratory, musculoskeletal, and behavioral health conditions, enabling healthcare providers to monitor therapy adherence and response."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-4">How RTM Differs from RPM</h3>
              <p className="text-iza-gray-dark mb-6">
                While RPM focuses on physiological data like blood pressure and blood glucose, 
                RTM monitors non-physiological data such as:
              </p>
              <ul className="space-y-4">
                {[
                  "Medication adherence and response",
                  "Therapy adherence and response",
                  "Respiratory system status",
                  "Musculoskeletal system status",
                  "Pain levels and management",
                  "Patient-reported outcomes"
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <svg className="h-6 w-6 mr-3 text-iza-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-iza-purple-light p-6 rounded-lg">
              <h3 className="heading-sm mb-4">RTM Clinical Applications</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Asthma Management", 
                  "COPD Therapy", 
                  "Physical Therapy", 
                  "Joint Replacement Recovery", 
                  "Pain Management", 
                  "Medication Adherence", 
                  "Behavioral Health", 
                  "Post-surgical Rehabilitation"
                ].map((condition, index) => (
                  <div key={index} className="bg-white p-4 rounded-md flex items-center shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-iza-purple mr-2"></div>
                    <span>{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reimbursement Section */}
      <section className="section-padding bg-iza-gray-light">
        <div className="container-custom">
          <SectionHeading 
            title="Medicare RTM Reimbursement" 
            subtitle="Boost your practice's income with Medicare-reimbursable RTM services."
          />
          
          <ReimbursementTable 
            title="RTM Medicare Reimbursement Rates (National Average)" 
            items={rtmReimbursementData}
            className="max-w-4xl mx-auto"
          />
          
          <div className="mt-10 p-8 bg-white rounded-lg max-w-4xl mx-auto">
            <h3 className="heading-sm mb-6 text-center">Implementing Both RPM & RTM</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-iza-blue mb-2">Key Benefits</h4>
                <ul className="space-y-2">
                  {[
                    "Comprehensive patient monitoring",
                    "Improved patient outcomes",
                    "Increased practice revenue",
                    "Better therapy adherence",
                    "Enhanced patient engagement"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <svg className="h-5 w-5 mr-2 text-iza-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-iza-purple mb-2">Revenue Impact</h4>
                <p className="text-sm text-iza-gray-dark mb-4">
                  Combining RPM and RTM services can generate up to <span className="font-bold">$230,000+</span> annually 
                  for practices with 100 eligible Medicare patients.
                </p>
                <Link to="/reimbursement" className="text-iza-blue hover:underline text-sm inline-flex items-center">
                  View detailed revenue calculator
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="IzaHealth RTM Platform Features" 
            subtitle="Our comprehensive RTM solution helps providers monitor therapeutic data and improve patient outcomes."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              title="Therapeutic Data Collection"
              description="Track medication adherence with our IOT pillbox, therapy response, pain levels, and other non-physiologic data."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Patient-Reported Outcomes"
              description="Enable patients to report symptoms, pain levels, and therapy responses through a user-friendly mobile app."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z" />
                  <path d="M17 11H7a2 2 0 0 0-2 2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z" />
                  <path d="M17 4H7a2 2 0 0 0-2 2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Therapy Adherence Tools"
              description="Monitor patient compliance with prescribed therapeutic regimens and medication schedules."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Implement RTM at Your Practice?"
        subtitle="Start generating additional revenue while improving outcomes for your respiratory, musculoskeletal, and behavioral health patients."
        primaryButtonText="Schedule a Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Onboarding"
        secondaryButtonLink="/onboarding"
      />
    </div>
  );
};

export default RTMPage;
