"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap, Smartphone, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Stack Moderno",
    description:
      "React, Next.js, React Native e TypeScript — tecnologias que grandes empresas usam",
  },
  {
    icon: Rocket,
    title: "Performance Real",
    description:
      "Sites que carregam em segundos, apps que não travam. SEO e velocidade são prioridade",
  },
  {
    icon: Smartphone,
    title: "Web + Mobile",
    description:
      "Do site institucional ao aplicativo nativo — soluções completas em um só lugar",
  },
  {
    icon: BarChart3,
    title: "Foco em Resultado",
    description: "Cada projeto é pensado para gerar leads, vendas e crescimento real",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Sobre
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Tecnologia que{" "}
              <span className="gradient-text">gera resultados</span>
              , não apenas código bonito
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou Antony, desenvolvedor web e mobile especializado em criar soluções digitais 
                que realmente funcionam — bonitas por fora, rápidas por dentro e feitas para converter.
              </p>
              <p>
                Trabalho com React, Next.js, React Native, TypeScript e Node.js para entregar 
                desde landing pages de alta conversão até sistemas web completos e aplicativos 
                mobile nativos (iOS e Android) com um único código.
              </p>
              <p>
                Meu foco é ajudar pequenas empresas, negócios locais e profissionais autônomos 
                a terem uma presença digital profissional sem pagar fortuna — com entregas 
                rápidas, comunicação direta e suporte contínuo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-2xl glass-card glass-card-hover group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
