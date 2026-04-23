import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Your Brand — Professional Web Solutions & Digital Services",
    template: "%s | Your Brand",
  },
  description:
    "Giải pháp web chuyên nghiệp, thiết kế hiện đại và tối ưu hiệu suất cao.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'vi';
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir="ltr"
      className={`${inter.variable}`}
    >
      <head>
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Toaster position="top-right" richColors />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
