import connectDB from "@/config/database"
import PropertyCard from "@/components/PropertyCard"
import Pagination from "@/components/Pagination"
import Property from "@/models/Property"


const PropertiesPage = async( {searchParams: {page = 1, pageSize=9}} ) => {
  await connectDB()

  const skip = (page -1) * pageSize
  const total = await Property.countDocuments({})


  const properties = await Property.find({}).skip(skip).limit(pageSize) // use lean for read only operations

  const showPagination = total > pageSize

  return (
    <section className="px-4 py-6">
      <div className="contianer-xl lg:container m-auto px-4 py-6">
        {properties.length === 0? (<p>No properties found</p>) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            }
          </div>
        )}
        { showPagination && (
          <Pagination 
          page={parseInt(page)}
          pageSize={parseInt(pageSize)}
          totalItems={total}
            />
        )}
      </div>
    </section>
  )
}

export default PropertiesPage