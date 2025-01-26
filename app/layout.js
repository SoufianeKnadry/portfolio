import "@/app/globals.css"

export const metadata = {
  title: "Knadry Soufiane - Portfolio",
  description: "Web Developer & Designer Portfolio",
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}

