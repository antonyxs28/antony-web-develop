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
    question: "Quanto custa um site profissional?",
    answer: "Depende do projeto. Landings pages a partir de R$ 600, sites institucionais a partir de R$ 1.200, sistemas web a partir de R$ 3.500 e apps mobile a partir de R$ 4.200. Após uma conversa rápida, te dou um orçamento exato sem surpresas."
  },
  {
    question: "Você desenvolve aplicativos mobile? Como funciona?",
    answer: "Sim! Uso React Native para criar apps nativos para iOS e Android com um único código. Seu app funciona perfeitamente nos dois sistemas com performance nativa, mas com custo muito menor que desenvolver dois apps separados. O investimento inicial começa em R$ 4.200."
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer: "Landing pages e sites institucionais levam de 1 a 3 semanas. Sistemas web e aplicativos mobile podem levar de 4 a 8 semanas dependendo da complexidade. Forneço um cronograma detalhado durante a consultoria inicial."
  },
  {
    question: "Preciso ter design pronto ou você cria?",
    answer: "Cuido de tudo! Se você já tiver um design no Figma, posso trabalhar a partir dele. Se não tiver, crio o design do zero baseado nas necessidades do seu negócio e no que funciona para o seu público."
  },
  {
    question: "Você oferece suporte depois de entregar?",
    answer: "Sim! Todo projeto inclui 30 dias de suporte pós-entrega para ajustes e correções. Depois disso, ofereço planos de manutenção mensal a partir de R$ 197/mês com atualizações, segurança, backups e melhorias contínuas. Sem fidelidade."
  },
  {
    question: "Qual a diferença de um site feito por você vs. Wix/WordPress?",
    answer: "Performance, segurança e liberdade. Enquanto construtores como Wix limitam o que você pode fazer, sites feitos com Next.js e React carregam muito mais rápido (melhor para SEO e experiência do usuário), são mais seguros e podem crescer conforme seu negócio expande. Além disso, você não fica preso à plataforma."
  },
  {
    question: "Você ajuda com a hospedagem e domínio?",
    answer: "Sim! Te ajudo a escolher a melhor hospedagem para seu projeto (Vercel, Hostinger, AWS…) e faço toda a configuração: domínio, SSL, deploy e monitoramento. Você não precisa se preocupar com a parte técnica."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Para projetos, peço 50% no início e 50% na entrega. Para projetos maiores, podemos parcelar ou organizar pagamentos por etapas. Os planos de manutenção mensal são cobrados no início de cada mês e você pode cancelar quando quiser."
  },
  {
    question: "Posso atualizar o conteúdo do site depois de pronto?",
    answer: "Sim! Sites institucionais incluem um CMS (sistema de gerenciamento de conteúdo) que permite você editar textos, imagens e criar posts no blog sem precisar de conhecimento técnico. É tão simples quanto editar um documento."
  },
  {
    question: "Você cria aplicativos para iOS e Android ao mesmo tempo?",
    answer: "Exato! Com React Native, desenvolvo um único código que funciona nativamente nos dois sistemas. Isso reduz o custo e o tempo de desenvolvimento pela metade, sem perder qualidade ou performance. Seu app vai ter a cara e o comportamento de um app nativo em ambos os sistemas."
  }
]

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
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
            Dúvidas{" "}
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            As respostas que você precisa para tomar a melhor decisão para seu negócio.
            Se não encontrar o que procura, é só me chamar.
          </p>
        </motion.div>

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
