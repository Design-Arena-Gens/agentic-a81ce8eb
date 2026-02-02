export const metadata = {
  title: 'Learn English Grammar - Voice',
  description: 'Interactive lessons on Active and Passive Voice',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
