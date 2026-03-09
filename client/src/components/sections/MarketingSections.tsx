import { motion } from "framer-motion";
import { GlassCard, SectionHeading, GlowingButton } from "../ui/DesignSystem";
import { Code2, Rocket, Cpu, Layers, ShieldCheck, Zap, Server, Globe, Smartphone, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-primary/30">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary">Next-Gen Software Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white tracking-tight leading-[1.1] mb-8">
            Build The Future <br />
            <span className="text-gradient">Without Limits</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We transform visionary ideas into reality using cutting-edge AI, scalable cloud architectures, and stunning digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact">
              <GlowingButton>Start Your Project</GlowingButton>
            </a>
            <a href="#portfolio">
              <GlowingButton variant="outline">View Our Work</GlowingButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const stats = [
    { label: "Successful Projects", value: "200+" },
    { label: "Global Clients", value: "50+" },
    { label: "Expert Engineers", value: "40+" },
    { label: "Awards Won", value: "15" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Engineering <span className="text-primary">Excellence</span> at Scale
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2024, Nexus Dynamics was born from a simple idea: technology should accelerate human potential. We don't just write code; we architect systems that redefine industries.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our team consists of top-tier engineers, designers, and AI researchers who have built products used by millions. We bring Silicon Valley engineering standards to startups and enterprises worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-primary/50 pl-4">
                  <div className="text-3xl font-black text-white font-display mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* abstract tech illustration placeholder comment */}
            {/* Unsplash beautiful abstract glowing tech wires */}
            <div className="relative rounded-2xl overflow-hidden glass-panel aspect-square flex items-center justify-center bg-black/50">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop" 
                alt="Technology Abstract" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/20" />
              <div className="relative z-10 w-32 h-32 rounded-full border border-primary/50 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <div className="w-24 h-24 rounded-full border border-secondary/50 flex items-center justify-center animate-[spin_7s_linear_reverse_infinite]">
                  <Cpu size={32} className="text-white animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    { icon: <Globe size={32} />, title: "Web Platforms", desc: "High-performance React & Node.js applications built to scale to millions of users." },
    { icon: <Smartphone size={32} />, title: "Mobile Apps", desc: "Native-feeling iOS and Android applications using React Native and Flutter." },
    { icon: <Cpu size={32} />, title: "AI Integration", desc: "Custom LLM solutions, computer vision, and predictive analytics pipelines." },
    { icon: <Server size={32} />, title: "Cloud Architecture", desc: "Serverless infrastructure, Kubernetes deployments, and automated CI/CD." },
    { icon: <Layers size={32} />, title: "UI/UX Design", desc: "Award-winning interfaces that captivate users and drive conversions." },
    { icon: <ShieldCheck size={32} />, title: "Cybersecurity", desc: "Enterprise-grade security audits, penetration testing, and compliance." },
  ];

  return (
    <section id="services" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Capabilities & Expertise" 
          subtitle="Comprehensive technology solutions tailored for forward-thinking organizations."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <GlassCard key={i} delay={i * 0.1}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStackSection() {
  const techs = ["React", "TypeScript", "Node.js", "Python", "TensorFlow", "AWS", "Docker", "PostgreSQL", "GraphQL", "Next.js", "Redis", "Figma"];
  
  return (
    <section className="py-20 border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex w-max animate-[slide_30s_linear_infinite]">
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center justify-center px-8 py-4 mx-4 rounded-xl glass-panel whitespace-nowrap">
            <span className="text-xl font-display font-semibold text-white/70">{tech}</span>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    { num: "01", title: "Discovery & Strategy", desc: "We analyze your business goals, target audience, and technical requirements to formulate a comprehensive roadmap." },
    { num: "02", title: "Design & Prototyping", desc: "Our UI/UX team creates high-fidelity wireframes and interactive prototypes for early validation." },
    { num: "03", title: "Agile Development", desc: "We build your product in iterative two-week sprints, keeping you involved and in control at every stage." },
    { num: "04", title: "Deployment & Scaling", desc: "Rigorous testing precedes a smooth launch, followed by continuous monitoring and performance optimization." },
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="How We Build" subtitle="A transparent, agile, and results-driven development methodology." />
        
        <div className="relative mt-20">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-secondary/50 to-primary/20 -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl glass-panel bg-background flex items-center justify-center text-3xl font-black font-display text-gradient mb-6 border-2 border-primary/30 shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  const features = [
    "Zero technical debt guarantee",
    "Direct communication with senior engineers",
    "Silicon Valley quality without the overhead",
    "Post-launch support and SLA",
    "Security-first architecture",
    "Rapid prototyping within 14 days"
  ];

  return (
    <section className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              The <span className="text-secondary">Unfair Advantage</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We operate differently than traditional agencies. We act as your dedicated technical co-founders, taking extreme ownership of your product's success.
            </p>
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            {/* Unsplash abstract data visualization */}
            <div className="glass-panel p-2 rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" 
                alt="Data Intelligence" 
                className="rounded-2xl opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
