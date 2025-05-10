import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import 'photoswipe/dist/photoswipe.css'
import { GlobalProvider } from '@/context/GlobalContext';


// metadata
export const metadata = {
    title: 'KejaSpot',
    keywords: 'Real Estate, Property, Kenya, Keja, airbnb in kenya, Booking, Rentals, rent a house',
    description: 'KejaSpot. The best place to find your next home in Africa. Rent for hours, days, weeks or months.',
}

const MainLayout = ( {children} ) => {
  return (
    <AuthProvider> 
      <GlobalProvider>
        <html>
            <body>
              <Navbar />
                <main>
                  {children}
                </main>
                <Footer />
                <ToastContainer />
            </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  )
}

export default MainLayout