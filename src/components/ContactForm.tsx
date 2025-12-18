import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    issue: "",
    message: "",
  });

  const issues = [
    "Facing Foreclosure",
    "Auction Scheduled",
    "Wrongful Foreclosure",
    "Loan Modification Denied",
    "Need TRO Filing",
    "Other Legal Issue",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      if (!data.success) {
        throw new Error(data.error || 'Failed to send email');
      }
      
      setIsSubmitted(true);
      toast({
        title: "Consultation Request Received!",
        description: "Our team will contact you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        issue: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Get Help Now</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Free Consultation
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Don't wait until it's too late. Contact us today for a free, no-obligation consultation 
              with one of our foreclosure defense attorneys.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Call us 24/7</p>
                  <a href="tel:855-964-2555" className="text-foreground font-semibold text-xl hover:text-gold transition-colors">
                    855-964-2555
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email us</p>
                  <a href="mailto:info@smarterrealestates.com" className="text-foreground font-semibold text-lg hover:text-gold transition-colors">
                    info@smarterrealestates.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-hero-gradient">
              <h4 className="font-display text-xl text-cream mb-3">What happens next?</h4>
              <ol className="space-y-3 text-cream/80">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold text-navy-dark flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>We review your case within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold text-navy-dark flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>Free consultation with an attorney</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold text-navy-dark flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>We create a custom strategy for your case</span>
                </li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <div className="bg-card rounded-2xl p-8 border border-border shadow-medium text-center">
                <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">Thank You!</h3>
                <p className="text-muted-foreground mb-6">
                  Your consultation request has been received. Our team will contact you within 24 hours.
                </p>
                <Button variant="gold" onClick={() => setIsSubmitted(false)}>
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-medium">
                <h3 className="font-display text-2xl text-foreground mb-6">Request Free Consultation</h3>
                
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                      Property Address
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main St, City, State, ZIP"
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-foreground mb-2">
                      What issue are you facing? *
                    </label>
                    <select
                      id="issue"
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select an issue...</option>
                      {issues.map((issue) => (
                        <option key={issue} value={issue}>
                          {issue}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tell us more about your situation
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please provide any additional details about your case..."
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get Free Consultation
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-muted-foreground text-sm text-center">
                    By submitting, you agree to be contacted by our legal team.
                    <br />
                    Your information is secure and confidential.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
