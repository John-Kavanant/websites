
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import CTASection from "@/components/sections/CTASection";

const CardiacPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white via-iza-blue-light to-iza-purple-light">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h1 className="heading-xl mb-6">
                Cardiac Monitoring Solutions
              </h1>
              <p className="text-iza-gray-dark text-lg mb-8">
                Comprehensive cardiac monitoring services including MCT, Holter, and Cardiac Event Monitoring 
                with 24/7 certified technician support.
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
                src="./cardiaPageCoverTest.png" 
                alt="Cardiac Monitoring Device" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Types Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Comprehensive Cardiac Monitoring Services" 
            subtitle="IzaHealth provides a complete suite of cardiac monitoring solutions to meet the unique needs of your patients."
          />
          
          <Tabs defaultValue="mct" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="mct">MCT</TabsTrigger>
              <TabsTrigger value="holter">Holter</TabsTrigger>
              <TabsTrigger value="event">Event Monitoring</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mct">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="heading-md mb-4">Mobile Cardiac Telemetry (MCT)</h3>
                  <p className="text-iza-gray-dark mb-6">
                    Our Mobile Cardiac Telemetry service provides continuous, real-time monitoring for up 
                    to 30 days, with immediate notification of critical arrhythmias to your practice.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "24/7 real-time monitoring by certified cardiac technicians",
                      "Immediate notification of critical arrhythmias",
                      "Automatic detection and transmission of cardiac events",
                      "Comprehensive end-of-service report with full disclosure",
                      "High diagnostic yield for intermittent arrhythmias"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 mr-3 text-iza-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-iza-gray-light p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Common Indications for MCT</h4>
                  <ul className="space-y-2">
                    {[
                      "Unexplained recurrent palpitations",
                      "Presyncope or syncope of suspected arrhythmic origin",
                      "AF management and monitoring",
                      "Cryptogenic stroke",
                      "Post-cardiac ablation monitoring",
                      "Evaluation of antiarrhythmic drug therapy"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-iza-blue mr-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="holter">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="heading-md mb-4">Holter Monitoring</h3>
                  <p className="text-iza-gray-dark mb-6">
                    Our Holter monitoring services provide continuous ECG recording for 24-48 hours and upto 14 days for extended holter 
                    with detailed reports generated by certified cardiac technicians.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Continuous recording for 24-48 hours up to 14 days",
                      "Detailed analysis of all beats and rhythms",
                      "Patient-friendly, lightweight devices",
                      "Fast turnaround on reports"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 mr-3 text-iza-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-iza-gray-light p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Common Indications for Holter</h4>
                  <ul className="space-y-2">
                    {[
                      "Evaluation of symptoms occurring daily",
                      "Palpitations, dizziness, or syncope",
                      "Monitoring effectiveness of antiarrhythmic therapy",
                      "Evaluation of pacemaker function",
                      "Assessment of frequent premature ventricular contractions",
                      "Evaluation of heart rate variability"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-iza-blue mr-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="event">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="heading-md mb-4">Cardiac Event Monitoring (CEM)</h3>
                  <p className="text-iza-gray-dark mb-6">
                    Our Event Monitors are ideal for capturing symptomatic cardiac events that occur intermittently 
                    over an extended period, with monitoring available for up to 30 days.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Patient-activated recording during symptoms",
                      "Pre-symptom memory capability",
                      "Extended monitoring period (up to 30 days)",
                      "Lightweight, easy-to-use devices",
                      "Cellular transmission of recorded events"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 mr-3 text-iza-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-iza-gray-light p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Common Indications for CEM</h4>
                  <ul className="space-y-2">
                    {[
                      "Infrequent symptoms suspected to be arrhythmic",
                      "Syncope or presyncope occurring weekly or monthly",
                      "Palpitations that are not daily occurrences",
                      "Monitoring after cardioversion for AF",
                      "Evaluation of chest pain with normal resting ECG",
                      "Post-cardiac surgery monitoring"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-iza-blue mr-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-iza-gray-light">
        <div className="container-custom">
          <SectionHeading 
            title="IzaHealth Cardiac Monitoring Advantages" 
            subtitle="Our cardiac monitoring platform and services go beyond just providing devices, offering a comprehensive solution for your practice."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              title="Certified Cardiac Technicians"
              description="24/7 monitoring by certified cardiac techs who can quickly identify critical arrhythmias."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Robust Devices"
              description="Our devices are designed for comfort and ease of use, ensuring patient compliance and accurate data collection."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Rapid Report Turnaround"
              description="Receive detailed reports within 24-48 hours, with urgent findings reported immediately."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Education & Support"
              description="Comprehensive educational resources and round-the-clock technical support to ensure seamless operation."
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
              title="Medicare Compliant Billing"
              description="Full support for Medicare-compliant documentation and coding for optimal reimbursement."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
              }
            />
            
            <FeatureCard 
              title="Reports"
              description="All the reports you need, including detailed analysis and summary reports, are available at your fingertips."
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

      {/* CTA Section */}
      <CTASection
        title="Start Offering Cardiac Monitoring Services"
        subtitle="Join hundreds of providers who trust IzaHealth for their cardiac monitoring needs."
        primaryButtonText="Schedule a Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="View Reimbursements"
        secondaryButtonLink="/reimbursement"
      />
    </div>
  );
};

export default CardiacPage;
