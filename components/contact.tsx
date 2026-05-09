"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, MessageCircle, Calendar, Mail, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Resposta rápida para assuntos urgentes",
    action: "Conversar Agora",
    href: "https://wa.me/1234567890",
    primary: true
  },
  {
    icon: Calendar,
    title: "Agendar Reunião",
    description: "Agende uma consultoria gratuita",
    action: "Agendar Call",
    href: "#contact"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Para consultas detalhadas de projetos",
    action: "Enviar Email",
    href: "mailto:hello@antony.dev"
  }
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
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
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {"Vamos construir algo"}{" "}
            <span className="gradient-text">incrível juntos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pronto para começar seu projeto? Entre em contato e vamos discutir 
            como posso ajudar a transformar sua visão em realidade.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-5 rounded-xl text-center group ${
                method.primary 
                  ? "bg-primary/10 border border-primary/30" 
                  : "glass-card glass-card-hover"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                method.primary 
                  ? "bg-primary/20" 
                  : "bg-muted group-hover:bg-primary/20"
              } transition-colors`}>
                <method.icon className={`w-6 h-6 ${method.primary ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
              <span className={`text-sm font-medium ${method.primary ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`}>
                {method.action} →
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl glass-card">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Mensagem Enviada!</h3>
                <p className="text-muted-foreground">
                  Obrigado por entrar em contato. Responderei em até 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      required
                      className="bg-muted/50 border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="bg-muted/50 border-border"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="project-type">Tipo de Projeto</Label>
                    <Select>
                      <SelectTrigger className="bg-muted/50 border-border">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="landing">Landing Page</SelectItem>
                        <SelectItem value="website">Site Institucional</SelectItem>
                        <SelectItem value="webapp">Aplicação Web</SelectItem>
                        <SelectItem value="automation">Automação</SelectItem>
                        <SelectItem value="maintenance">Manutenção</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Faixa de Orçamento</Label>
                    <Select>
                      <SelectTrigger className="bg-muted/50 border-border">
                        <SelectValue placeholder="Selecione o orçamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1k-3k">R$1,000 - R$3,000</SelectItem>
                        <SelectItem value="3k-5k">R$3,000 - R$5,000</SelectItem>
                        <SelectItem value="5k-10k">R$5,000 - R$10,000</SelectItem>
                        <SelectItem value="10k+">R$10,000+</SelectItem>
                        <SelectItem value="unsure">Ainda não sei</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte-me sobre seu projeto..."
                    required
                    rows={5}
                    className="bg-muted/50 border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
