"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Globe, 
  Building2, 
  Database, 
  Smartphone, 
  Bot, 
  Wrench,
  CheckCircle2 
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Landing pages rápidas, modernas e focadas em conversão.",
    price: "A partir de R$ 600+",
    badge: "Entrega rápida",
    features: ["Design sob medida", "100% responsivo", "SEO otimizado", "Integração com WhatsApp"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Building2,
    title: "Sites Institucionais",
    description: "Sites profissionais que transmitem credibilidade para seu negócio.",
    price: "A partir de R$ 1.200+",
    badge: "Sob medida",
    features: ["Identidade visual única", "CMS para editar", "Blog integrado", "Google Analytics"],
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps mobile para Android e iOS com performance nativa.",
    price: "A partir de R$ 4.200+",
    badge: "iOS e Android",
    features: ["iOS e Android com 1 código", "Performance nativa", "Publicação nas lojas", "Manutenção simplificada"],
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    icon: Database,
    title: "Sistemas Web",
    description: "Sistemas personalizados para organizar e escalar seu negócio.",
    price: "A partir de R$ 3.500+",
    badge: "Sob medida",
    features: ["Funcionalidades sob medida", "Painel administrativo", "Dados em tempo real", "API segura"],
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Bot,
    title: "Automações",
    description: "Automatize processos e economize horas de trabalho toda semana.",
    price: "A partir de R$ 900+",
    badge: "Mais produtividade",
    features: ["Workflows automáticos", "Integrações via API", "Notificações inteligentes", "Relatórios automáticos"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Wrench,
    title: "Suporte & Manutenção",
    description: "Seu projeto sempre funcionando com suporte contínuo e atualizações.",
    price: "Planos a partir de R$ 197/mês",
    badge: "Sem fidelidade",
    features: ["Correção de bugs", "Atualizações de segurança", "Backups regulares", "Melhorias contínuas"],
    color: "from-indigo-400/20 to-blue-400/20"
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            O que eu{" "}
            <span className="gradient-text">posso fazer por você</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Da landing page que vende ao sistema que organiza — soluções diretas, 
            sem enrolação e com preço justo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-6 rounded-2xl glass-card glass-card-hover overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-medium text-primary whitespace-nowrap">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <div className="text-lg font-bold gradient-text mb-4">
                    {service.price}
                  </div>

                  <ul className="space-y-2 border-t border-border/50 pt-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
