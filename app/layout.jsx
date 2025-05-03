import '@/assets/styles/globals.css';

// metadata
export const metadata = {
    title: 'KejaSpot',
    keywords: 'Real Estate, Property, Kenya, Keja, airbnb in kenya, Booking, Rentals, rent a house',
    description: 'KejaSpot. The best place to find your next home in Africa. Rent for hours, days, weeks or months.',
}

const MainLayout = ( {children} ) => {
  return (
    <html>
        <body>
            <main>
              {children}
            </main>
        </body>
    </html>
  )
}

export default MainLayout