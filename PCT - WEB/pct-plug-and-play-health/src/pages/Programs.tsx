import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Stethoscope, 
  Clock, 
  DollarSign,
  TrendingUp,
  CheckCircle,
  Monitor,
  Activity,
  Zap
} from "lucide-react";
import medicalDevices from "@/assets/medical-devices.jpg";

const Programs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={medicalDevices} 
            alt="FDA approved medical devices" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Revenue-Generating Programs
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Comprehensive RPM Programs
            <span className="block text-medical-light-blue">Maximum Revenue Potential</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Learn about our Remote Patient Monitoring, Remote Therapeutic Monitoring, 
            and Mobile Cardiac Monitoring programs with detailed reimbursement information.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-medical-navy hover:bg-white/90">
            <Link to="/contact">Start a Program</Link>
          </Button>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="rpm" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="rpm" className="text-lg py-3">
                <Heart className="h-5 w-5 mr-2" />
                RPM
              </TabsTrigger>
              <TabsTrigger value="rtm" className="text-lg py-3">
                <Stethoscope className="h-5 w-5 mr-2" />
                RTM
              </TabsTrigger>
              <TabsTrigger value="mcm" className="text-lg py-3">
                <Clock className="h-5 w-5 mr-2" />
                MCM
              </TabsTrigger>
            </TabsList>

            {/* RPM Tab */}
            <TabsContent value="rpm" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-foreground" id="rpm">Remote Patient Monitoring (RPM)</h2>
                  <p className="text-lg text-foreground/70 mb-8">
                    Continuous monitoring of patients with chronic conditions using FDA-cleared devices. 
                    Our RPM program provides real-time data collection and clinical oversight to improve 
                    patient outcomes while generating significant revenue.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Monitor className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Continuous Monitoring</h3>
                        <p className="text-foreground/70">
                          24/7 data collection from blood pressure monitors, weight scales, pulse oximeters, and glucometers.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Activity className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Real-time Alerts</h3>
                        <p className="text-foreground/70">
                          Immediate notifications for out-of-range values with care team escalation protocols.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <TrendingUp className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Improved Outcomes</h3>
                        <p className="text-foreground/70">
                          Early intervention capabilities leading to reduced hospitalizations and better patient health.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">RPM Revenue Potential</CardTitle>
                    <CardDescription className="text-center">
                      Monthly revenue per patient enrolled in RPM program
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-primary mb-2">$2,500</div>
                      <div className="text-foreground/70">Average monthly revenue per patient</div>
                    </div>
                    
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>CPT Code</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="text-right">Reimbursement</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>99453</TableCell>
                          <TableCell>Patient setup</TableCell>
                          <TableCell className="text-right">$19.30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>99454</TableCell>
                          <TableCell>Device supply</TableCell>
                          <TableCell className="text-right">$50.54</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>99457</TableCell>
                          <TableCell>First 20 min</TableCell>
                          <TableCell className="text-right">$50.60</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>99458</TableCell>
                          <TableCell>Second (and third) 20 min</TableCell>
                          <TableCell className="text-right">$42.63</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Eligible Conditions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Hypertension
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Diabetes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Heart failure
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        COPD
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Chronic kidney disease
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Devices Provided</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Bluetooth BP monitors
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Digital weight scales
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Pulse oximeters
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Glucometers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Cellular hubs
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Program Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Reduced readmissions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Improved patient satisfaction
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Enhanced care coordination
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Better outcomes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Significant revenue stream
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* RTM Tab */}
            <TabsContent value="rtm" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6" id="rtm">Remote Therapeutic Monitoring (RTM)</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Monitor patient therapy adherence and treatment outcomes using digital health tools. 
                    RTM focuses on tracking therapeutic interventions and patient engagement with treatment plans.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Stethoscope className="h-6 w-6 text-secondary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Therapy Tracking</h3>
                        <p className="text-muted-foreground">
                          Monitor medication adherence, physical therapy progress, and treatment compliance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Zap className="h-6 w-6 text-secondary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Digital Therapeutics</h3>
                        <p className="text-muted-foreground">
                          Evidence-based digital interventions for various therapeutic areas.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <TrendingUp className="h-6 w-6 text-secondary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Outcome Measurement</h3>
                        <p className="text-muted-foreground">
                          Track patient-reported outcomes and therapy effectiveness metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">RTM Revenue Potential</CardTitle>
                    <CardDescription className="text-center">
                      Monthly revenue per patient enrolled in RTM program
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-secondary mb-2">$1,800</div>
                      <div className="text-muted-foreground">Average monthly revenue per patient</div>
                    </div>
                    
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>CPT Code</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="text-right">Reimbursement</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>98975</TableCell>
                          <TableCell>RTM setup</TableCell>
                          <TableCell className="text-right">$19.30</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>98976</TableCell>
                          <TableCell>Device supply</TableCell>
                          <TableCell className="text-right">$54.14</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>98977</TableCell>
                          <TableCell>Initial education</TableCell>
                          <TableCell className="text-right">$62.33</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>98980</TableCell>
                          <TableCell>Monthly monitoring</TableCell>
                          <TableCell className="text-right">$78.94</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Therapeutic Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Physical therapy
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Respiratory therapy
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Cognitive therapy
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Pain management
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Medication adherence
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Digital Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Mobile applications
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Wearable devices
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Smart inhalers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Exercise sensors
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Digital pillboxes
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Program Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Better adherence rates
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Improved therapy outcomes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Reduced therapy costs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Enhanced patient engagement
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Data-driven insights
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* MCM Tab */}
            <TabsContent value="mcm" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6" id="mcm">Mobile Cardiac Monitoring (MCM)</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Comprehensive cardiac monitoring solutions including Holter monitoring, extended Holter, 
                    mobile cardiac telemetry, event monitoring, and cardiac rehabilitation programs.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Heart className="h-6 w-6 text-trust-blue mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Continuous ECG Monitoring</h3>
                        <p className="text-muted-foreground">
                          24/7 cardiac rhythm monitoring with certified technician oversight.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-trust-blue mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Real-time Analysis</h3>
                        <p className="text-muted-foreground">
                          Immediate arrhythmia detection with instant physician notification.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Activity className="h-6 w-6 text-trust-blue mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Comprehensive Reporting</h3>
                        <p className="text-muted-foreground">
                          Detailed cardiac reports with clinical interpretation and recommendations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card className="shadow-medical">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">MCM Revenue Potential</CardTitle>
                    <CardDescription className="text-center">
                      Revenue per patient for various MCM services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-trust-blue mb-2">$3,200</div>
                      <div className="text-muted-foreground">Average revenue per MCM patient</div>
                    </div>
                    
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Service Type</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead className="text-right">Reimbursement</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Holter Monitor</TableCell>
                          <TableCell>24-48 hours</TableCell>
                          <TableCell className="text-right">$285.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Extended Holter</TableCell>
                          <TableCell>48 hours - 7 days</TableCell>
                          <TableCell className="text-right">$485.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>MCT</TableCell>
                          <TableCell>Up to 30 days</TableCell>
                          <TableCell className="text-right">$892.00</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Event Monitor</TableCell>
                          <TableCell>30 days</TableCell>
                          <TableCell className="text-right">$385.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Monitoring Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Holter monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Extended Holter
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Mobile cardiac telemetry
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Event monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Cardiac rehabilitation
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Clinical Indications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Arrhythmia detection
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Syncope evaluation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Palpitation assessment
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        AFib monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Post-procedure monitoring
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Service Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        24/7 technician monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Real-time alerts
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Detailed reports
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Patient education
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-trust-blue" />
                        Complete billing support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Revenue Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Total Revenue Potential</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Combine multiple programs to maximize your practice revenue and improve patient outcomes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl text-primary">$7,500+</CardTitle>
                <CardDescription>Monthly revenue per patient across all programs</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-3xl text-secondary">50/50</CardTitle>
                <CardDescription>Revenue split after operational costs</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="shadow-card text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl text-primary">$0</CardTitle>
                <CardDescription>Upfront investment required</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Launch Your Programs?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start generating revenue immediately with our comprehensive RPM, RTM, and MCM programs. 
            No upfront costs, complete support included.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/contact">Start Your Program</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Programs;