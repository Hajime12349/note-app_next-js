import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from "./Header"

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata = {
  title: 'Memo App',
  description: 'Memo app created by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={NotoSansJP.className} lang="ja">
      <Header></Header>
      <body>{children}</body>
    </html>
  )
}