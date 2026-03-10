import { motion } from "framer-motion";
import { GlassCard, SectionHeading, GlowingButton } from "../ui/DesignSystem";
import { Code2, Rocket, Cpu, Layers, ShieldCheck, Zap, Server, Globe, Smartphone, CheckCircle2, Award } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Stars, Float, Icosahedron, Sparkles } from "@react-three/drei";

export function HeroSection() {
  const metrics = [
    { icon: <Award className="w-5 h-5" />, label: "Client Satisfaction", value: "98%", color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/30", text: "text-blue-300" },
    { icon: <Zap className="w-5 h-5" />, label: "Faster Delivery", value: "2×", color: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/30", text: "text-amber-300" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Uptime SLA", value: "99.9%", color: "from-cyan-500/20 to-teal-500/20", border: "border-cyan-500/30", text: "text-cyan-300" },
    { icon: <Globe className="w-5 h-5" />, label: "Global Clients", value: "50+", color: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/30", text: "text-violet-300" },
  ];

  const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "50+", label: "Global Clients" },
    { value: "$2B+", label: "Revenue Generated" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-44 pb-24">
      {/* Background layers — overflow clipped separately so badges aren't cut */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 3D Animated Background */}
        <div className="absolute inset-0 opacity-60 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            
            {/* Background space / nodes */}
            <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
            
            {/* AI Data Cloud (Floating particles representing data/quantum computing) */}
            <Sparkles count={400} scale={12} size={1.5} speed={0.4} opacity={0.6} color="#00E5FF" />
            <Sparkles count={200} scale={10} size={2.5} speed={0.6} opacity={0.4} color="#8B5CF6" />

            {/* Central AI Geodesic/Neural Network Node */}
            <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
              <Icosahedron args={[1.5, 1]} position={[2, 0, -2]}>
                <meshStandardMaterial color="#8B5CF6" wireframe transparent opacity={0.5} />
              </Icosahedron>
            </Float>

            {/* Glowing inner core */}
            <Float speed={3} rotationIntensity={1} floatIntensity={1}>
              <Icosahedron args={[0.5, 0]} position={[2, 0, -2]}>
                <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={2} />
              </Icosahedron>
            </Float>

            {/* Secondary AI Node */}
            <Float speed={1.5} rotationIntensity={3} floatIntensity={2}>
              <Icosahedron args={[1, 1]} position={[-2, 1, -3]}>
                <meshStandardMaterial color="#00E5FF" wireframe transparent opacity={0.6} />
              </Icosahedron>
            </Float>
            
            <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1}>
              <Icosahedron args={[0.3, 0]} position={[-2, 1, -3]}>
                <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={2} />
              </Icosahedron>
            </Float>
          </Canvas>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-40 z-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-hero-lines z-10" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[130px] z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[120px] z-10" />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-secondary/[0.06] rounded-full blur-[100px] z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md mb-6 hover:border-white/20 transition-all duration-500"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shrink-0 shadow-[0_0_15px_rgba(245,166,35,0.8)]" />
              <span className="text-xs sm:text-sm font-bold text-white/95 tracking-widest uppercase">Premier Engineering Partner</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display text-white tracking-tight leading-[1.08] mb-6">
              Architecting <span className="text-gradient-gold">Digital</span>
              <br />
              <span className="text-gradient">Excellence</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed font-medium">
              We design, build, and scale mission-critical software, state-of-the-art web platforms, and advanced AI architectures. Empowering global leaders with resilient technology designed for exponential growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-10 w-full sm:w-auto">
              <a href="#contact" className="w-full sm:w-auto">
                <GlowingButton className="w-full sm:w-auto justify-center">Start a Project</GlowingButton>
              </a>
              <a href="#portfolio" className="w-full sm:w-auto">
                <GlowingButton variant="outline" className="w-full sm:w-auto justify-center">See Our Work</GlowingButton>
              </a>
            </div>

            {/* Micro-stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-white/[0.08] w-full">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="text-xl sm:text-2xl font-black font-display text-white">{s.value}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5 uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Dashboard card — only on lg screens */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative hidden lg:block py-12"
          >
            {/* Card glow bg */}
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl scale-95 pointer-events-none" />

            {/* Floating badge — top right (above card) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute top-0 right-4 z-20 glass-panel rounded-2xl px-4 py-3 border border-secondary/30 shadow-xl"
            >
              <p className="text-xs text-muted-foreground mb-0.5 whitespace-nowrap">Avg. Project ROI</p>
              <p className="text-xl font-black text-gradient-gold font-display">340%</p>
            </motion.div>

            {/* Main dashboard card */}
            <div className="relative glass-panel rounded-3xl p-6 border border-white/[0.12]">
              {/* Card header */}
              <div className="flex items-center justify-between mb-6 gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-semibold">Live Performance</p>
                  <h3 className="text-white font-bold text-lg font-display">Project Dashboard</h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-xs text-emerald-400 font-semibold whitespace-nowrap">All Systems Live</span>
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                    className={`relative rounded-2xl bg-gradient-to-br ${m.color} border ${m.border} p-4 overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
                  >
                    <div className="text-xl mb-1.5">{m.icon}</div>
                    <div className={`text-xl font-black font-display ${m.text} mb-0.5`}>{m.value}</div>
                    <div className="text-xs text-white/50 font-medium">{m.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Image of dashboard replacing progress bars for a premium look */}
              <div className="relative rounded-2xl overflow-hidden mt-2 border border-white/10 group shadow-2xl">
                <div className="absolute inset-0 bg-primary/20 blur-[50px] -z-10 group-hover:bg-primary/30 transition-colors duration-700" />
                <img src="/hero-dashboard.png" alt="Project Dashboard Overview" className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700 mix-blend-screen opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <div className="text-white font-bold font-display text-base mb-0.5 shadow-sm">Real-time Analytics</div>
                    <div className="text-emerald-400 text-xs font-semibold bg-black/50 px-2 py-1 rounded w-max backdrop-blur-md border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      Live Feed
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center backdrop-blur-md">
                     <Zap size={14} className="text-white animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge — bottom left (below card) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-0 left-6 z-20 glass-panel rounded-2xl px-4 py-3 border border-accent/30 shadow-xl"
            >
              <p className="text-xs text-muted-foreground mb-0.5">Support</p>
              <p className="text-sm font-bold text-accent font-display">24/7 Always Online</p>
            </motion.div>
          </motion.div>

        </div>
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
              Founded in 2024, VertexxAI was born from a simple idea: technology should accelerate human potential. We don't just write code; we architect systems that redefine industries.
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

        {/* Founders Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
              Meet the <span className="text-primary">Founders</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The visionary minds behind VertexxAI, dedicated to accelerating human potential through cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Mudra Patel", 
                role: "Founder & CEO", 
                desc: "Strategic visionary driving the direction and technological innovation at VertexxAI. Passionate about AI-driven solutions." 
              },
              { 
                name: "Rutvik Makwana", 
                role: "Founder & CEO", 
                desc: "Expert in scalable cloud architectures and engineering excellence, ensuring every product is built for massive scale." 
              },
              { 
                name: "Jay Parekh", 
                role: "Founder & CEO", 
                desc: "Product strategist and design thinker focused on delivering user-centric, high-performance web platforms." 
              }
            ].map((founder, i) => (
              <GlassCard key={i} delay={0.2 + (i * 0.1)} className="text-center p-8 flex flex-col items-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 border border-white/10 flex items-center justify-center mb-6 shadow-xl">
                  <span className="text-3xl font-black text-white font-display tracking-tight">
                    {founder.name.split(' ').map(n=>n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-bold font-display text-white mb-1.5">{founder.name}</h4>
                <p className="text-secondary font-bold text-xs mb-4 uppercase tracking-widest">{founder.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{founder.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    { icon: <Code2 size={32} />, title: "Software Development", desc: "End-to-end custom software built with clean architecture, best practices, and long-term scalability in mind." },
    { icon: <Globe size={32} />, title: "Web Platforms", desc: "High-performance React & Node.js applications built to scale to millions of users." },
    { icon: <Smartphone size={32} />, title: "Mobile Apps", desc: "Native-feeling iOS and Android applications using React Native and Flutter." },
    { icon: <Cpu size={32} />, title: "AI Integration", desc: "Custom LLM solutions, computer vision, and predictive analytics pipelines." },
    { icon: <Server size={32} />, title: "Cloud Architecture", desc: "Serverless infrastructure, Kubernetes deployments, and automated CI/CD." },
    { icon: <Layers size={32} />, title: "UI/UX Design", desc: "Award-winning interfaces that captivate users and drive conversions." },
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
