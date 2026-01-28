import type { Metadata } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { OrganizationJsonLd } from '@/components/seo/JsonLd'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ConsultancyKhabar | Find Verified Study Abroad Consultancies',
    template: '%s | ConsultancyKhabar',
  },
  description: 'Nepal\'s leading directory for study abroad consultancies. Compare verified consultancies, read reviews, and find the perfect match for your education journey to Australia, Canada, UK, USA, and more.',
  keywords: ['study abroad', 'Nepal', 'consultancy', 'IELTS', 'visa', 'Australia', 'Canada', 'UK', 'education'],
  authors: [{ name: 'ConsultancyKhabar' }],
  creator: 'ConsultancyKhabar',
  metadataBase: new URL('https://consultancykhabar.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://consultancykhabar.com',
    siteName: 'ConsultancyKhabar',
    title: 'ConsultancyKhabar | Find Verified Study Abroad Consultancies',
    description: 'Nepal\'s leading directory for study abroad consultancies. Compare verified consultancies, read reviews, and find your perfect match.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ConsultancyKhabar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConsultancyKhabar | Find Verified Study Abroad Consultancies',
    description: 'Nepal\'s leading directory for study abroad consultancies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${jakarta.variable} ${outfit.variable} antialiased bg-background text-slate-900`}>
        <OrganizationJsonLd />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
