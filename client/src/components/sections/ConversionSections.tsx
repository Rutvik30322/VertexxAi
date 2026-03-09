import { motion } from "framer-motion";
import { GlassCard, SectionHeading, GlowingButton } from "../ui/DesignSystem";
import { Star, ArrowRight } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    { 
      title: "Aura FinTech", 
      cat: "Web Application", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      desc: "Enterprise dashboard for real-time cryptocurrency trading." 
    },
    { 
      title: "MedSync", 
      cat: "Mobile App & AI", 
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      desc: "AI-powered patient management system for hospitals." 
    },
    { 
      title: "Nova Commerce", 
      cat: "E-Commerce", 
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      desc: "High-conversion headless Shopify architecture." 
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Work" subtitle="A glimpse into the digital experiences we've crafted for industry leaders." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-2xl overflow-hidden glass-panel border-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 relative z-20 bg-background/80 backdrop-blur-md">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">{project.cat}</span>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors text-sm font-semibold">
                  View Case Study <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const reviews = [
    { name: "Sarah Jenkins", role: "CTO, FinFlow", text: "Nexus Dynamics completely transformed our architecture. Our platform is now 5x faster and can handle massive scale. Worth every penny." },
    { name: "Marcus Chen", role: "Founder, HealthAI", text: "Their deep understanding of both AI and frontend development is rare. They built a beautiful product that functions flawlessly." },
    { name: "Elena Rodriguez", role: "VP Product, Stellar", text: "Working with them feels like having an elite in-house team. The code quality is pristine, and communication is top-notch." },
  ];

  return (
    <section className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Client Success" subtitle="Don't just take our word for it. Hear from the leaders we partner with." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <GlassCard key={i} delay={i * 0.1}>
              <div className="flex gap-1 text-secondary mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p className="text-muted-foreground italic mb-8">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 flex items-center justify-center font-bold text-white border border-white/20">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{review.name}</h4>
                  <p className="text-muted-foreground text-xs">{review.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  const plans = [
    { name: "Startup", price: "Custom", desc: "Perfect for seed-stage startups needing a robust MVP.", features: ["Full-stack MVP Development", "UI/UX Design", "Basic Cloud Setup", "2 Weeks Post-launch Support"] },
    { name: "Growth", price: "$10k+", desc: "For scaling businesses requiring advanced features.", popular: true, features: ["Complex Web/Mobile Apps", "Custom AI Integrations", "Scalable Architecture", "Priority SLA Support"] },
    { name: "Enterprise", price: "Contact Us", desc: "Dedicated teams for large-scale digital transformation.", features: ["Dedicated Engineering Team", "Legacy System Migration", "Enterprise Security Audits", "24/7/365 Monitoring"] },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Transparent Investments" subtitle="Predictable pricing for world-class engineering." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {plans.map((plan, i) => (
            <GlassCard key={i} className={`relative ${plan.popular ? 'border-primary shadow-[0_0_30px_rgba(124,58,237,0.2)] scale-105 z-10' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2 font-display">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6 h-10">{plan.desc}</p>
              <div className="text-4xl font-black text-white font-display mb-8">{plan.price}</div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="block w-full">
                <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                  Get Started
                </button>
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
