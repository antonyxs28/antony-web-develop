import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Antony | Desenvolvedor Web - React, Next.js & TypeScript',
  description: 'Desenvolvedor web especializado em React, Next.js, Node.js e TypeScript criando landing pages de alta performance, sistemas e soluções escaláveis para negócios modernos.',
  keywords: ['desenvolvedor web', 'React', 'Next.js', 'TypeScript', 'Node.js', 'freelance', 'landing pages', 'sistemas web'],
  authors: [{ name: 'Antony' }],
  openGraph: {
    title: 'Antony | Desenvolvedor Web - React, Next.js & TypeScript',
    description: 'Desenvolvedor web especializado em React, Next.js, Node.js e TypeScript criando landing pages de alta performance, sistemas e soluções escaláveis para negócios modernos.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
