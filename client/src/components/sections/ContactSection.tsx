import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { SectionHeading, GlassCard, GlowingButton } from "../ui/DesignSystem";
import { MapPin, Mail, Phone } from "lucide-react";

export function ContactSection() {
  const [success, setSuccess] = useState(false);
  const contactMutation = useSubmitContact();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data, {
      onSuccess: () => {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 5000);
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-black/60 border-t border-white/10">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Let's Build Together" subtitle="Ready to transform your vision into reality? Drop us a line." />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-16">
          <div className="lg:col-span-2 space-y-8">
            <GlassCard className="h-full">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our technical strategy team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Office</h4>
                    <p className="text-muted-foreground text-sm">100 Innovation Drive<br/>San Francisco, CA 94105</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Email</h4>
                    <p className="text-muted-foreground text-sm">hello@nexusdynamics.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Phone</h4>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="lg:col-span-3">
            <GlassCard>
              {success ? (
                <div className="py-16 text-center">
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">Message Received!</h3>
                  <p className="text-muted-foreground">We'll be in touch shortly to discuss your project.</p>
                  <button onClick={() => setSuccess(false)} className="mt-8 text-primary hover:underline font-medium">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                      <input 
                        {...register("name")}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                      <input 
                        {...register("email")}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Phone (Optional)</label>
                      <input 
                        {...register("phone")}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">Company (Optional)</label>
                      <input 
                        {...register("company")}
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                    <textarea 
                      {...register("message")}
                      rows={4}
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us about your project goals..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  
                  {contactMutation.isError && (
                    <p className="text-red-400 text-sm">{contactMutation.error?.message}</p>
                  )}

                  <GlowingButton type="submit" className="w-full">
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </GlowingButton>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
