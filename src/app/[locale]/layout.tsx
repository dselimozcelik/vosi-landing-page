import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://vosi.ai";

  return {
    title: {
      default: "Vosi — Intelligent Software",
      template: "%s | Vosi",
    },
    description:
      locale === "tr"
        ? "Bilgisayarlı görü, yapay zeka ve tam yığın geliştirme ile işletmenizi geleceğe taşıyoruz."
        : "Computer vision, AI solutions, and full-stack development. We build intelligent software that drives real results.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        tr: `${baseUrl}/tr`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: "Vosi — Intelligent Software",
      description:
        locale === "tr"
          ? "Bilgisayarlı görü, yapay zeka ve tam yığın yazılım geliştirme."
          : "Computer vision, AI solutions, and full-stack development.",
      type: "website",
      url: `${baseUrl}/${locale}`,
      siteName: "Vosi",
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Vosi — Intelligent Software",
      description:
        locale === "tr"
          ? "Bilgisayarlı görü, yapay zeka ve tam yığın yazılım geliştirme."
          : "Computer vision, AI solutions, and full-stack development.",
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "tr" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.variable} antialiased min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--plum-600)] focus:text-white focus:rounded-md focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
