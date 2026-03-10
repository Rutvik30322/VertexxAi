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
      <h2 className="text-3xl md:text-5xl font-bold mb-5 font-display text-white">
        {title.split(' ').map((word, i, arr) =>
          i >= Math.floor(arr.length / 2) ? (
            <span key={i} className="text-gradient"> {word} </span>
          ) : (
            <span key={i}> {word} </span>
          )
        )}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}

export function GlowingButton({ children, onClick, type = "button", className = "", variant = "primary" }: any) {
  const baseClasses = "px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group text-base";

  if (variant === "outline") {
    return (
      <button type={type} onClick={onClick} className={`${baseClasses} bg-transparent border border-white/25 hover:border-primary/60 text-white/80 hover:text-white ${className}`}>
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
      </button>
    );
  }

  // Gold / primary CTA
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} bg-gradient-to-r from-secondary to-amber-500 text-white font-bold glow-gold hover:glow-gold ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </button>
  );
}
