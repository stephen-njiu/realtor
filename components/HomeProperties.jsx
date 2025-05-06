import Property from '@/models/Property'
import PropertyCard from './PropertyCard'
import Link from 'next/link'
import connectDB from '@/config/database'



const HomeProperties = async () => {
    await connectDB()

    const recentProperties = await Property.find({})
    .sort({createdAt: -1})
    .limit(3)
    .lean() // optimized for readonly 


  return (
    <>
    <section className="px-4 py-6">
      <div className="contianer-xl lg:container m-auto px-4 py-6">
        <h2 className="text-xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
        </h2>
        {recentProperties.length === 0? (<p>No properties found</p>) :(
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            }
          </div>
        )}
      </div>
    </section>
    <section className='m-auto max-w-lg my-6 px-6'>
        <Link 
        href='/properties'
        className='animated-gradient-btn text-white block text-center'
        >
            View All Properties
        </Link>
    </section>
    </>
  ) 
}

export default HomeProperties