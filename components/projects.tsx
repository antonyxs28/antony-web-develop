"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "NexusFlow SaaS",
    description: "Plataforma SaaS completa com dashboard, análises em tempo real e insights de IA para gestão empresarial.",
    image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    category: "Sistema Web"
  },
  {
    title: "MedCare Pro",
    description: "Sistema de gestão clínica com agendamento, prontuários eletrônicos, telemedicina e faturamento automatizado.",
    image: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    category: "Sistema Web"
  },
  {
    title: "Gastro Fusion",
    description: "Landing page moderna para restaurante com reservas online, cardápio interativo e delivery integrado.",
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)",
    tags: ["Next.js", "Framer Motion", "Stripe", "Supabase"],
    category: "Landing Page"
  },
  {
    title: "FitLife App",
    description: "Aplicativo mobile de fitness com monitoramento de treinos, planos personalizados e comunidade integrada — iOS e Android.",
    image: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2a2a5e 100%)",
    tags: ["React Native", "TypeScript", "Node.js", "Supabase", "Expo"],
    category: "App Mobile"
  },
  {
    title: "PetLove",
    description: "Landing page para petshop com agendamento online, galeria de serviços, depoimentos e integração com WhatsApp.",
    image: "linear-gradient(135deg, #1a0f1a 0%, #2d1a2d 50%, #3d2a3d 100%)",
    tags: ["Next.js", "Tailwind", "WhatsApp API", "Vercel"],
    category: "Landing Page"
  },
  {
    title: "AI Productivity Hub",
    description: "Plataforma de produtividade com IA para automatizar workflows, gerenciar tarefas e otimizar a eficiência da equipe.",
    image: "linear-gradient(135deg, #0a0a0f 0%, #151520 50%, #1a1a2e 100%)",
    tags: ["Next.js", "OpenAI", "Vercel AI", "PostgreSQL", "Redis"],
    category: "Sistema Web"
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Projetos que{" "}
            <span className="gradient-text">entregam resultado</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            De landing pages que vendem a aplicativos mobile que encantam — 
            cada projeto é feito com tecnologia de ponta e atenção aos detalhes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl glass-card glass-card-hover overflow-hidden ${
                index === 3 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div 
                className="h-48 md:h-56 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-4 rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 p-3 border-b border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="h-3 w-3/4 bg-white/10 rounded" />
                    <div className="h-3 w-1/2 bg-white/10 rounded" />
                    <div className="h-3 w-2/3 bg-white/10 rounded" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-8 bg-primary/20 rounded" />
                      <div className="h-8 bg-white/5 rounded" />
                      <div className="h-8 bg-white/5 rounded" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Visualizar
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2 bg-background/50">
                    <Github className="w-4 h-4" />
                    Código
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
