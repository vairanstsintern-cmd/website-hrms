import './globals.css'

export const metadata = {
  title: 'Shenll HRMS — AI-Powered HR & Payroll Software',
  description: 'Shenll HRMS automates attendance, leave and payroll for growing businesses. Modular AI-powered HR software with core HR, project tracking, a mobile app and 99.9% uptime. Trusted by 500+ businesses. Book a live demo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Instrument+Sans:wght@400;500;600&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  )
}
