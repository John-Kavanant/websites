
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import FeatureCard from "@/components/ui/FeatureCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTASection from "@/components/sections/CTASection";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-10 pb-20 md:py-24 bg-gradient-to-br from-white via-iza-blue-light to-iza-purple-light">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <Badge variant="outline" className="mb-4 bg-white px-3 py-1 text-iza-purple border-iza-purple">
                End-to-End Healthcare Monitoring
              </Badge>
              <h1 className="heading-xl mb-6">
                <span className="text-gradient">End-to-End RPM, RTM & Cardiac Monitoring.</span>
                <br /> 
                One Platform. Complete Support.
              </h1>
              <p className="text-iza-gray-dark text-lg mb-8">
                A unified platform that delivers scalable virtual healthcare technology in a simplified solution with minimal staff, 
                24/7/365 technical support with complete device logistics, and full Medicare compliance. IzaHealth is your partner for Remote Patient Monitoring (RPM), Remote Therapeutic Monitoring (RTM), and Cardiac Monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto btn-primary text-base">Book a Demo</Button>
                </Link>
                <Link to="/onboarding">
                  <Button variant="outline" className="w-full sm:w-auto btn-outline text-base">Start Onboarding</Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-iza-blue-light text-iza-blue flex items-center justify-center text-xs font-medium`}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="ml-3 text-sm text-iza-gray-dark">
                  <span className="font-semibold">Trusted & loved by </span> healthcare providers
                </p>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <img 
                src="./CoverPageVideoCall.png" 
                alt="Healthcare provider using IzaHealth platform" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-12 bg-white border-y border-gray-100">
        <div className="container-custom">
          <p className="text-center text-iza-gray mb-8">Trusted by leading healthcare providers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Memorial Health", "Pacific Medical", "CarePoint", "HealthStream", "MediTrust"].map((partner, index) => (
              <div key={index} className="text-iza-gray-dark font-semibold opacity-60">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our Complete Monitoring Solutions" 
            subtitle="IzaHealth offers end-to-end monitoring services that help healthcare providers improve patient outcomes while generating new revenue streams."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Remote Patient Monitoring"
              description="Monitor patients with chronic conditions from anywhere with our user-friendly platform."
              features={[
                "Chronic condition management",
                "Real-time vital tracking",
                "Patient engagement tools",
                "Compliant billing support"
              ]}
              link="/rpm"
              imageUrl="./RPMLady.png"
            />
            
            <ServiceCard 
              title="Remote Therapeutic Monitoring"
              description="Track non-physiologic data for respiratory, musculoskeletal, and behavioral health conditions."
              features={[
                "Medication adherence tracking",
                "Therapy response monitoring",
                "Patient-reported outcomes",
                "RTM-specific billing support"
              ]}
              link="/rtm"
              imageUrl="./RTMLady.png"
            />
            
            <ServiceCard 
              title="Cardiac Monitoring"
              description="Comprehensive cardiac monitoring services including MCT, Holter, and Event Monitoring."
              features={[
                "24/7 certified technicians",
                "Fast report turnaround",
                "Tech & device support",
                "Complete documentation"
              ]}
              link="/cardiac"
              imageUrl="./CardiacTata.png"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-iza-gray-light">
        <div className="container-custom">
          <SectionHeading 
            title="Why Healthcare Providers Choose IzaHealth" 
            subtitle="We go beyond software to deliver complete end-to-end solutions that generate revenue and improve outcomes."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="New Revenue Stream"
              description="Generate sustainable income through Medicare-reimbursable monitoring programs with minimal overhead."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Minimal Staff Resources"
              description="Our platform and support team handle the heavy lifting, allowing your staff to focus on patient care."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="White Glove Onboarding"
              description="From setup and training to go-live, our team ensures a smooth implementation process."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Complete Technical Support"
              description="24/7 support for your staff and patients, ensuring technologies work seamlessly."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 17h.01" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Managed Device Logistics"
              description="We handle device inventory, shipping, returns, and replacements for a hassle-free experience."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Medicare Compliance"
              description="Stay compliant with all CMS requirements with our built-in documentation and billing support."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Revenue CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-iza-blue to-iza-purple rounded-xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Turn Patient Monitoring Into a Revenue-Generating Service
                </h2>
                <p className="text-white/80 mb-6">
                  Medicare reimburses up to $1,500 per patient per year for RPM services, 
                  with additional reimbursements available for RTM and Cardiac Monitoring.
                </p>
                <Link to="/reimbursement">
                  <Button className="bg-white text-iza-purple hover:bg-iza-blue-light hover:text-iza-blue transition-colors">
                    Learn About Reimbursements
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/3 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Quick Revenue Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-white/80 mb-1">Medicare patients:</p>
                    <p className="text-2xl font-bold">100</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">Monthly revenue:</p>
                    <p className="text-2xl font-bold">$12,500</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/80 mb-1">Annual revenue:</p>
                    <p className="text-2xl font-bold">$150,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="section-padding bg-iza-gray-light">
        <div className="container-custom">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Healthcare providers across the country trust IzaHealth to power their patient monitoring programs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="IzaHealth transformed our practice. Their platform is intuitive, and the support team handles everything from patient onboarding to technical issues."
              author="Dr. Sarah Johnson"
              role="Cardiologist"
              company="Memorial Cardiology"
            />
            
            <TestimonialCard
              quote="We've seen a significant increase in revenue while improving patient outcomes. The white-glove service truly sets IzaHealth apart from other vendors."
              author="Michael Chen"
              role="Practice Manager"
              company="Pacific Medical Group"
            />
            
            <TestimonialCard
              quote="The ease of implementation was impressive. Within weeks, we had a fully operational RPM program generating revenue. Their team made the process seamless."
              author="Dr. Robert Mills"
              role="Internal Medicine"
              company="CarePoint Clinic"
            />
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <CTASection
        title="Ready to Transform Your Patient Monitoring?"
        subtitle="Get started today and see why leading healthcare providers choose IzaHealth for their monitoring needs."
        primaryButtonText="Book a Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
        bgColor="bg-white"
      />
    </div>
  );
};

export default HomePage;
