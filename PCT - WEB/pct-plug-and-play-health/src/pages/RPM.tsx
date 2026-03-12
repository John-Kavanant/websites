import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { 
  Heart, 
  TrendingUp,
  CheckCircle,
  Monitor,
  Activity
} from "lucide-react";
import rpmDevices from "@/assets/rpm-devices.jpg";
import elderlyPatientHome from "@/assets/elderly-patient-home.jpg";

const RPM = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src={rpmDevices} 
      alt="Remote Patient Monitoring devices" 
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>
  <div className="container mx-auto px-4 text-center relative z-10">
    <Badge className="mb-6 bg-white/20 text-white border-white/30">
      Remote Patient Monitoring
    </Badge>
    <h1 className="text-5xl font-bold mb-6">
      RPM Program
      <span className="block text-medical-light-blue">Continuous Health Monitoring</span>
    </h1>
    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
      Continuous monitoring of patients with chronic conditions using FDA-cleared devices. 
      Our RPM program provides real-time data collection and clinical oversight to improve 
      patient outcomes while generating significant revenue.
    </p>
    <Button variant="hero" size="lg" className="bg-white text-medical-navy hover:bg-white/90">
      <Link to="/contact">Start RPM Program</Link>
    </Button>
  </div>
</section>

      {/* Main Content */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Remote Patient Monitoring (RPM)</h2>
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
                  <div className="text-4xl font-bold text-primary mb-2">$134</div>
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
                      <TableCell className="text-right">$51.60</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>99458</TableCell>
                      <TableCell>Second (and third) 20 min</TableCell>
                      <TableCell className="text-right">$42.63</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-4 text-xs text-foreground/60 italic">
                  *Reimbursement rates may vary by geographic location and payer. Actual rates subject to local Medicare Administrative Contractor (MAC) determinations.
                </div>
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
        </div>
      </section>

      {/* Simplicity & Ease of Use Section */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Simple. Independent. 
                <span className="block text-primary">No Phone Required.</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Unlike complex RPM solutions that require Bluetooth pairing, mobile apps, and 
                complicated setup processes, our devices work independently right out of the box.
              </p>
              
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 shadow-card">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Traditional RPM Challenges</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-center gap-2">
                      <span className="text-destructive">×</span>
                      Complex Bluetooth pairing process
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-destructive">×</span>
                      Requires smartphone and mobile apps
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-destructive">×</span>
                      Complicated registration procedures
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-destructive">×</span>
                      Technical support nightmares
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Our Simple Solution</h3>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Direct cellular connectivity - no phone needed
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Automatic data transmission to our platform
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Ready to use out of the box
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Perfect for elderly and non-tech-savvy patients
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative h-full">
              <img 
                src={elderlyPatientHome} 
                alt="Happy elderly patient using simple RPM devices at home" 
                className="rounded-lg shadow-medical w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-semibold text-sm">No Setup Required!</p>
                <p className="text-xs opacity-90">Just take your reading</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RPM;