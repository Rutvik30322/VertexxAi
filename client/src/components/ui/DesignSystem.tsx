import { ReactNode } from "react";
import { motion } from "framer-motion";

export function GlassCard({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ title, subtitle, className = "" }: { title: string, subtitle: string, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
        {title.split(' ').map((word, i) => (
          i % 2 !== 0 ? <span key={i} className="text-gradient"> {word} </span> : <span key={i}> {word} </span>
        ))}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}

export function GlowingButton({ children, onClick, type = "button", className = "", variant = "primary" }: any) {
  const baseClasses = "px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden group";
  
  if (variant === "outline") {
    return (
      <button type={type} onClick={onClick} className={`${baseClasses} bg-transparent border border-white/20 hover:border-white/50 text-white ${className}`}>
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] ${className}`}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </button>
  );
}
