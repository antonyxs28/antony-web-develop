"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { FormEvent, useRef, useState } from "react"
import { Send, MessageCircle, Calendar, Mail, Loader2, CheckCircle2, XCircle } from "lucide-react"
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
  const [email, setEmail] = useState("")
  const [projeto, setProjeto] = useState("")
  const [orcamento, setOrcamento] = useState("")
  const [mensagem, setMensagem] = useState("")

  const APP_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyoQIvR9DRrDQq7tjsTjDkdrDvQwomZQ58Iq-4cfYhLNqhvIOa1qQzwEqn3WJdRrgatIw/exec"

  const resetForm = () => {
    setNome("")
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
          <p className="text-muted-foreground text-lg">
            Preencha o formulário abaixo ou me chame no WhatsApp. Respondo em até 24 horas
            com um orçamento personalizado para seu projeto.
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
          <div className="p-8 rounded-2xl glass-card relative overflow-hidden">
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
                  className="space-y-6"
                >
                  <div className={`transition-all duration-300 ${isSubmitting ? "pointer-events-none opacity-60" : ""}`}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                          id="name"
                          value={nome}
                          onChange={(event) => setNome(event.target.value)}
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
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="seu@email.com"
                          required
                          className="bg-muted/50 border-border"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-type">Tipo de Projeto</Label>
                        <Select value={projeto} onValueChange={setProjeto}>
                          <SelectTrigger className="bg-muted/50 border-border">
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
                        <Label htmlFor="budget">Faixa de Orçamento</Label>
                        <Select value={orcamento} onValueChange={setOrcamento}>
                          <SelectTrigger className="bg-muted/50 border-border">
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

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        value={mensagem}
                        onChange={(event) => setMensagem(event.target.value)}
                        placeholder="Conte-me sobre seu projeto..."
                        required
                        rows={5}
                        className="bg-muted/50 border-border resize-none"
                      />
                    </div>
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
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 transition-all duration-300"
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
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
