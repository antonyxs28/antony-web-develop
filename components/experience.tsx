"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Zap,
  Code2,
  Smartphone,
  Search,
  Gauge,
  Server,
  HeadphonesIcon,
  FileCheck,
} from "lucide-react";

const stats = [
  { value: 30, suffix: "+", label: "Projetos Entregues" },
  { value: 100, suffix: "%", label: "Clientes Satisfeitos" },
  { value: 98, suffix: "%", label: "Performance Google" },
  { value: 24, suffix: "h", label: "Resposta Garantida" },
];

const differentials = [
  {
    icon: Code2,
    title: "Stack Moderno",
    description: "React, Next.js, React Native, TypeScript — tecnologia que grandes empresas usam, ao alcance do seu negócio",
  },
  {
    icon: Zap,
    title: "Desenvolvimento Ágil",
    description: "Entregas rápidas sem perder qualidade. Seu projeto no ar em semanas, não meses",
  },
  {
    icon: Smartphone,
    title: "Web + Mobile",
    description: "Do site ao aplicativo nativo para iOS e Android com React Native. Solução completa em um só lugar",
  },
  {
    icon: Search,
    title: "SEO Otimizado",
    description: "Sites preparados para o Google. Mais visibilidade, mais tráfego, mais clientes",
  },
  {
    icon: Gauge,
    title: "Performance Máxima",
    description: "Cada byte é otimizado para carregar em segundos. Experiência fluida em qualquer dispositivo",
  },
  {
    icon: Server,
    title: "Soluções Escaláveis",
    description: "Arquitetura preparada para crescer. Seu negócio pode expandir que a tecnologia acompanha",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Real",
    description: "Não sumo depois de entregar. Suporte contínuo com atualizações e melhorias regulares",
  },
  {
    icon: FileCheck,
    title: "Código de Qualidade",
    description: "Código limpo, seguro e documentado. Você não fica refém — pode levar para outro dev se quiser",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Por que empresas <span className="gradient-text">confiam no meu trabalho</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Não entrego só código. Entrego soluções que geram resultado, com qualidade profissional 
            e suporte de verdade — do planejamento à manutenção contínua.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl glass-card text-center group hover:bg-primary/5 transition-colors"
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-5 rounded-xl glass-card glass-card-hover group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
