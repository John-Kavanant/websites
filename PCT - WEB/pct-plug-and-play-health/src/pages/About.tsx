import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Award, 
  Target,
  CheckCircle,
  Stethoscope,
  Shield,
  TrendingUp,
  Clock,
  Lightbulb
} from "lucide-react";
import medicalOffice from "@/assets/medical-office.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src={medicalOffice} 
      alt="Modern medical office" 
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>
  <div className="container mx-auto px-4 text-center relative z-10">
    <Badge className="mb-6 bg-white/20 text-white border-white/30">
      Healthcare Innovation
    </Badge>
    <h1 className="text-5xl font-bold mb-6">
      About Physicians Care Team
      <span className="block text-medical-light-blue">Transforming Healthcare Together</span>
    </h1>
    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
      We're more than a technology provider. We're your complete partner in remote patient monitoring, 
      dedicated to improving patient outcomes while maximizing your practice revenue.
    </p>
    <Button variant="hero" size="lg" className="bg-white text-medical-navy hover:bg-white/90">
      <Link to="/contact">Partner with Us</Link>
    </Button>
  </div>
</section>

      {/* Our Mission */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-foreground/70 mb-8">
                To revolutionize healthcare delivery by providing comprehensive remote patient monitoring 
                solutions that improve patient outcomes while creating sustainable revenue streams for 
                healthcare providers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Patient-Centered Care</h3>
                    <p className="text-foreground/70">
                      Every solution we develop puts patient health and comfort at the center.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Provider Success</h3>
                    <p className="text-foreground/70">
                      We ensure our healthcare partners achieve both clinical and financial success.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Innovation</h3>
                    <p className="text-foreground/70">
                      Continuous advancement in technology and care delivery methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-lg p-8 shadow-medical">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Impact</h3>
                <p className="text-foreground/70">
                  Real results from our partnerships with healthcare providers across the nation.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-foreground/70">Healthcare Partners</div>
                </div> */}
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">54K+</div>
                  <div className="text-sm text-foreground/70">Patients Monitored</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-foreground/70">Patient Satisfaction</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-foreground/70">Support Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Makes Us Different</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Unlike other RPM providers, we offer a complete, plug-and-play solution that eliminates 
              the complexity and overhead typically associated with remote monitoring programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Complete Solution</CardTitle>
                <CardDescription>
                  We provide everything: platform, devices, support, monitoring, and billing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    FDA-cleared devices
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Advanced platform
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    24/7 support teams
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Complete billing services
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Zero Upfront Investment</CardTitle>
                <CardDescription>
                  No initial costs, setup fees, or equipment purchases required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    No startup costs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Free device provision
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    No monthly fees
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Revenue sharing model
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-medical transition-shadow duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Proven Results</CardTitle>
                <CardDescription>
                  Track record of successful implementations and significant revenue generation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Rapid ROI achievement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Improved patient outcomes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    High satisfaction rates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Sustained growth
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide everything we do and shape our relationships with partners and patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">Patient First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every decision we make is evaluated through the lens of patient benefit and improved outcomes. 
                  We believe that when patients thrive, healthcare providers succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">Integrity & Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transparency in our partnerships, honest communication about outcomes, and unwavering 
                  commitment to data security and privacy protection.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous improvement and advancement in technology, processes, and care delivery 
                  to stay ahead of healthcare evolution.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-xl">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We see our clients as true partners, working together towards shared goals of 
                  improved patient care and practice success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand that successful RPM programs require more than just technology. 
              Our comprehensive approach addresses every aspect of remote monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategic Planning</h3>
              <p className="text-muted-foreground">
                We work with you to identify the best program mix for your patient population 
                and practice goals, ensuring maximum revenue potential.
              </p>
            </div>

            <div className="text-center">
              <div className="h-20 w-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Clinical Excellence</h3>
              <p className="text-muted-foreground">
                Our certified clinical teams provide the highest quality monitoring and 
                care coordination, ensuring optimal patient outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Continuous Support</h3>
              <p className="text-muted-foreground">
                24/7 support for both providers and patients, with ongoing optimization 
                to ensure sustained success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Healthcare Providers Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading healthcare organizations trust us to deliver results that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-medical p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Complete Peace of Mind</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>No upfront investment or financial risk</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>Complete operational support included</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>FDA-cleared, medical-grade devices</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>Full HIPAA compliance and security</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>Proven track record of success</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medical p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Immediate Revenue Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>Start generating revenue within 30 days</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>50/50 revenue split after costs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>Complete billing and claims management</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>Transparent reporting and analytics</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span>Scalable growth opportunities</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of healthcare providers who are already improving patient outcomes 
            and generating significant revenue with our comprehensive RPM solutions.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/contact">Become a Partner</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;