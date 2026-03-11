
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/ui/SectionHeading";
import ReimbursementTable from "@/components/ui/ReimbursementTable";
import CTASection from "@/components/sections/CTASection";

const ReimbursementPage = () => {
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

  // Cardiac monitoring reimbursement data
  const mctReimbursementData = [
    {
      code: "93228",
      description: "MCT technical component (global)",
      amount: "$26.61",
      frequency: "Per day"
    },
    {
      code: "93229",
      description: "MCT technical component (global)",
      amount: "$847.16",
      frequency: "Per monitoring period"
    }
  ];

  const holterReimbursementData = [
    {
      code: "93225",
      description: "Holter monitor hookup",
      amount: "$26.61",
      frequency: "Per service"
    },
    {
      code: "93226",
      description: "Holter scanning & analysis",
      amount: "$37.79",
      frequency: "Per service"
    },
    {
      code: "93227",
      description: "Holter physician review & interpretation",
      amount: "$25.58",
      frequency: "Per service"
    }
  ];

  const eventReimbursementData = [
    {
      code: "93268",
      description: "Event monitor service (global)",
      amount: "$206.35",
      frequency: "Per monitoring period"
    },
    {
      code: "93270",
      description: "Event monitor recording",
      amount: "$9.46",
      frequency: "Per monitoring period"
    },
    {
      code: "93271",
      description: "Event monitor scanning & analysis",
      amount: "$166.14",
      frequency: "Per monitoring period"
    },
    {
      code: "93272",
      description: "Event monitor physician review",
      amount: "$25.58",
      frequency: "Per monitoring period"
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
                Medicare Reimbursement Guide
              </h1>
              <p className="text-iza-gray-dark text-lg mb-8">
                Turn patient monitoring into a revenue-generating service with Medicare-reimbursable RPM, 
                RTM, and cardiac monitoring programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto btn-primary text-base">Get Started Today</Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <h3 className="heading-md mb-6 text-iza-blue">Revenue Potential</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="font-medium">Monthly Revenue per 100 Patients:</span>
                    <span className="text-xl font-bold text-iza-blue">$12,590</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="font-medium">Annual Revenue per 100 Patients:</span>
                    <span className="text-2xl font-bold text-iza-blue">$151,080</span>
                  </div>
                  <p className="text-sm text-iza-gray">
                    *Based on RPM Medicare reimbursement rates for 100 patients. 
                    Actual results may vary based on patient compliance and specific Medicare Administrative Contractor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reimbursement Tables Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Medicare Reimbursement Tables" 
            subtitle="National average rates for various monitoring programs. Actual reimbursement may vary based on geography and specific Medicare Administrative Contractor."
          />
          
          <Tabs defaultValue="rpm" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-3">
              <TabsTrigger value="rpm">RPM</TabsTrigger>
              <TabsTrigger value="rtm">RTM</TabsTrigger>
              <TabsTrigger value="cardiac">Cardiac</TabsTrigger>
            </TabsList>
            
            <TabsContent value="rpm">
              <div className="max-w-4xl mx-auto">
                <ReimbursementTable 
                  title="Remote Patient Monitoring (RPM)" 
                  items={rpmReimbursementData}
                />
                
                <div className="mt-12 p-8 bg-iza-blue-light rounded-lg">
                  <h3 className="heading-sm mb-4">Example: RPM Revenue for 100 Patients</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Initial setup (99453)</td>
                          <td className="py-2 text-right">100 patients × $19.90 = <span className="font-semibold">$1,990</span> (one-time)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Monthly device supply (99454)</td>
                          <td className="py-2 text-right">100 patients × $55.72 = <span className="font-semibold">$5,572</span>/month</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Monthly monitoring service (99457)</td>
                          <td className="py-2 text-right">100 patients × $50.18 = <span className="font-semibold">$5,018</span>/month</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Additional monitoring time (99458 × 1)</td>
                          <td className="py-2 text-right">100 patients × $40.84 = <span className="font-semibold">$4,084</span>/month</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 font-medium">Total potential monthly revenue</td>
                          <td className="py-2 text-right text-iza-blue font-bold">$14,674/month</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 font-medium">Total potential annual revenue</td>
                          <td className="py-2 text-right text-iza-blue font-bold">$176,088/year + $1,990 initial setup</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="rtm">
              <div className="max-w-4xl mx-auto">
                <ReimbursementTable 
                  title="Remote Therapeutic Monitoring (RTM)" 
                  items={rtmReimbursementData}
                />
                
                <div className="mt-12 p-8 bg-iza-purple-light rounded-lg">
                  <h3 className="heading-sm mb-4">Example: RTM Revenue for 100 Patients</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Initial setup (98975)</td>
                          <td className="py-2 text-right">100 patients × $19.38 = <span className="font-semibold">$1,938</span> (one-time)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Monthly device supply (98976/98977)</td>
                          <td className="py-2 text-right">100 patients × $55.72 = <span className="font-semibold">$5,572</span>/month</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Monthly monitoring service (98980)</td>
                          <td className="py-2 text-right">100 patients × $50.18 = <span className="font-semibold">$5,018</span>/month</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 pr-4 font-medium">Additional monitoring time (98981 × 1)</td>
                          <td className="py-2 text-right">100 patients × $40.84 = <span className="font-semibold">$4,084</span>/month</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 font-medium">Total potential monthly revenue</td>
                          <td className="py-2 text-right text-iza-purple font-bold">$14,674/month</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 font-medium">Total potential annual revenue</td>
                          <td className="py-2 text-right text-iza-purple font-bold">$176,088/year + $1,938 initial setup</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cardiac">
              <div className="max-w-4xl mx-auto space-y-12">
                <ReimbursementTable 
                  title="Mobile Cardiac Telemetry (MCT)" 
                  items={mctReimbursementData}
                />
                
                <ReimbursementTable 
                  title="Holter Monitoring" 
                  items={holterReimbursementData}
                />
                
                <ReimbursementTable 
                  title="Event Monitoring" 
                  items={eventReimbursementData}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Billing Requirements */}
      <section className="section-padding bg-iza-gray-light">
        <div className="container-custom">
          <SectionHeading 
            title="Medicare Billing Requirements" 
            subtitle="Understanding Medicare's requirements is essential for compliant billing and optimal reimbursement."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="heading-sm mb-4">RPM Requirements</h3>
              <ul className="space-y-3">
                {[
                  "Patient must have at least one chronic condition",
                  "Requires signed consent from the patient",
                  "Device must digitally (automatically) transmit data",
                  "Minimum of 16 days of readings required per month for device billing",
                  "Minimum of 20 minutes of clinical staff time required for monitoring service billing",
                  "Interactive communication with patient required",
                  "Can be provided under general supervision of physician"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 mr-3 text-iza-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="heading-sm mb-4">RTM Requirements</h3>
              <ul className="space-y-3">
                {[
                  "Can be used for any condition (not limited to chronic conditions)",
                  "Requires signed consent from the patient",
                  "Device must digitally (automatically) transmit non-physiologic data",
                  "Minimum of 16 days of readings required per month for device billing",
                  "Minimum of 20 minutes of clinical staff time required for monitoring service billing",
                  "Interactive communication with patient required",
                  "Can be provided by qualified healthcare professionals (including PTs, OTs)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 mr-3 text-iza-purple mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="heading-sm mb-4">Cardiac Monitoring Requirements</h3>
              <ul className="space-y-3">
                {[
                  "Requires order from physician or qualified healthcare provider",
                  "Must be medically necessary for diagnosis or management of cardiac condition",
                  "Type of monitoring must be appropriate for patient's symptoms and condition",
                  "Appropriate documentation of medical necessity in patient's chart",
                  "Proper interpretation of results with documentation",
                  "MCT requires physician review of reports",
                  "Duration of monitoring must be appropriate for patient's condition"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 mr-3 text-iza-blue mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="heading-sm mb-4">How IzaHealth Ensures Compliance</h3>
              <ul className="space-y-3">
                {[
                  "Built-in time tracking to ensure minimum thresholds are met",
                  "Automated documentation of patient interactions",
                  "Pre-built templates for consent forms and orders",
                  "Monitoring of data transmission frequency",
                  "Alert system for patients at risk of not meeting minimum days",
                  "Regular compliance reports for your practice",
                  "Ongoing education on Medicare requirement updates"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 mr-3 text-iza-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Reimbursement FAQs" 
            subtitle="Common questions about Medicare reimbursement for monitoring programs."
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can patients be enrolled in both RPM and RTM programs simultaneously?",
                answer: "Yes, patients can be enrolled in both programs simultaneously as they track different types of data. RPM tracks physiologic data like blood pressure, while RTM tracks non-physiologic data like medication adherence or therapy response."
              },
              {
                question: "How often can we bill for device supply codes (99454 for RPM, 98976/98977 for RTM)?",
                answer: "These codes can be billed once per 30-day period (typically monthly) as long as the patient has at least 16 days of readings during that period."
              },
              {
                question: "Is RPM or RTM covered by commercial insurance?",
                answer: "Many commercial payers now cover RPM and RTM services, though coverage policies vary. IzaHealth can help you navigate these variations for optimal reimbursement."
              },
              {
                question: "Can we bill for RPM/RTM if the patient is seen in-office during the same month?",
                answer: "Yes, RPM and RTM services can be billed in addition to in-office visits, as they represent different services."
              },
              {
                question: "How do we document the time spent on RPM/RTM services?",
                answer: "IzaHealth's platform has built-in time tracking that automatically logs and documents the time spent on monitoring activities to support compliant billing."
              }
            ].map((item, index) => (
              <div key={index} className="bg-iza-gray-light rounded-lg p-6">
                <h3 className="font-semibold text-iza-gray-dark mb-2">{item.question}</h3>
                <p className="text-iza-gray">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Generating New Revenue?"
        subtitle="Let IzaHealth help you implement a compliant, revenue-generating monitoring program today."
        primaryButtonText="Schedule a Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="See Our Solutions"
        secondaryButtonLink="/"
      />
    </div>
  );
};

export default ReimbursementPage;
