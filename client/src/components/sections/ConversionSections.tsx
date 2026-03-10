import { motion } from "framer-motion";
import { GlassCard, SectionHeading, GlowingButton } from "../ui/DesignSystem";
import { Star, ArrowRight, CheckCircle2 } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    { 
      title: "Nova Commerce", 
      cat: "E-Commerce Mobile App & Website", 
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      desc: "High-conversion headless e-commerce architecture with a seamless mobile shopping experience." 
    },
    { 
      title: "Motilal Oswal Trading Suite", 
      cat: "Trading Mobile App & Software", 
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
      desc: "Enterprise-grade real-time trading dashboard and robust mobile application for top-tier investors." 
    },
    { 
      title: "Hisab Manager", 
      cat: "Finance & Accounting App", 
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
      desc: "Comprehensive accounting and book-keeping software tailored for businesses." 
    },
    { 
      title: "Commercial Site Manager", 
      cat: "Site & Builds Management", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
      desc: "End-to-end management platform for organizing commercial sites and managing builds." 
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Work & Projects" subtitle="A glimpse into the digital experiences and software we've crafted." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    { name: "Sarah Jenkins", role: "CTO, FinFlow", text: "VertexxAI completely transformed our architecture. Our platform is now 5x faster and can handle massive scale. Worth every penny." },
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

export function ClientsSection() {
  const clients = [
    {
      name: "Asnani HR Solutions",
      industry: "Consultancy",
      logo: "https://res.cloudinary.com/shivshaktisite/image/upload/v1755450397/logoasnani_uethq2.png",
      fallbackInitial: "AH",
      color: "from-blue-500/30 to-cyan-500/30",
      accent: "#38bdf8",
      quote: "Transformed our Gulf recruitment pipelines with a sophisticated tailored platform.",
    },
    {
      name: "Vardik Industries",
      industry: "Life-Support",
      logo: "https://www.vardik.com/favicon.png",
      fallbackInitial: "VI",
      color: "from-emerald-500/30 to-teal-500/30",
      accent: "#34d399",
      quote: "Built an exceptional digital presence for our decentralized infrastructure systems.",
    },
    {
      name: "Motilal Oswal",
      industry: "FinTech & Trading",
      logo: "https://img.logo.dev/motilaloswal.com?token=pk_X3Wpqjf3QHKkMsbEmfHlnQ&retina=true",
      fallbackInitial: "MO",
      color: "from-orange-500/30 to-amber-500/30",
      accent: "#fb923c",
      quote: "Our new high-frequency trading software handles peak load without breaking a sweat.",
    },
    {
      name: "Hisab Manager",
      industry: "FinTech Software",
      logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop",
      fallbackInitial: "HM",
      color: "from-purple-500/30 to-violet-500/30",
      accent: "#a78bfa",
      quote: "A flawless management experience for our commercial operations and daily accounts.",
    },
    {
      name: "E-Commerce Max",
      industry: "Retail SaaS",
      logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=100&h=100&fit=crop",
      fallbackInitial: "EC",
      color: "from-rose-500/30 to-pink-500/30",
      accent: "#fb7185",
      quote: "Our omnichannel mobile conversion rates skyrocketed since implementing their app solution.",
    },
    {
      name: "CityBuild Manage",
      industry: "Commercial Software",
      logo: "https://images.unsplash.com/photo-1504307651254-35680f356f27?w=100&h=100&fit=crop",
      fallbackInitial: "CB",
      color: "from-indigo-500/30 to-sky-500/30",
      accent: "#818cf8",
      quote: "Seamlessly managing our commercial sites, ongoing construction builds, and team tasks.",
    },
  ];

  const stats = [
    { value: "50+", label: "Global Clients" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "$2B+", label: "Client Revenue Generated" },
    { value: "15+", label: "Industries Served" },
  ];

  return (
    <section id="clients" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted By Industry Leaders"
          subtitle="From seed-stage startups to Fortune 500 enterprises — our clients define the future of their industries."
        />

        {/* Animated logo marquee */}
        <div className="relative overflow-hidden py-8 mb-16 border-y border-white/5">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/40 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/40 to-transparent z-10" />
          <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-12 items-center">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-xl glass-panel whitespace-nowrap border border-white/10"
              >
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${client.color} flex items-center justify-center text-xs font-black text-white border border-white/20 overflow-hidden`}
                >
                  {client.logo ? <img src={client.logo} alt={client.name} className="w-full h-full object-cover bg-white/10" /> : client.fallbackInitial}
                </div>
                <span className="text-white/70 font-semibold font-display text-sm">{client.name}</span>
              </div>
            ))}
          </div>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
          ` }} />
        </div>

        {/* Client cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl glass-panel border border-white/10 p-6 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* glow bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Header: avatar + name */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center text-lg font-black text-white border border-white/20 shadow-lg shrink-0 overflow-hidden`}
                    style={{ boxShadow: `0 0 20px ${client.accent}40` }}
                  >
                    {client.logo ? <img src={client.logo} alt={client.name} className="w-full h-full object-contain bg-white/5 p-1" /> : client.fallbackInitial}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg font-display leading-tight">{client.name}</h3>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                      style={{ color: client.accent, borderColor: `${client.accent}40`, background: `${client.accent}15` }}
                    >
                      {client.industry}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/60 text-sm leading-relaxed italic group-hover:text-white/80 transition-colors">
                  "{client.quote}"
                </p>

                {/* Divider */}
                <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="currentColor" className="text-secondary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl glass-panel border border-white/10 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black font-display text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

