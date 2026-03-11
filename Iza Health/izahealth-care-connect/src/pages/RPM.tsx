
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ReimbursementTable from "@/components/ui/ReimbursementTable";
import CTASection from "@/components/sections/CTASection";

const RPMPage = () => {
  // RPM reimbursement data
  const rpmReimbursementData = [
    {
      code: "99453",
      description: "Initial setup and patient education",
      amount: "$19.90",
      frequency: "Once per patient"
    },
    {
      code: "99454",
      description: "Supply of devices with daily recordings/alerts",
      amount: "$50.72",
      frequency: "Monthly"
    },
    {
      code: "99457",
      description: "First 20 min of RPM services",
      amount: "$50.18",
      frequency: "Monthly"
    },
    {
      code: "99458",
      description: "Each additional 20 min of RPM services",
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
                Remote Patient Monitoring
              </h1>
              <p className="text-iza-gray-dark text-lg mb-8">
                Our comprehensive RPM program helps providers manage patients with chronic conditions while
                generating a new revenue stream through Medicare reimbursements.
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
                src="./RPMCoverNew.png"
                alt="Remote Patient Monitoring Device"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is RPM Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="What is Remote Patient Monitoring?"
            subtitle="RPM uses digital technologies to collect medical and health data from patients in one location and electronically transmit that information to healthcare providers in a different location for assessment and recommendations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-4">How RPM Works with IzaHealth</h3>
              <ul className="space-y-4">
                {[
                  "Patients receive easy-to-use monitoring devices that automatically transmit data to our secure platform",
                  "Healthcare providers gain access to real-time patient data through our intuitive dashboard",
                  "Our care coordinators help with patient onboarding, education, and ongoing support",
                  "Automated alerts notify your team of concerning readings requiring intervention",
                  "Built-in tools ensure compliant documentation for Medicare reimbursement"
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-iza-blue-light text-iza-blue flex items-center justify-center mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-iza-gray-light p-6 rounded-lg">
              <h3 className="heading-sm mb-4">Common Conditions for RPM</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Hypertension",
                  "Diabetes",
                  "Heart Failure",
                  "COPD",
                  "Asthma",
                  "Obesity",
                  "Post-surgical Care",
                  "Medication Management"
                ].map((condition, index) => (
                  <div key={index} className="bg-white p-4 rounded-md flex items-center shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-iza-blue mr-2"></div>
                    <span>{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="section-padding bg-iza-gray-light">
        <div className="container-custom">
          <SectionHeading
            title="IzaHealth RPM Platform Features"
            subtitle="Our platform makes implementing and scaling your RPM program simple and efficient."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Scalable & Easy to Use"
              description="Intuitive interface designed for healthcare providers and staff of all technical abilities."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              }
            />

            <FeatureCard
              title="Real-Time Monitoring"
              description="View patient vitals as they're recorded with automatic flagging of concerning readings."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              }
            />

            <FeatureCard
              title="Advanced Analytics"
              description="Track trends and patterns to make informed clinical decisions and improve patient outcomes."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              }
            />

            <FeatureCard
              title="Compliance Tools"
              description="Built-in time tracking and documentation features to ensure Medicare compliance."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
              }
            />

            <FeatureCard
              title="Escalation Alerts"
              description="Complete care coordination with escalation flow for abnormal readings."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              }
            />

            <FeatureCard
              title="Easy Device Operation"
              description="Devices are pre-configured and assigned directly to patients, ensuring a seamless experience."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M8 6v.01" />
                  <path d="M12 6v.01" />
                  <path d="M16 6v.01" />
                  <path d="M22 10H2" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our RPM Services"
            subtitle="More than just software, IzaHealth provides comprehensive services to ensure your RPM program succeeds."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-iza-blue-light p-8 rounded-xl">
              <h3 className="heading-md mb-6">For Providers</h3>
              <ul className="space-y-4">
                {[
                  "Staff training and ongoing education",
                  "Dedicated account manager",
                  "Reimbursement guidance and support",
                  "Custom implementation strategies",
                  "Practice analysis for patient identification"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 mr-3 text-iza-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-iza-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-iza-purple-light p-8 rounded-xl">
              <h3 className="heading-md mb-6">For Patients</h3>
              <ul className="space-y-4">
                {[
                  "24/7 technical support",
                  "Mobile independent devices",
                  "Comprehensive onboarding and education",
                  "Device shipping, setup, and replacement",
                  "Regular engagement to ensure compliance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 mr-3 text-iza-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-iza-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Independent Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Easy to Use Devices"
            subtitle="Patients can simply take reading and the data is automatically sent to our platform. Our devices work without the need of an app, smartphone or complex setup."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <div className="bg-iza-blue-light p-8 rounded-xl"> */}
              <img
  style={{ width: "50%", height: "auto", display: "block", margin: "0 auto" }}
  src="./Happy Elder Patient.png"
  alt="Happy Elder Patient"
/>

              {/* <h3 className="heading-md mb-6">For Providers</h3>
              <ul className="space-y-4">
                {[
                  "Staff training and ongoing education",
                  "Dedicated account manager",
                  "Reimbursement guidance and support",
                  "Custom implementation strategies",
                  "Practice analysis for patient identification"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 mr-3 text-iza-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-iza-gray-dark">{item}</span>
                  </li>
                ))}
              </ul> */}
            {/* </div> */}

            <div className="p-2 rounded-xl">
              <h3 className="heading-md mb-6">For Patients</h3>
              <ul className="space-y-4">
                {[
                  "Our devices are easy to use and require no app or smartphone",
                  "As soon as the patient takes a reading, the data is sent to our platform",
                  "Usage of mobile app is completely optional",
                  "Elder patient can find it difficult to use a smartphone, navigating through the app, and ensuring the device is connected",
                  "Our devices are designed to be simple and user-friendly, ensuring that patients can easily take their readings without any technical barriers"
                  
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 mr-3 text-iza-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-iza-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reimbursement Section */}
      <section className="section-padding bg-iza-gray-light">
        <div className="container-custom">
          <SectionHeading
            title="Medicare Reimbursement"
            subtitle="Turn chronic care into a revenue-generating service stream with Medicare-reimbursable RPM codes."
          />

          <ReimbursementTable
            title="RPM Medicare Reimbursement Rates (National Average)"
            items={rpmReimbursementData}
            className="max-w-4xl mx-auto"
          />

          <div className="mt-10 bg-white p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="heading-sm mb-4">Revenue Potential Example</h3>
            <p className="mb-4 text-iza-gray-dark">
              For a practice monitoring 100 Medicare patients:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">Initial setup (99453)</td>
                    <td className="py-2 text-right">100 patients × $19.90 = <span className="font-semibold">$1,990</span> (one-time)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">Monthly device supply (99454)</td>
                    <td className="py-2 text-right">100 patients × $50.72 = <span className="font-semibold">$5,572</span>/month</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-medium">Monthly monitoring service (99457)</td>
                    <td className="py-2 text-right">100 patients × $50.18 = <span className="font-semibold">$5,018</span>/month</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Total potential monthly revenue</td>
                    <td className="py-2 text-right text-iza-blue font-bold">$10,590/month</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Total potential annual revenue</td>
                    <td className="py-2 text-right text-iza-blue font-bold">$127,080/year + $1,990 initial setup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {/* <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <TestimonialCard
              quote="We implemented IzaHealth's RPM program 8 months ago for our diabetic and hypertensive patients. Not only has it improved patient outcomes and medication adherence, but it's also generated over $85,000 in additional revenue for our practice."
              author="Dr. Jennifer Adams"
              role="Internal Medicine"
              company="HealthFirst Medical Group"
              className="shadow-lg"
            />
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CTASection
        title="Ready to Implement RPM in Your Practice?"
        subtitle="Join hundreds of providers who are improving patient outcomes while generating new revenue with IzaHealth's RPM solution."
        primaryButtonText="Schedule a Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="View Onboarding Process"
        secondaryButtonLink="/onboarding"
      />
    </div>
  );
};

export default RPMPage;
