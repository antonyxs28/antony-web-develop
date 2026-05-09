"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

const footerLinks = [
  {
    title: "Navegação",
    links: [
      { name: "Sobre", href: "#about" },
      { name: "Serviços", href: "#services" },
      { name: "Projetos", href: "#projects" },
      { name: "Contato", href: "#contact" },
    ]
  },
  {
    title: "Serviços",
    links: [
      { name: "Landing Pages", href: "#services" },
      { name: "Sistemas Web", href: "#services" },
      { name: "Automação", href: "#services" },
      { name: "Manutenção", href: "#pricing" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Política de Privacidade", href: "#" },
      { name: "Termos de Serviço", href: "#" },
      { name: "Política de Cookies", href: "#" },
    ]
  }
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.a
                href="#"
                className="text-2xl font-bold gradient-text inline-block mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Antony
              </motion.a>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Desenvolvedor web especializado em criar sites e sistemas 
                modernos e de alta performance para negócios prontos para crescer online.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Antony. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Construído com <span className="text-primary">Next.js</span> e <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
