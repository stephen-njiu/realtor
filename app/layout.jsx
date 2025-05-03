import '@/assets/styles/globals.css';

const MainLayout = ( {children} ) => {
  return (
    <html>
        <body>
            <main>
              <div>{children}</div>
            </main>
        </body>
    </html>
  )
}

export default MainLayout