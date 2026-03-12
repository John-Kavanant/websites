import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart, 
  CheckCircle,
  MessageSquare,
  Calendar,
  Users,
  DollarSign
} from "lucide-react";
import contactOffice from "@/assets/contact-office.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [practiceSize, setPracticeSize] = useState("");
  const [timeline, setTimeline] = useState("");
  const [interestRpm, setInterestRpm] = useState(false);
  const [interestRtm, setInterestRtm] = useState(false);
  const [interestMcm, setInterestMcm] = useState(false);
  const FORM_ENDPOINT =
    import.meta.env.VITE_FORM_ENDPOINT?.trim() || "/api/form";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const name = `${firstName} ${lastName}`.trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const organization = String(data.get("organization") || "").trim();
    const title = String(data.get("title") || "").trim();
    const selectedPracticeSize = practiceSize.trim();
    const selectedTimeline = timeline.trim();
    const consent = data.get("consent") ? "Yes" : "No";
    const message = String(data.get("message") || "").trim();
    const selectedInterestRpm = interestRpm ? "Yes" : "No";
    const selectedInterestRtm = interestRtm ? "Yes" : "No";
    const selectedInterestMcm = interestMcm ? "Yes" : "No";
    const honeypot = String(data.get("website") || "").trim();

    const formattedMessage = [
      message || "No additional information provided.",
      "",
      `Organization: ${organization || "-"}`,
      `Title/Position: ${title || "-"}`,
      `Practice Size: ${selectedPracticeSize || "-"}`,
      `Timeline: ${selectedTimeline || "-"}`,
      `Programs of Interest: RPM=${selectedInterestRpm}, RTM=${selectedInterestRtm}, MCM=${selectedInterestMcm}`,
      `Consent: ${consent}`,
    ].join("\n");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          site: "pct",
          name,
          email,
          phone,
          message: formattedMessage,
          honeypot,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast({
        title: "Thank you for your interest!",
        description: "We'll contact you within 24 hours to discuss your RPM program.",
      });
      form.reset();
      setPracticeSize("");
      setTimeline("");
      setInterestRpm(false);
      setInterestRtm(false);
      setInterestMcm(false);
    } catch (_error) {
      toast({
        title: "Submission failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src={contactOffice} 
      alt="Contact office" 
      className="w-full h-full object-cover opacity-50"
    />
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>
  <div className="container mx-auto px-4 text-center relative z-10">
    <Badge className="mb-6 bg-white/20 text-white border-white/30">
      Get Started Today
    </Badge>
    <h1 className="text-5xl font-bold mb-6">
      Start Your RPM Program
      <span className="block text-medical-light-blue">No Upfront Investment</span>
    </h1>
    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
      Ready to transform your practice with remote patient monitoring? 
      Contact us today to learn how you can start generating revenue in 30 days.
    </p>
  </div>
</section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Get Started Today</h2>
              <p className="text-foreground/70 mb-8">
                Fill out the form below and our team will contact you within 24 hours to discuss 
                your specific needs and how we can help you implement a successful RPM program.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" placeholder="john.doe@healthcare.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Healthcare Organization *</Label>
                  <Input id="organization" name="organization" placeholder="Your Clinic/Hospital Name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Title/Position</Label>
                  <Input id="title" name="title" placeholder="Practice Manager, Physician, etc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="practiceSize">Practice Size</Label>
                  <Select value={practiceSize} onValueChange={setPracticeSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select practice size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solo">Solo Practice (1 provider)</SelectItem>
                      <SelectItem value="small">Small Practice (2-5 providers)</SelectItem>
                      <SelectItem value="medium">Medium Practice (6-15 providers)</SelectItem>
                      <SelectItem value="large">Large Practice (16+ providers)</SelectItem>
                      <SelectItem value="hospital">Hospital/Health System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Programs of Interest (select all that apply)</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rpm" checked={interestRpm} onCheckedChange={(checked) => setInterestRpm(checked === true)} />
                      <Label htmlFor="rpm">Remote Patient Monitoring (RPM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rtm" checked={interestRtm} onCheckedChange={(checked) => setInterestRtm(checked === true)} />
                      <Label htmlFor="rtm">Remote Therapeutic Monitoring (RTM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mcm" checked={interestMcm} onCheckedChange={(checked) => setInterestMcm(checked === true)} />
                      <Label htmlFor="mcm">Mobile Cardiac Monitoring (MCM)</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Preferred Implementation Timeline</Label>
                  <Select value={timeline} onValueChange={setTimeline}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="1month">Within 1 month</SelectItem>
                      <SelectItem value="3months">Within 3 months</SelectItem>
                      <SelectItem value="6months">Within 6 months</SelectItem>
                      <SelectItem value="planning">Just planning/researching</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your current patient population, specific needs, or any questions you have..."
                    rows={4}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="consent" name="consent" required />
                  <Label htmlFor="consent" className="text-sm">
                    I consent to be contacted by Physicians Care Team regarding remote patient monitoring solutions. 
                    I understand this is not a commitment to purchase.
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Started - Contact Me"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-medical">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our team for immediate assistance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-foreground/70">+1 352 406 8925</p>
                      <p className="text-sm text-primary">Available during work hours</p>
                    </div>
                  </div> */}

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-foreground/70">info@physicianscareteam.com</p>
                      <p className="text-sm text-primary">Response within 4 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Service Area</h3>
                      <p className="text-foreground/70">Nationwide Coverage</p>
                      <p className="text-sm text-primary">All 50 States</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                      <p className="text-foreground/70">Monday - Friday: 8 AM - 8 PM EST</p>
                      <p className="text-sm text-primary">Operational support 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Initial Consultation</h4>
                      <p className="text-sm text-foreground/70">We'll call within 24 hours to discuss your needs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Custom Proposal</h4>
                      <p className="text-sm text-foreground/70">Tailored program design with revenue projections</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Implementation</h4>
                      <p className="text-sm text-foreground/70">Quick setup and start generating revenue in 30 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Why Healthcare Providers Choose Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">No upfront investment required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Complete support included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">50/50 revenue sharing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">FDA-cleared devices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Proven track record</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Join Successful Healthcare Providers</h2>
            <p className="text-xl text-foreground/70">
              See why leading practices choose our RPM solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70">Healthcare Partners</div>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
              <div className="text-foreground/70">Patients Monitored</div>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-foreground/70">Revenue Generated</div>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-2">30</div>
              <div className="text-foreground/70">Days to Revenue</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-foreground/70">
              Common questions about our RPM programs and partnership model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">What are the upfront costs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  There are zero upfront costs. We provide everything including devices, platform, 
                  support, and billing services with no initial investment required.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">How quickly can we start?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most practices can begin enrolling patients within 4-6 weeks of signing up, 
                  and start generating revenue within 30 days.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">How does revenue sharing work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  After deducting operational and device costs, revenue is split 50/50 between 
                  your practice and Physicians Care Team.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">What support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete support including 24/7 patient support, care coordination, 
                  certified technician monitoring, training, and billing services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;