import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Shield, 
  Stethoscope, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Zap,
  TrendingUp,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import rpmDevicesImage from "@/assets/rpm-devices.jpg";
import rtmDevicesImage from "@/assets/rtm-devices.jpg";
import mcmDevicesImage from "@/assets/mcm-devices.jpg";
import visionPlatformImage from "@/assets/vision-platform.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero text-white overflow-hidden py-32">
  <div className="absolute inset-0 z-0">
    {/* <img 
      src={heroImage} 
      alt="Advanced medical monitoring technology" 
      className="w-full h-full object-cover opacity-50"
    /> */}
    <div className="absolute inset-0 bg-teal-600 opacity-90"></div>
  </div>
  
  <div className="container mx-auto px-4 z-10">
    <div className="max-w-4xl">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
        End-to-End RPM, RTM, and Cardiac Monitoring.
        <span className="block text-black">Elevate Patient Care.</span>
      </h1>
      <p className="text-lg md:text-xl mb-10 max-w-2xl opacity-90">
        Physicians Care Team offers a streamlined, scalable and plug-and-play virtual care platform that requires minimal staffing, includes complete 
        device logistics, provides 24/7/365 support, FDA-cleared devices, and medicare compliant solutions for Remote Patient Monitoring, Remote Therapeutic
        Monitoring, and Cardiac Monitoring.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Learn More</Link>
        </Button>
        <Button variant="outline" size="lg" className="border-white text-primary hover:bg-white hover:text-medical-navy">
          <Link to="/platform">View Platform</Link>
        </Button>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div>
          <div className="text-3xl font-bold text-grey">100%</div>
          <div className="text-sm opacity-80">End to End Plug & Play Solution</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-grey">24/7</div>
          <div className="text-sm opacity-80">Support & Monitoring</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-grey">50/50</div>
          <div className="text-sm opacity-80">Revenue Split</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What We Offer</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Everything you need for successful remote patient monitoring - all included in our comprehensive solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Platform</h3>
              <p className="text-sm text-foreground/70">Complete virtual care platform with seamless integration</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Devices</h3>
              <p className="text-sm text-foreground/70">FDA-cleared medical devices with complete logistics</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">24/7 Support</h3>
              <p className="text-sm text-foreground/70">Round-the-clock technical and clinical support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Certified Cardiac Technicians</h3>
              <p className="text-sm text-foreground/70">Expert cardiac technicians for specialized monitoring</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Care Teams & More</h3>
              <p className="text-sm text-foreground/70">Dedicated care coordinators and comprehensive support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Program Offerings</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Comprehensive remote monitoring solutions designed to improve patient outcomes 
              and maximize your practice revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={rpmDevicesImage} 
                  alt="Remote Patient Monitoring Devices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Remote Patient Monitoring</CardTitle>
                <CardDescription>
                  Continuous monitoring of vital signs and chronic conditions with real-time alerts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Blood pressure monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Weight management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Glucose tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Pulse oximetry
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <Link to="/programs#rpm">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-secondary overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={rtmDevicesImage} 
                  alt="Remote Therapeutic Monitoring Devices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Remote Therapeutic Monitoring</CardTitle>
                <CardDescription>
                  Monitor patient therapy adherence and outcomes with digital therapeutics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Medication adherence
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Physical therapy tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Respiratory therapy
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Pain management
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <Link to="/programs#rtm">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-accent overflow-hidden">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={mcmDevicesImage} 
                  alt="Mobile Cardiac Monitoring Devices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Mobile Cardiac Monitoring</CardTitle>
                <CardDescription>
                  Advanced cardiac monitoring including Holter, MCT, and event monitoring.
                </CardDescription>
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
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <Link to="/programs#mcm">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Why Choose Physicians Care Team?</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We're not just a platform provider. We're your complete RPM partner offering 
              everything you need to succeed with zero upfront investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Plug & Play Solution</CardTitle>
                <CardDescription>
                  Complete setup with platform, devices, support, and training - all included.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Zero Upfront Costs</CardTitle>
                <CardDescription>
                  No initial investment required. We provide everything and share revenue 50/50.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>24/7 Support Team</CardTitle>
                <CardDescription>
                  Dedicated care teams, certified technicians, and billing support around the clock.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>FDA Cleared Devices</CardTitle>
                <CardDescription>
                  Medical-grade equipment for RPM, RTM, and MCM programs with full compliance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Proven Revenue Growth</CardTitle>
                <CardDescription>
                  Practices see significant revenue increases with our comprehensive program management.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Full Compliance</CardTitle>
                <CardDescription>
                  HIPAA compliant platform with complete billing and documentation support.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Vision</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Our vision is to revolutionize healthcare delivery by creating a unified, comprehensive 
                remote care platform that brings all essential healthcare services under one roof.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                We're expanding beyond traditional remote monitoring to include chronic care management, 
                telemedicine consultations, and behavioral health services including psychology and therapy sessions. 
                Our goal is to provide healthcare providers with a single, powerful platform that addresses 
                the complete spectrum of patient care needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Comprehensive chronic care management programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Integrated telemedicine and virtual consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Mental health and therapy services</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Seamless integration with existing workflows</span>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-last h-full">
              <div className="rounded-2xl overflow-hidden shadow-glow h-full">
                <img 
                  src={visionPlatformImage} 
                  alt="Comprehensive healthcare platform vision showing integrated telemedicine, remote monitoring, and therapy services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading healthcare providers who are already generating significant revenue 
            with our complete RPM solutions.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;