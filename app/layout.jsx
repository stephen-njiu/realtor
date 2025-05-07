import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

// metadata
export const metadata = {
    title: 'KejaSpot',
    keywords: 'Real Estate, Property, Kenya, Keja, airbnb in kenya, Booking, Rentals, rent a house',
    description: 'KejaSpot. The best place to find your next home in Africa. Rent for hours, days, weeks or months.',
}

const MainLayout = ( {children} ) => {
  return (
    <AuthProvider> 
    <html>
        <body>
          <Navbar />
            <main>
              {children}
            </main>
            <Footer />
        </body>
    </html>
    </AuthProvider>
  )
}

export default MainLayout