import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  TrendingUp,
  CheckCircle,
  Zap
} from "lucide-react";
import rtmDevices from "@/assets/rtm-devices.jpg";

const RTM = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src={rtmDevices} 
      alt="Remote Therapeutic Monitoring devices" 
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>
  <div className="container mx-auto px-4 text-center relative z-10">
    <Badge className="mb-6 bg-white/20 text-white border-white/30">
      Remote Therapeutic Monitoring
    </Badge>
    <h1 className="text-5xl font-bold mb-6">
      RTM Program
      <span className="block text-medical-light-blue">Therapy Adherence Monitoring</span>
    </h1>
    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
      Monitor patient therapy adherence and treatment outcomes using digital health tools. 
      RTM focuses on tracking therapeutic interventions and patient engagement with treatment plans.
    </p>
    <Button variant="hero" size="lg" className="bg-white text-medical-navy hover:bg-white/90">
      <Link to="/contact">Start RTM Program</Link>
    </Button>
  </div>
</section>

      {/* Main Content */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Remote Therapeutic Monitoring (RTM)</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Monitor patient therapy adherence and treatment outcomes using digital health tools. 
                RTM focuses on tracking therapeutic interventions and patient engagement with treatment plans.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Stethoscope className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Therapy Tracking</h3>
                    <p className="text-foreground/70">
                      Monitor medication adherence, physical therapy progress, and treatment compliance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Digital Therapeutics</h3>
                    <p className="text-foreground/70">
                      Evidence-based digital interventions for various therapeutic areas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Outcome Measurement</h3>
                    <p className="text-foreground/70">
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
                  <div className="text-4xl font-bold text-primary mb-2">$132</div>
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
                      <TableCell>98975</TableCell>
                      <TableCell>RTM setup</TableCell>
                      <TableCell className="text-right">$19.30</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>98976</TableCell>
                      <TableCell>Device supply (respiratory)</TableCell>
                      <TableCell className="text-right">$50.14</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>98977</TableCell>
                      <TableCell>Device supply (musculoskeletal)</TableCell>
                      <TableCell className="text-right">$50.13</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>98980</TableCell>
                      <TableCell>First 20 min</TableCell>
                      <TableCell className="text-right">$49.94</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>98981</TableCell>
                      <TableCell>Additional 20 min</TableCell>
                      <TableCell className="text-right">$42.94</TableCell>
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
                <CardTitle>Therapeutic Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Physical therapy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Respiratory therapy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Cognitive therapy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Pain management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
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
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Mobile health apps
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Digital therapy platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Exercise tracking devices
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Medication adherence apps
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Patient education tools
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
                    Enhanced therapy adherence
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Improved treatment outcomes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Patient empowerment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Reduced healthcare costs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Significant revenue potential
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RTM;