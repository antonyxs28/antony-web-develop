"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Globe, 
  Building2, 
  Database, 
  Bot, 
  Gauge, 
  Wrench,
  CheckCircle2 
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Landing pages de alta conversão projetadas para capturar leads e impulsionar vendas com estética moderna e performance otimizada.",
    features: ["Design Personalizado", "Responsivo", "Otimizado para SEO", "Carregamento Rápido"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Building2,
    title: "Sites Institucionais",
    description: "Sites corporativos profissionais que estabelecem credibilidade e exibem sua marca com elegância e funcionalidade.",
    features: ["Identidade Visual", "Integração CMS", "Multilíngue", "Analytics"],
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    icon: Database,
    title: "Sistemas Web",
    description: "Aplicações web e sistemas de gestão personalizados para otimizar suas operações empresariais e aumentar a produtividade.",
    features: ["Funcionalidades Sob Medida", "Gestão de Usuários", "Dados em Tempo Real", "API Segura"],
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Bot,
    title: "Soluções de Automação",
    description: "Ferramentas de automação inteligente e integrações que economizam tempo, reduzem erros e escalam seus processos de negócio.",
    features: ["Automação de Workflows", "Integrações via API", "Processamento de Dados", "Agendamento"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Gauge,
    title: "Otimização de Performance",
    description: "Acelere suas aplicações existentes com técnicas avançadas de otimização para melhor experiência do usuário e rankings SEO.",
    features: ["Core Web Vitals", "Code Splitting", "Otimização de Imagens", "Caching"],
    color: "from-blue-400/20 to-cyan-400/20"
  },
  {
    icon: Wrench,
    title: "Suporte Mensal",
    description: "Suporte técnico contínuo com monitoramento, atualizações e melhorias periódicas para manter seu projeto sempre funcionando com qualidade.",
    features: ["Suporte Técnico", "Correção de Bugs", "Atualizações de Segurança", "Otimizações Regulares"],
    color: "from-indigo-400/20 to-blue-400/20"
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
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
            Soluções adaptadas às{" "}
            <span className="gradient-text">necessidades do seu negócio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            De landing pages modernas a sistemas web personalizados, cada projeto é desenvolvido 
            com foco em performance, design e experiência do usuário.
          </p>
        </motion.div>

        {/* Services Grid */}
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
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
