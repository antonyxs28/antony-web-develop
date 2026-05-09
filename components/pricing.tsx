"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    description: "Perfeito para pequenos negócios começando agora",
    price: 199,
    popular: false,
    features: [
      "Hospedagem básica inclusa",
      "Correções de bugs e atualizações",
      "Suporte por email",
      "Backups mensais",
      "Monitoramento básico",
      "Resposta em até 48h"
    ]
  },
  {
    name: "Pro",
    description: "Ideal para negócios em crescimento com sites ativos",
    price: 399,
    popular: true,
    features: [
      "Hospedagem premium inclusa",
      "Correções prioritárias de bugs",
      "Suporte por email e chat",
      "Backups semanais",
      "Monitoramento avançado",
      "Otimização de performance",
      "Pequenas atualizações de funcionalidades",
      "Resposta em até 24h"
    ]
  },
  {
    name: "Premium",
    description: "Para empresas que necessitam de suporte completo",
    price: 799,
    popular: false,
    features: [
      "Hospedagem empresarial inclusa",
      "Correções imediatas de bugs",
      "Suporte prioritário 24/7",
      "Backups diários",
      "Monitoramento em tempo real",
      "Otimização contínua",
      "Novas funcionalidades mensais",
      "Gerente de conta dedicado",
      "Resposta em até 4h"
    ]
  }
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Preços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Planos de{" "}
            <span className="gradient-text">manutenção mensal</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Mantenha seu site funcionando perfeitamente com suporte contínuo, atualizações 
            e otimização. Escolha o plano que se adequa às suas necessidades.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-6 rounded-2xl ${
                plan.popular 
                  ? "glass-card border-primary/50 bg-primary/5" 
                  : "glass-card glass-card-hover"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6 pt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                <a href="#contact">Começar Agora</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Todos os planos exigem compromisso mínimo de 3 meses. Planos personalizados disponíveis para necessidades específicas.
        </motion.p>
      </div>
    </section>
  )
}
