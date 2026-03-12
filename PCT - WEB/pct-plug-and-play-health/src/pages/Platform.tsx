import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Monitor, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Bell, 
  Shield, 
  Users, 
  FileText,
  CheckCircle,
  Zap,
  Globe,
  Lock
} from "lucide-react";
import heroImage from "@/assets/platform-dashboard.jpg";

const Platform = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={heroImage} 
        alt="Advanced RPM platform dashboard" 
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <Badge className="mb-6 bg-white/20 text-white border-white/30">
        Enterprise Platform
      </Badge>
      <h1 className="text-5xl font-bold mb-6">
        Advanced Remote Care Platform
        <span className="block text-medical-light-blue">Built for Healthcare</span>
      </h1>
      <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
        Our comprehensive platform integrates seamlessly with your workflow, 
        providing real-time monitoring, automated alerts, and complete patient management.
      </p>
      <Button variant="hero" size="lg" className="bg-white text-medical-navy hover:bg-white/90">
        <Link to="/contact">Request Demo</Link>
      </Button>
    </div>
  </section>

      {/* Platform Overview */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">All-in-One Healthcare Platform</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Our platform is designed specifically for healthcare providers who want to implement 
                remote monitoring programs without the complexity and overhead of traditional solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Integrated Dashboard</h3>
                    <p className="text-foreground/70">
                      Single view of all patient data, alerts, and program performance metrics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Real-time Monitoring</h3>
                    <p className="text-foreground/70">
                      Continuous data streaming with instant alerts for critical values.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Automated Workflows</h3>
                    <p className="text-foreground/70">
                      Streamlined processes that reduce administrative burden on your staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-lg p-8 shadow-medical h-full flex items-center">
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-primary" />
                  </div>
                   <h3 className="font-semibold mb-2 text-foreground">Dashboard</h3>
                   <p className="text-sm text-foreground/70">Comprehensive patient overview</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell className="h-8 w-8 text-primary" />
                  </div>
                   <h3 className="font-semibold mb-2 text-foreground">Alerts</h3>
                   <p className="text-sm text-foreground/70">Smart notification system</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                   <h3 className="font-semibold mb-2 text-foreground">Analytics</h3>
                   <p className="text-sm text-foreground/70">Advanced reporting tools</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                   <h3 className="font-semibold mb-2 text-foreground">Documentation</h3>
                   <p className="text-sm text-foreground/70">Automated record keeping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Platform Features</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Every feature is designed to enhance patient care while maximizing your operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Ease of use</CardTitle>
                <CardDescription>
                  Responsive platform accessible on any device, anywhere, anytime.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Simple and easy to use</li>
                  <li>• Web-based dashboard</li>
                  <li>• Minimal training required</li>
                  <li>• Real-time notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Cloud className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Cloud Infrastructure</CardTitle>
                <CardDescription>
                  Secure, scalable cloud platform with 99.9% uptime guarantee.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• HIPAA compliant hosting</li>
                  <li>• Automatic backups</li>
                  <li>• Global CDN</li>
                  <li>• 24/7 monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Comprehensive reporting and analytics for better decision making.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Real-time dashboards</li>
                  <li>• Custom reports</li>
                  <li>• Interactions tracking</li>
                  <li>• Performance metrics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Bell className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Smart Alerts</CardTitle>
                <CardDescription>
                  Intelligent notification system that prioritizes critical events.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Customizable thresholds</li>
                  <li>• Priority-based routing</li>
                  <li>• Multiple channels</li>
                  <li>• Escalation protocols</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>
                  Enterprise-grade security with full healthcare compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• HIPAA compliance</li>
                  <li>• End-to-end encryption</li>
                  <li>• Regular maintainence</li>
                  <li>• Regular audits</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Built-in tools for care team coordination and communication.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Role-based access</li>
                  <li>• Team messaging</li>
                  <li>• Task management</li>
                  <li>• Shared workflows</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Security & Compliance</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Built with healthcare-grade security and compliance at its core, 
              ensuring your patient data is always protected and regulations are met.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">HIPAA Compliance</h3>
              <p className="text-foreground/70">
                Full HIPAA compliance with comprehensive audit trails, access controls, and data protection measures.
              </p>
            </div>

            <div className="text-center">
              <div className="h-20 w-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Advanced Encryption</h3>
              <p className="text-foreground/70">
                End-to-end encryption for all data transmission and storage with enterprise-grade security protocols.
              </p>
            </div>

            <div className="text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Secure Data Exchange</h3>
              <p className="text-foreground/70">
                Encrypted data transmission with full audit trails and compliance monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Satisfaction Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Loved by Healthcare Teams</h2>
              <p className="text-lg text-foreground/70 mb-8">
                Our clients consistently tell us how much they appreciate the intuitive design 
                and user-friendly interface of our platform. Healthcare teams can get up and 
                running quickly with minimal training time.
              </p>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <p className="text-foreground/80 mb-4 italic">
                    "The platform is so intuitive that our staff was comfortable using it 
                    within the first day. We've never experienced such a smooth transition 
                    to a new system."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Dr. Sarah Chen</p>
                      <p className="text-sm text-foreground/60">Chief Medical Officer</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-foreground/70">User Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">2hrs</div>
                    <p className="text-sm text-foreground/70">Average Training Time</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center h-full">
              <img 
                src="/src/assets/happy-clinic-staff.jpg" 
                alt="Happy healthcare clinic staff using digital platform" 
                className="w-full h-full object-cover rounded-lg shadow-medical"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience the Platform</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            See how our platform can transform your remote monitoring programs. 
            Schedule a personalized demo today.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/contact">Schedule Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Platform;