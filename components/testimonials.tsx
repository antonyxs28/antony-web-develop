"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, Clínica MedCare",
    content: "O Antony entregou nosso sistema de gestão clínica em tempo recorde. O sistema é intuitivo, rápido e nossa equipe ama usar. Reduzimos o tempo de agendamento em 60%.",
    rating: 5,
    avatar: "CM"
  },
  {
    name: "Juliana Costa",
    role: "Proprietária, Gastro Fusion",
    content: "Minha landing page ficou linda! As reservas online aumentaram 40% no primeiro mês. O Antony entendeu exatamente o que eu precisava. Recomendo de olhos fechados.",
    rating: 5,
    avatar: "JC"
  },
  {
    name: "Rafael Oliveira",
    role: "Founder, FitLife App",
    content: "Precisávamos de um app para iOS e Android rápido e o Antony entregou. React Native foi a escolha certa — performance nativa com custo muito menor que duas equipes separadas.",
    rating: 5,
    avatar: "RO"
  },
  {
    name: "Ana Beatriz",
    role: "Marketing, PetLove",
    content: "Nossa landing page nova converte muito mais que a anterior. Design moderno, carregamento super rápido e o pessoal elogia. O investimento valeu cada centavo.",
    rating: 5,
    avatar: "AB"
  },
  {
    name: "Thiago Almeida",
    role: "Diretor, NexusFlow",
    content: "Contratamos o Antony para um sistema web completo e o resultado superou expectativas. Entregou antes do prazo, com qualidade de código excepcional. Contratamos para manutenção mensal também.",
    rating: 5,
    avatar: "TA"
  },
  {
    name: "Fernanda Lima",
    role: "Autônoma, Personal Trainer",
    content: "Sempre achei que site profissional era caro demais pra mim. O Antony fez um valor justo, ficou perfeito e ainda me ajuda com as atualizações. Meu número de clientes dobrou.",
    rating: 5,
    avatar: "FL"
  }
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
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
            Quem já trabalhou{" "}
            <span className="gradient-text">recomenda</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {"Não é sobre tecnologia. É sobre resultado. Veja o que meus clientes dizem."}
          </p>
        </motion.div>

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
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/30 transition-colors" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.content}"`}
              </p>

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
