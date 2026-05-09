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
  { value: 30, suffix: "+", label: "Projetos Desenvolvidos" },
  { value: 100, suffix: "%", label: "Design Responsivo" },
  { value: 100, suffix: "%", label: "Foco em Performance" },
  { value: 24, suffix: "h", label: "Resposta Rápida" },
];

const differentials = [
  {
    icon: Code2,
    title: "Stack Moderno",
    description: "Utilizando React, Next.js e TypeScript para construir soluções eficientes e de alto desempenho",
  },
  {
    icon: Zap,
    title: "Desenvolvimento Ágil",
    description: "Entregas rápidas com metodologias eficientes sem comprometer a qualidade do código",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Interfaces adaptáveis que funcionam perfeitamente em qualquer dispositivo",
  },
  {
    icon: Search,
    title: "Aprendizado Contínuo",
    description: "Sempre atualizado com as tendências e melhores práticas do desenvolvimento web",
  },
  {
    icon: Gauge,
    title: "Foco em Performance",
    description: "Código otimizado para carregamento rápido e experiência de usuário fluida",
  },
  {
    icon: Server,
    title: "Soluções Escaláveis",
    description: "Arquiteturas preparadas para crescer conforme as necessidades do seu negócio",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte e Manutenção",
    description: "Acompanhamento contínuo com atualizações para manter seu projeto sempre no ar",
  },
  {
    icon: FileCheck,
    title: "Código de Qualidade",
    description: "Código limpo, bem estruturado e documentado seguindo as melhores práticas",
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
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Experiência
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Por que clientes <span className="gradient-text">me escolhem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entrego projetos modernos e funcionais com foco em performance,
            usabilidade e design. Cada aplicação é construída com tecnologias
            atuais e boas práticas para gerar valor real ao seu negócio.
          </p>
        </motion.div>

        {/* Stats */}
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

        {/* Differentials Grid */}
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
