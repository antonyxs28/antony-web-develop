"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Em quais tecnologias você é especializado?",
    answer: "Sou especializado em tecnologias web modernas incluindo React, Next.js, TypeScript, Node.js e Tailwind CSS. Também trabalho com bancos de dados como PostgreSQL, MongoDB e ferramentas como Docker, Prisma e diversos serviços em nuvem como AWS e Vercel."
  },
  {
    question: "Quanto tempo leva um projeto típico?",
    answer: "Os prazos variam de acordo com a complexidade. Uma landing page geralmente leva de 1 a 2 semanas, enquanto uma aplicação web completa pode levar de 4 a 8 semanas. Forneço um cronograma detalhado durante nossa consulta inicial com base nos seus requisitos específicos."
  },
  {
    question: "Você oferece suporte contínuo após o lançamento?",
    answer: "Sim! Ofereço planos de manutenção mensal que incluem hospedagem, correção de bugs, atualizações de segurança, backups e suporte contínuo. Você pode escolher entre os planos Basic, Pro ou Premium de acordo com suas necessidades."
  },
  {
    question: "Qual é o seu processo de desenvolvimento?",
    answer: "Meu processo inclui: 1) Reunião de descoberta para entender suas necessidades, 2) Planejamento com especificações detalhadas, 3) Desenvolvimento com atualizações regulares, 4) Testes e garantia de qualidade, 5) Lançamento e deploy, e 6) Suporte e manutenção contínuos."
  },
  {
    question: "Você pode trabalhar com minha equipe ou designers existentes?",
    answer: "Com certeza! Tenho experiência em colaborar com designers, product managers e outros desenvolvedores. Posso trabalhar a partir de designs do Figma, integrar com bases de código existentes ou liderar o desenvolvimento do zero."
  },
  {
    question: "Quais são as condições de pagamento?",
    answer: "Para projetos, geralmente exijo 50% no início e 50% na conclusão. Para projetos maiores, podemos organizar pagamentos por marcos. Os planos de manutenção mensal são cobrados no início de cada mês."
  },
  {
    question: "Você fornece serviços de hospedagem?",
    answer: "Sim, todos os meus planos de manutenção mensal incluem hospedagem. Utilizo soluções premium que garantem carregamento rápido, alta disponibilidade e certificados SSL automáticos. Para projetos pontuais, posso configurar a hospedagem ou trabalhar com seu provedor de preferência."
  },
  {
    question: "Como nos comunicamos durante o projeto?",
    answer: "Acredito em comunicação transparente. Teremos videochamadas regulares para atualizações e estou disponível via email, WhatsApp ou sua ferramenta de comunicação preferida para perguntas rápidas. Você sempre saberá o status do seu projeto."
  }
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Perguntas{" "}
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tem dúvidas? Eu tenho as respostas. Se não encontrar o que procura, 
            fique à vontade para entrar em contato diretamente.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
