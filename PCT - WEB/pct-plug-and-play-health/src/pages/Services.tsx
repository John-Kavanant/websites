import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { 
  Clock, 
  GraduationCap, 
  Heart, 
  DollarSign, 
  Users, 
  Phone,
  CheckCircle,
  Shield,
  FileText,
  Headphones,
  TrendingUp,
  Award,
  X
} from "lucide-react";
import healthcareTeam from "@/assets/healthcare-team.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src={healthcareTeam} 
      alt="Healthcare team collaboration" 
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>
  <div className="container mx-auto px-4 text-center relative z-10">
    <Badge className="mb-6 bg-white/20 text-white border-white/30">
      Complete Service Suite
    </Badge>
    <h1 className="text-5xl font-bold mb-6">
      Full-Service RPM Support
      <span className="block text-medical-light-blue">Beyond Technology</span>
    </h1>
    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
      We don't just provide the platform and devices. Our comprehensive service offering 
      includes everything you need for successful remote monitoring programs.
    </p>
    <Button variant="hero" size="lg" className="bg-white text-medical-navy hover:bg-white/90">
      <Link to="/contact">Explore Services</Link>
    </Button>
  </div>
</section>

      {/* Services Overview */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Complete Support Ecosystem</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Our team becomes your team. We handle the complexity so you can focus on patient care 
              while maximizing your revenue potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">24/7 Patient Support</CardTitle>
                <CardDescription>
                  Round-the-clock support for your patients with dedicated care teams.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">24/7 patient helpline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Device setup assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Technical troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Patient education</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Certified Cardiac Technicians</CardTitle>
                <CardDescription>
                  Expert cardiac monitoring by certified technicians around the clock.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">ASET certified technicians</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Real-time rhythm analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Immediate alert notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Detailed reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <Users className="h-12 w-12 text-trust-blue mb-4" />
                <CardTitle className="text-xl">Care Coordination Teams</CardTitle>
                <CardDescription>
                  Dedicated care coordinators for RPM and RTM program management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-trust-blue mt-1" />
                    <span className="text-sm">Patient enrollment support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-trust-blue mt-1" />
                    <span className="text-sm">Data monitoring & alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-trust-blue mt-1" />
                    <span className="text-sm">Clinical escalations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-trust-blue mt-1" />
                    <span className="text-sm">Patient engagement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Training & Education</CardTitle>
                <CardDescription>
                  Comprehensive training programs for your staff and patients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Staff onboarding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Platform training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Best practices guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Ongoing education</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Revenue Cycle Management</CardTitle>
                <CardDescription>
                  Complete billing and revenue optimization services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Claims submission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Reimbursement optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Appeals management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span className="text-sm">Revenue reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <Award className="h-12 w-12 text-trust-blue mb-4" />
                <CardTitle className="text-xl">Device & Equipment</CardTitle>
                <CardDescription>
                  FDA-cleared medical devices with full support and replacement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-trust-blue mt-1" />
                    <span className="text-sm">FDA cleared devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-trust-blue mt-1" />
                    <span className="text-sm">Device shipping & setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-trust-blue mt-1" />
                    <span className="text-sm">Maintenance & replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-trust-blue mt-1" />
                    <span className="text-sm">Return processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Service Excellence Standards</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Our commitment to excellence is measured by clear standards and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Quick Response</h3>
              <p className="text-foreground/70">Quick call response time</p>
            </div>

            <div className="text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">98.5%</h3>
              <p className="text-foreground/70">Patient satisfaction rate</p>
            </div>

            <div className="text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">99.9%</h3>
              <p className="text-foreground/70">Platform uptime guarantee</p>
            </div>

            <div className="text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-foreground/70">Support availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How We Support You</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              From initial setup to ongoing optimization, our support process ensures your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Onboarding & Setup</CardTitle>
                <CardDescription>
                  Complete program setup with training and initial patient enrollment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm">
                  <li>• Staff training sessions</li>
                  <li>• Platform configuration</li>
                  <li>• Device provisioning</li>
                  <li>• Initial patient setup</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Ongoing Management</CardTitle>
                <CardDescription>
                  Continuous monitoring, care coordination, and program optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm">
                  <li>• Patient monitoring</li>
                  <li>• Care team coordination</li>
                  <li>• Clinical escalations</li>
                  <li>• Performance tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Growth & Optimization</CardTitle>
                <CardDescription>
                  Revenue optimization and program expansion for maximum success.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm">
                  <li>• Revenue analysis</li>
                  <li>• Program expansion</li>
                  <li>• Best practice sharing</li>
                  <li>• Continuous improvement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Typical Offering vs PCT Offering</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              See how we stack up against traditional RPM providers. The best part? 
              <span className="font-semibold text-primary"> No upfront costs when you partner with us.</span>
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medical border-0">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-primary">
                      <TableHead className="text-white font-bold text-lg py-6">Feature</TableHead>
                      <TableHead className="text-white font-bold text-lg text-center py-6">Typical Providers</TableHead>
                      <TableHead className="text-white font-bold text-lg text-center py-6">PCT Offering</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b hover:bg-muted/50">
                      <TableCell className="font-semibold py-4 text-lg bg-primary/5">Upfront Cost</TableCell>
                      <TableCell className="text-center py-4">
                        <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-300">
                          Yes
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <Badge className="bg-green-100 text-green-700 border-green-300">
                          None
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b hover:bg-muted/50">
                      <TableCell className="font-semibold py-4">Monitoring Platform</TableCell>
                      <TableCell className="text-center py-4">
                        <CheckCircle className="h-6 w-6 text-green-600 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b hover:bg-muted/50">
                      <TableCell className="font-semibold py-4">Device Logistics Management</TableCell>
                      <TableCell className="text-center py-4">
                        <Badge variant="outline" className="text-yellow-700 border-yellow-300 bg-yellow-50">
                          Partial
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b hover:bg-muted/50">
                      <TableCell className="font-semibold py-4">Patient Onboarding Support</TableCell>
                      <TableCell className="text-center py-4">
                        <Badge variant="outline" className="text-yellow-700 border-yellow-300 bg-yellow-50">
                          Limited
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b hover:bg-muted/50">
                      <TableCell className="font-semibold py-4">24/7 Patient Technical Support</TableCell>
                      <TableCell className="text-center py-4">
                        <Badge variant="outline" className="text-yellow-700 border-yellow-300 bg-yellow-50">
                          Limited
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b hover:bg-muted/50">
                      <TableCell className="font-semibold py-4">Certified Cardiac Technicians</TableCell>
                      <TableCell className="text-center py-4">
                        <X className="h-6 w-6 text-red-600 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b hover:bg-muted/50">
                      <TableCell className="font-semibold py-4">Medicare Compliance Support</TableCell>
                      <TableCell className="text-center py-4">
                        <Badge variant="outline" className="text-yellow-700 border-yellow-300 bg-yellow-50">
                          Limited
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b hover:bg-muted/50">
                      <TableCell className="font-semibold py-4">Dedicated Account Manager</TableCell>
                      <TableCell className="text-center py-4">
                        <X className="h-6 w-6 text-red-600 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b hover:bg-muted/50">
                      <TableCell className="font-semibold py-4">Staff Training & Education</TableCell>
                      <TableCell className="text-center py-4">
                        <Badge variant="outline" className="text-yellow-700 border-yellow-300 bg-yellow-50">
                          Basic
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-muted/50">
                      <TableCell className="font-semibold py-4">End to End Billing</TableCell>
                      <TableCell className="text-center py-4">
                        <X className="h-6 w-6 text-red-600 mx-auto" />
                      </TableCell>
                      <TableCell className="text-center py-4">
                        <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-semibold text-primary">Zero upfront investment required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience Our Service Excellence</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our team handle the complexity while you focus on what matters most - patient care.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;