
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTASection from "@/components/sections/CTASection";

const OnboardingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white via-iza-blue-light to-iza-purple-light">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-4">Simple Onboarding Process</h1>
          <p className="text-iza-gray-dark max-w-3xl mx-auto text-lg mb-8">
            Our white-glove onboarding ensures a smooth implementation process, with expert support at every step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="btn-primary">Start Onboarding</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="btn-outline">View Our Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Our 4-Step Onboarding Process" 
            subtitle="From initial agreement to full program launch, we provide hands-on support every step of the way."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-iza-blue-light transform -translate-x-1/2 z-0"></div>
              
              {/* Onboarding steps */}
              {[
                {
                  step: 1,
                  title: "Agreement & Program Selection",
                  description: "We start with understanding your specific needs, selecting appropriate monitoring programs, and finalizing the service agreement.",
                  details: [
                    "Initial consultation to understand your goals",
                    "Selection of appropriate monitoring programs (RPM, RTM, cardiac)",
                    "Review of Medicare requirements and reimbursement opportunities",
                    "Finalization of service agreement and implementation timeline"
                  ]
                },
                {
                  step: 2,
                  title: "Platform Setup & Device Provisioning",
                  description: "Our technical team configures the platform to your specifications, integrates with your systems, and prepares your device inventory.",
                  details: [
                    "Platform configuration and customization",
                    "Deploy dedicated instance for your practice (if applicable)",
                    "User account creation for all staff members",
                    "Initial device inventory setup and provisioning"
                  ]
                },
                {
                  step: 3,
                  title: "Staff Training & Test Run",
                  description: "We provide comprehensive training for your staff, followed by a test run to ensure everyone is comfortable with the system.",
                  details: [
                    "Live training sessions for all staff members",
                    "Detailed documentation and procedure guides",
                    "Supervised test runs with sample patients",
                    "Workflow optimization and adjustments"
                  ]
                },
                {
                  step: 4,
                  title: "Go-Live & Patient Onboarding",
                  description: "We assist with the initial patient onboarding process, providing hands-on support during the crucial early phase of your program.",
                  details: [
                    "Patient identification and eligibility verification",
                    "Creation of patient education materials",
                    "Support for initial device distribution",
                    "Ongoing monitoring of program performance",
                    "Providing ongoing support and optimization",
                    "End to end biling and collection of revenue for your practice"
                  ]
                }
              ].map((item, index) => (
                <div key={index} className={`relative md:flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-20 last:mb-0`}>
                  {/* Step number for mobile */}
                  <div className="md:hidden absolute left-0 top-0 w-10 h-10 rounded-full bg-iza-blue text-white flex items-center justify-center z-10">
                    {item.step}
                  </div>
                  
                  {/* Left side content */}
                  <div className="md:w-5/12 ml-14 md:ml-0">
                    <div className={`bg-white p-6 rounded-lg shadow-md animate-fade-in ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                      <h3 className="heading-md mb-4">{item.title}</h3>
                      <p className="text-iza-gray-dark mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 mr-2 text-iza-blue mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Middle circle for desktop */}
                  <div className="hidden md:flex w-2/12 items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-iza-blue text-white flex items-center justify-center text-2xl font-bold z-10">
                      {item.step}
                    </div>
                  </div>
                  
                  {/* Right side (empty for layout) */}
                  <div className="md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-iza-gray-light">
        <div className="container-custom">
          <SectionHeading 
            title="Typical Implementation Timeline" 
            subtitle="Most practices can be fully operational within 2-4 weeks, depending on the complexity of their implementation."
          />
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-iza-blue"></div>
                  <div className="ml-3 text-lg font-semibold">Week 1</div>
                </div>
                <div className="ml-6 pl-4 border-l border-iza-blue-light">
                  <ul className="space-y-2">
                    <li>Initial consultation and program selection</li>
                    <li>Agreement finalization</li>
                    <li>Platform setup initiated</li>
                    <li>Initial user account creation</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-iza-blue"></div>
                  <div className="ml-3 text-lg font-semibold">Week 2</div>
                </div>
                <div className="ml-6 pl-4 border-l border-iza-blue-light">
                  <ul className="space-y-2">
                    <li>Platform configuration completion</li>
                    <li>Dedicated Instance (if applicable)</li>
                    <li>Staff training sessions</li>
                    <li>Initial device inventory setup</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-iza-blue"></div>
                  <div className="ml-3 text-lg font-semibold">Week 3</div>
                </div>
                <div className="ml-6 pl-4 border-l border-iza-blue-light">
                  <ul className="space-y-2">
                    <li>Test runs with sample patients</li>
                    <li>Workflow optimization</li>
                    <li>Patient education materials preparation</li>
                    <li>Patient eligibility assessment</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-iza-blue"></div>
                  <div className="ml-3 text-lg font-semibold">Week 4</div>
                </div>
                <div className="ml-6 pl-4 border-l border-iza-blue-light">
                  <ul className="space-y-2">
                    <li>Initial patient enrollment</li>
                    <li>First device shipments</li>
                    <li>Program go-live</li>
                    <li>Ongoing support and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Hear from healthcare providers about their onboarding experience with IzaHealth."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="The onboarding process with IzaHealth was incredibly smooth. Their team handled everything from setup to training, and we were up and running in just three weeks. The ongoing support has been exceptional."
              author="Dr. James Wilson"
              role="Medical Director"
              company="Lakeside Medical Group"
            />
            
            <TestimonialCard
              quote="I was concerned about the complexity of implementing a remote monitoring program, but IzaHealth's white-glove onboarding made it painless. My staff was comfortable with the system after just one training session."
              author="Lisa Martinez"
              role="Practice Manager"
              company="Valley Health Partners"
            />
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="section-padding bg-iza-gray-light">
        <div className="container-custom">
          <SectionHeading 
            title="Onboarding FAQs" 
            subtitle="Common questions about implementing IzaHealth's monitoring solutions."
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does the typical onboarding process take?",
                answer: "Most practices can be fully operational within 2-4 weeks, depending on the complexity of the implementation and dedicated instance requirements."
              },
              {
                question: "Do we need to purchase devices upfront?",
                answer: "Yes, devices can be purchased upfront in bulk or individually as patients are enrolled in the program. Our devices are highly affordable, and we take care of inventory management, shipping, and replacements to ensure a hassle-free experience."
              },
              {
                question: "How much staff time is required for implementation?",
                answer: "We minimize the burden on your staff through our white-glove approach. Typically, we require just 2-4 hours of key staff members' time for training and workflow discussions."
              },
              
              {
                question: "What support is provided after go-live?",
                answer: "We provide ongoing support through a dedicated account manager, 24/7 technical support, and regular check-ins to optimize your program's performance."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-iza-gray-dark mb-2">{item.question}</h3>
                <p className="text-iza-gray">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Onboarding Journey?"
        subtitle="Our team is ready to guide you through a smooth implementation process."
        primaryButtonText="Contact Us Today"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Reimbursements"
        secondaryButtonLink="/reimbursement"
      />
    </div>
  );
};

export default OnboardingPage;
