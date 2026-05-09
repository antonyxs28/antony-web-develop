"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description:
      "Escrevendo código sustentável e escalável que resiste ao tempo",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Otimizado para velocidade e experiências de usuário excepcionais",
  },
  {
    icon: Users,
    title: "Foco no Usuário",
    description: "Projetando sempre com o usuário final em mente",
  },
  {
    icon: Zap,
    title: "Stack Moderno",
    description: "Usando tecnologias de ponta para soluções modernas",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Sobre Mim
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Criando experiências digitais com{" "}
              <span className="gradient-text">paixão e precisão</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Olá, sou Antony — desenvolvedor web focado em criar experiências
                digitais modernas, funcionais e visualmente impactantes. Minha
                jornada na programação começou pela curiosidade sobre como as
                coisas funcionavam na web. Desde então, venho evoluindo
                constantemente, estudando e desenvolvendo projetos com
                tecnologias modernas como React, Next.js, Node.js e TypeScript.
                Tenho foco na criação de landing pages, sistemas web e
                interfaces modernas que unem performance, design e boa
                experiência de usuário. Gosto de construir aplicações bem
                estruturadas, rápidas e com visual premium, sempre buscando
                entregar soluções que realmente agreguem valor para empresas e
                projetos digitais. Além do desenvolvimento, estou sempre
                aprendendo novas tecnologias, acompanhando tendências do mercado
                e aprimorando minhas habilidades para criar experiências cada
                vez melhores na web.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
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
