"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechVision Inc",
    content: "Trabalhar com o Antony foi um prazer absoluto. Ele entregou um dashboard SaaS impressionante que superou nossas expectativas. A atenção aos detalhes e a otimização de performance foram notáveis.",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "David Chen",
    role: "Founder, HealthFirst Clinic",
    content: "O Antony construiu nosso sistema de gestão clínica do zero. O sistema é intuitivo, rápido e nossa equipe adora usá-lo. Ele realmente entende como traduzir necessidades de negócio em soluções técnicas.",
    rating: 5,
    avatar: "DC"
  },
  {
    name: "Maria Rodriguez",
    role: "Marketing Director, FoodieHub",
    content: "A presença online do nosso restaurante se transformou completamente depois que o Antony redesenhou nosso site. As reservas aumentaram 40% no primeiro mês. Altamente recomendado!",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "James Wilson",
    role: "CTO, FitLife Startup",
    content: "A landing page que o Antony criou para nosso app fitness era exatamente o que precisávamos. Limpa, moderna e converte como nunca. Ele agora é nosso desenvolvedor de confiança para todos os projetos.",
    rating: 5,
    avatar: "JW"
  },
  {
    name: "Emily Thompson",
    role: "Product Manager, AI Solutions",
    content: "A expertise do Antony em React e Next.js é excepcional. Ele entregou nossa plataforma de produtividade com IA antes do prazo, com funcionalidades que nem imaginávamos ser possíveis.",
    rating: 5,
    avatar: "ET"
  },
  {
    name: "Michael Brown",
    role: "Owner, Local Business Hub",
    content: "Como dono de uma pequena empresa, estava preocupado com o custo de um site profissional. O Antony ofereceu excelente valor e continua nos apoiando com a manutenção mensal.",
    rating: 5,
    avatar: "MB"
  }
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            O que os clientes{" "}
            <span className="gradient-text">dizem sobre mim</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {"Não acredite apenas na minha palavra — veja o que as empresas e startups com quem tive o prazer de trabalhar têm a dizer."}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl glass-card glass-card-hover relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/30 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
