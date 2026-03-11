
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import CTASection from "@/components/sections/CTASection";

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white via-iza-blue-light to-iza-purple-light">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-4">Our Comprehensive Services</h1>
          <p className="text-iza-gray-dark max-w-3xl mx-auto text-lg">
            IzaHealth provides complete end-to-end monitoring solutions that go beyond software to include 
            all the support services needed for your program's success.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="End-to-End Support Services" 
            subtitle="We handle the complexity so you can focus on patient care."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Care Coordination"
              description="Our team assists with patient enrollment, education, and ongoing engagement to ensure high compliance rates."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="24/7 Patient Support"
              description="Round-the-clock technical and clinical support for your patients, ensuring they can get help whenever needed."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              }
            />
            
            <FeatureCard 
              title="Technical Support"
              description="Dedicated support for your staff to ensure smooth platform operation and quick resolution of any issues."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 17h.01" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Certified Cardiac Technicians"
              description="Expert cardiac technicians who monitor and interpret cardiac data, providing fast and accurate reports."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Device Logistics"
              description="Complete management of device inventory, shipping, cleaning, and maintenance for hassle-free operation."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="End to End Billing Services"
              description="Comprehensive billing services to ensure you receive maximum reimbursement for your monitoring program."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Staff Training"
              description="Comprehensive training for your team on platform operation, patient enrollment, and best practices."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a6 6 0 0 1-7.743 5.743L10 14l-1 1v2H7v2H2v-4.257A6 6 0 1 1 18 8Z" />
                  <path d="M17 22v-2" />
                  <path d="M12 22h10" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Account Management"
              description="Dedicated account managers who provide ongoing support and ensure your program's success."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Patient Engagement"
              description="Tools and services to keep patients engaged in their monitoring program, improving compliance and outcomes."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding bg-iza-gray-light">
        <div className="container-custom">
          <SectionHeading 
            title="Our End-to-End Workflow" 
            subtitle="From implementation to ongoing support, we handle the entire process."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-iza-blue-light"></div>
              
              {/* Workflow steps */}
              {[
                {
                  step: "1",
                  title: "Implementation & Setup",
                  description: "We configure the platform to your specific needs, and prepare all necessary devices."
                },
                {
                  step: "2",
                  title: "Staff Training",
                  description: "Your team receives comprehensive training on the platform, patient enrollment process, and best practices."
                },
                {
                  step: "3",
                  title: "Patient Enrollment",
                  description: "Our care coordination team helps identify eligible patients and assists with the enrollment process."
                },
                {
                  step: "4",
                  title: "Device Distribution",
                  description: "We handle logistics of shipping devices to the practice or patients, including setup instructions and education materials."
                },
                {
                  step: "5",
                  title: "Ongoing Monitoring",
                  description: "Patients are monitored according to their specific program, with data accessible through our platform."
                },
                {
                  step: "6",
                  title: "Data Analysis & Alerts",
                  description: "Our system analyzes incoming data with automated alerts for concerning readings requiring intervention."
                },
                {
                  step: "7",
                  title: "End to End Billing",
                  description: "We provide documentation and end to end billing to ensure compliant, optimal Medicare reimbursement."
                },
                {
                  step: "8",
                  title: "Revenue Collection",
                  description: "Start collecting revenue from your monitoring program with our complete solution."
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute left-0 md:left-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-iza-blue text-white flex items-center justify-center z-10">
                    {item.step}
                  </div>
                  <div className="ml-12 md:ml-20">
                    <h3 className="heading-sm mb-2">{item.title}</h3>
                    <p className="text-iza-gray-dark">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Why Our End-to-End Approach Matters" 
            subtitle="See how our comprehensive service model compares to typical monitoring vendors."
          />
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left border-b-2">Service Component</th>
                  <th className="p-4 text-center border-b-2">Typical Vendors</th>
                  <th className="p-4 text-center border-b-2 bg-iza-blue-light">IzaHealth</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    component: "Monitoring Platform",
                    typical: "✓",
                    izahealth: "✓"
                  },
                  {
                    component: "Device Logistics Management",
                    typical: "Partial",
                    izahealth: "✓"
                  },
                  {
                    component: "Patient Onboarding Support",
                    typical: "Limited",
                    izahealth: "✓"
                  },
                  {
                    component: "24/7 Patient Technical Support",
                    typical: "Limited",
                    izahealth: "✓"
                  },
                  {
                    component: "Certified Cardiac Technicians",
                    typical: "×",
                    izahealth: "✓"
                  },
                  {
                    component: "Medicare Compliance Support",
                    typical: "Limited",
                    izahealth: "✓"
                  },
                  {
                    component: "Dedicated Account Manager",
                    typical: "×",
                    izahealth: "✓"
                  },
                  {
                    component: "Staff Training & Education",
                    typical: "Basic",
                    izahealth: "✓"
                  },
                  {
                    component: "End to End Billing",
                    typical: "x",
                    izahealth: "✓"
                  }
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 font-medium">{row.component}</td>
                    <td className="p-4 text-center">{row.typical}</td>
                    <td className="p-4 text-center bg-iza-blue-light font-medium text-iza-blue">
                      {row.izahealth}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <CTASection
        title="Ready to Experience Our End-to-End Support?"
        subtitle="Let us show you how our comprehensive services can help your practice implement a successful monitoring program."
        primaryButtonText="Book a Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="View Onboarding Process"
        secondaryButtonLink="/onboarding"
      />
    </div>
  );
};

export default ServicesPage;
