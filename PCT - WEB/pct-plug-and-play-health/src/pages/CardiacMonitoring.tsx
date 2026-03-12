import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Clock, 
  TrendingUp,
  CheckCircle,
  Activity,
  AlertTriangle
} from "lucide-react";
import mcmDevices from "@/assets/mcm-devices.jpg";

const CardiacMonitoring = () => {
  const [selectedStudy, setSelectedStudy] = useState("holter");

  const studyData = {
    holter: {
      title: "Holter Monitoring",
      description: "24-48 hour continuous ECG monitoring",
      data: [
        { code: "93224", description: "Holter Global", reimbursement: "$65.42-$130.78" },
        { code: "93225", description: "Hook-up", reimbursement: "$16.59 - $32.45" },
        { code: "93226", description: "Technical", reimbursement: "$31.49 - $62.43" },
        { code: "93227", description: "Professional", reimbursement: "$17.35 - $35.10" },
      ]
    },
    extendedHolter: {
      title: "Extended Holter",
      description: "7-14 day extended ECG monitoring",
      data: [
        { code: "93245", description: "Global", reimbursement: "$255 - $420" },
        { code: "93246", description: "Hook-up", reimbursement: "$10.56 - $58.60" },
        { code: "93247", description: "Technical", reimbursement: "$220.92" },
        { code: "93248", description: "Professional", reimbursement: "$24.21 - $95.40" },
      ]
    },
    mobileCardiacTelemetry: {
      title: "Mobile Cardiac Telemetry",
      description: "Real-time cardiac monitoring with immediate alerts",
      data: [
        { code: "93228 + 93229", description: "Global", reimbursement: "$725.55 - $1350" },
        { code: "93229", description: "Technical", reimbursement: "$701.30 - $1320" },
        { code: "93228", description: "Professional", reimbursement: "$24.25 - $30" },
      ]
    },
    eventMonitoring: {
      title: "Event Monitoring",
      description: "Patient-activated and auto-triggered event recording",
      data: [
        { code: "93268", description: "Global", reimbursement: "$155.24 - $180" },
        { code: "93270", description: "Hook-up", reimbursement: "$7.47 - $9" },
        { code: "93271", description: "Technical", reimbursement: "$124.83 - $1440" },
        { code: "93272", description: "Professional", reimbursement: "$22.94 - $27" },
      ]
    }
  };

  const currentStudy = studyData[selectedStudy];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src={mcmDevices} 
      alt="Mobile Cardiac Monitoring devices" 
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>
  <div className="container mx-auto px-4 text-center relative z-10">
    <Badge className="mb-6 bg-white/20 text-white border-white/30">
      Mobile Cardiac Monitoring
    </Badge>
    <h1 className="text-5xl font-bold mb-6">
      MCM Program
      <span className="block text-medical-light-blue">Advanced Cardiac Care</span>
    </h1>
    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
      Comprehensive cardiac monitoring using advanced wearable devices for real-time 
      arrhythmia detection and cardiovascular event prevention with expert analysis.
    </p>
    <Button variant="hero" size="lg" className="bg-white text-medical-navy hover:bg-white/90">
      <Link to="/contact">Start MCM Program</Link>
    </Button>
  </div>
</section>

      {/* Main Content */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Mobile Cardiac Monitoring (MCM)</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Comprehensive cardiac monitoring using advanced wearable devices for real-time 
                arrhythmia detection and cardiovascular event prevention with expert analysis.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Continuous ECG Monitoring</h3>
                    <p className="text-foreground/70">
                      24/7 cardiac rhythm monitoring with advanced arrhythmia detection algorithms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Activity className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Expert Analysis</h3>
                    <p className="text-foreground/70">
                      Board-certified cardiologists review and analyze all cardiac events and data.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Immediate Alerts</h3>
                    <p className="text-foreground/70">
                      Real-time notifications for critical cardiac events requiring immediate attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Cardiac Study Revenue Potential</CardTitle>
                <CardDescription className="text-center">
                  Select a study type to view reimbursement rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <ToggleGroup 
                    type="single" 
                    value={selectedStudy} 
                    onValueChange={(value) => value && setSelectedStudy(value)}
                    className="grid grid-cols-2 gap-2"
                  >
                    <ToggleGroupItem value="holter" className="text-sm">
                      Holter
                    </ToggleGroupItem>
                    <ToggleGroupItem value="extendedHolter" className="text-sm">
                      Extended Holter
                    </ToggleGroupItem>
                    <ToggleGroupItem value="mobileCardiacTelemetry" className="text-sm">
                      Mobile Cardiac Telemetry
                    </ToggleGroupItem>
                    <ToggleGroupItem value="eventMonitoring" className="text-sm">
                      Event Monitoring
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">{currentStudy.title}</div>
                  <div className="text-foreground/70">{currentStudy.description}</div>
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
                    {currentStudy.data.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.code}</TableCell>
                        <TableCell>{row.description}</TableCell>
                        <TableCell className="text-right">{row.reimbursement}</TableCell>
                      </TableRow>
                    ))}
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
                <CardTitle>Cardiac Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Atrial fibrillation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Bradycardia
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Tachycardia
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Syncope episodes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Heart block
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Study Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Holter
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Extended Holter
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Mobile cardiac telemetry
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Event Monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Cardiac Rehab
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Clinical Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Early arrhythmia detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Stroke prevention
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Medication optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Risk stratification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Improved patient outcomes
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

export default CardiacMonitoring;