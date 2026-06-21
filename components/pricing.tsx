"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Sparkles, MessageCircle, Shield, Zap, HeadphonesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: 197,
    popular: false,
    icon: Shield,
    features: [
      "Até 5 correções de bugs/mês",
      "Atualizações de segurança",
      "Backup mensal",
      "Suporte via WhatsApp",
      "Resposta em até 48h"
    ]
  },
  {
    name: "Professional",
    price: 397,
    popular: true,
    icon: Zap,
    features: [
      "Até 15 correções de bugs/mês",
      "Até 3 melhorias mensais",
      "Otimização de performance",
      "Monitoramento básico",
      "Suporte prioritário",
      "Resposta em até 24h"
    ]
  },
  {
    name: "Enterprise",
    price: 797,
    popular: false,
    icon: HeadphonesIcon,
    features: [
      "Correções ilimitadas",
      "Melhorias contínuas",
      "Monitoramento completo",
      "Consultoria técnica mensal",
      "Prioridade máxima",
      "Resposta em até 12h"
    ]
  }
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Suporte & Manutenção
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Planos de{" "}
            <span className="gradient-text">suporte contínuo</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Seu projeto merece acompanhamento. Escolha o plano ideal e deixe a parte 
            técnica comigo enquanto você foca no que importa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-6 rounded-2xl flex flex-col ${
                plan.popular 
                  ? "glass-card border-primary/50 bg-primary/5 scale-105 md:scale-110" 
                  : "glass-card glass-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Mais Escolhido
                  </span>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                  plan.popular ? "bg-primary/20" : "bg-muted"
                }`}>
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">R${plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Cancele quando quiser</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                <a href="#contact">
                  {plan.popular ? "Quero Esse Plano" : "Contratar Plano"}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary" />
              Suporte via WhatsApp
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Sem fidelidade
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Planos que cabem no seu bolso
            </span>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Todos os projetos incluem 30 dias de suporte pós-entrega.{" "}
            <a href="#contact" className="text-primary hover:underline">
              Tire suas dúvidas
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
