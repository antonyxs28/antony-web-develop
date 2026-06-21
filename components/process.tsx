"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  CalendarCheck, 
  FileText, 
  Code2, 
  Rocket, 
  HeadphonesIcon 
} from "lucide-react"

const steps = [
  {
    icon: CalendarCheck,
    title: "Consultoria",
    description: "Bate-papo rápido para entender seu negócio, seus objetivos e definir o melhor caminho."
  },
  {
    icon: FileText,
    title: "Proposta",
    description: "Você recebe um orçamento claro com cronograma, entregáveis e tudo que está incluso."
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description: "Mão na massa com atualizações semanais. Você acompanha tudo em tempo real."
  },
  {
    icon: Rocket,
    title: "Lançamento",
    description: "Testes, ajustes finais e deploy. Seu projeto no ar funcionando perfeitamente."
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte",
    description: "30 dias de suporte incluso. E depois, planos de manutenção para seu projeto seguir crescendo."
  }
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Processo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Simples, rápido e{" "}
            <span className="gradient-text">sem mistério</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Da primeira conversa ao projeto no ar — você sabe exatamente o que acontece 
            em cada etapa. Sem burocracia, sem surpresas.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden lg:block" />
          
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl glass-card glass-card-hover inline-block"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center lg:hidden">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground max-w-sm">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-background border border-primary/30 items-center justify-center relative z-10 shadow-lg shadow-primary/10">
                  <step.icon className="w-7 h-7 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                {/* Empty Space for Layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
