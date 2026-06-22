"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { FormEvent, useRef, useState } from "react"
import { Send, MessageCircle, Mail, Loader2, CheckCircle2, XCircle } from "lucide-react"
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
    description: "Receba um orçamento personalizado e tire suas dúvidas rapidamente.",
    tag: "Resposta rápida",
    action: "Falar no WhatsApp",
    href: "https://wa.me/1234567890",
    primary: true
  },
  {
    icon: Mail,
    title: "Email",
    description: "Envie os detalhes do seu projeto para uma análise mais completa.",
    tag: "Resposta em até 24 horas",
    action: "Enviar Email",
    href: "mailto:hello@antony.dev"
  }
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" as const }
  }
}

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  const [nome, setNome] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [email, setEmail] = useState("")
  const [projeto, setProjeto] = useState("")
  const [orcamento, setOrcamento] = useState("")
  const [mensagem, setMensagem] = useState("")

  const APP_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyoQIvR9DRrDQq7tjsTjDkdrDvQwomZQ58Iq-4cfYhLNqhvIOa1qQzwEqn3WJdRrgatIw/exec"

  const resetForm = () => {
    setNome("")
    setWhatsapp("")
    setEmail("")
    setProjeto("")
    setOrcamento("")
    setMensagem("")
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionError(null)
    setIsSubmitting(true)

    const payload = {
      nome,
      whatsapp,
      email,
      projeto,
      orcamento,
      mensagem,
    }

    try {
      const response = await fetch(APP_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Falha ao enviar a mensagem. Por favor, tente novamente.")
      }

      setIsSubmitted(true)
      resetForm()
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro inesperado. Tente novamente mais tarde."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewMessage = () => {
    setIsSubmitted(false)
    setSubmissionError(null)
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
            {"Vamos transformar sua"}{" "}
            <span className="gradient-text">ideia em realidade</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preencha o formulário abaixo ou me chame no WhatsApp. Respondo em até 24 horas
            com um orçamento personalizado para seu projeto.
          </p>
        </motion.div>

        {/* Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg sm:text-xl font-semibold text-foreground mb-2">
            Pronto para tirar seu projeto do papel?
          </p>
          <p className="text-muted-foreground">
            Entre em contato pelo WhatsApp para um orçamento rápido ou envie um email com os detalhes da sua ideia.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 sm:p-7 rounded-xl text-center group relative overflow-hidden ${
                method.primary
                  ? "bg-primary/10 border-2 border-primary/30"
                  : "glass-card glass-card-hover border"
              }`}
            >
              {/* Glow sutil no card primary */}
              {method.primary && (
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              )}
              <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                method.primary
                  ? "bg-primary/20 shadow-lg shadow-primary/10"
                  : "bg-muted group-hover:bg-primary/20"
              } transition-all duration-300`}>
                <method.icon className={`w-7 h-7 ${method.primary ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {method.description}
              </p>
              {method.tag && (
                <span className="inline-block text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full mb-3">
                  {method.tag}
                </span>
              )}
              <div>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${
                  method.primary
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary"
                } transition-colors`}>
                  {method.action}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
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
          <div className="p-8 sm:p-10 rounded-2xl glass-card relative overflow-hidden">
            {/* Form Header */}
            <div className="mb-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Solicite um Orçamento
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Preencha as informações abaixo e entrarei em contato para entender melhor seu projeto.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.1,
                    }}
                    className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl font-semibold text-foreground mb-2"
                  >
                    Mensagem Enviada!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-muted-foreground mb-6"
                  >
                    Obrigado por entrar em contato. Responderei em até 24 horas.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleNewMessage}
                      className="mt-2"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Nova Mensagem
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onSubmit={handleSubmit}
                >
                  <div className={`transition-all duration-300 ${isSubmitting ? "pointer-events-none opacity-60" : ""} space-y-6`}>
                    {/* Nome */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nome
                      </Label>
                      <Input
                        id="name"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        placeholder="Seu nome"
                        required
                        className="h-12 bg-muted/50 border-border transition-all duration-200 hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                      />
                    </div>

                    {/* WhatsApp + Email */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp" className="text-sm font-medium text-foreground">
                          WhatsApp
                        </Label>
                        <Input
                          id="whatsapp"
                          value={whatsapp}
                          onChange={(event) => setWhatsapp(event.target.value)}
                          placeholder="(11) 99999-9999"
                          className="h-12 bg-muted/50 border-border transition-all duration-200 hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="seu@email.com"
                          required
                          className="h-12 bg-muted/50 border-border transition-all duration-200 hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                        />
                      </div>
                    </div>

                    {/* Tipo de Projeto + Orçamento */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="project-type" className="text-sm font-medium text-foreground">
                          Tipo de Projeto
                        </Label>
                        <Select value={projeto} onValueChange={setProjeto}>
                          <SelectTrigger className="h-12 bg-muted/50 border-border transition-all duration-200 hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Landing Page">Landing Page</SelectItem>
                            <SelectItem value="Site Institucional">Site Institucional</SelectItem>
                            <SelectItem value="Aplicativo Mobile">Aplicativo Mobile</SelectItem>
                            <SelectItem value="Sistema Web">Sistema Web</SelectItem>
                            <SelectItem value="Automação">Automação</SelectItem>
                            <SelectItem value="Manutenção">Manutenção</SelectItem>
                            <SelectItem value="Outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-sm font-medium text-foreground">
                          Faixa de Orçamento
                        </Label>
                        <Select value={orcamento} onValueChange={setOrcamento}>
                          <SelectTrigger className="h-12 bg-muted/50 border-border transition-all duration-200 hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary">
                            <SelectValue placeholder="Selecione o orçamento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="R$1.000 - R$3.000">R$1.000 - R$3.000</SelectItem>
                            <SelectItem value="R$3.000 - R$5.000">R$3.000 - R$5.000</SelectItem>
                            <SelectItem value="R$5.000 - R$10.000">R$5.000 - R$10.000</SelectItem>
                            <SelectItem value="R$10.000+">R$10.000+</SelectItem>
                            <SelectItem value="Ainda não sei">Ainda não sei</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Mensagem */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Mensagem
                      </Label>
                      <Textarea
                        id="message"
                        value={mensagem}
                        onChange={(event) => setMensagem(event.target.value)}
                        placeholder="Conte-me sobre seu projeto... Qual o objetivo? Quais funcionalidades você precisa?"
                        required
                        rows={6}
                        className="min-h-[140px] bg-muted/50 border-border transition-all duration-200 hover:border-primary/30 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary resize-y"
                      />
                    </div>

                    <AnimatePresence>
                      {submissionError && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                          animate={{ opacity: 1, height: "auto", marginBottom: "1rem" }}
                          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ x: -10 }}
                            animate={{ x: 0 }}
                            className="rounded-2xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive flex items-start gap-3"
                          >
                            <XCircle className="w-5 h-5 mt-0.5 shrink-0" />
                            <span>{submissionError}</span>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
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
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
