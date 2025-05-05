import InfoBox from "./InfoBox"

const InfoBoxes = ({children}) => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox heading="For Renters" 
            backgroundColor='bg-gradient-to-br from-purple-100 via-yellow-100 to-fuchsia-100'
            buttonInfo ={
                {text:'Browse Properties',
                    link: '/properties',
                    backgroundColor:'bg-black'
                }
            }>
                Find your dream rental property. Bookmark properties and contact owners
            </InfoBox>
            <InfoBox heading="For Property Owners" backgroundColor='bg-gradient-to-r from-rose-100 via-pink to-amber-100'
            buttonInfo ={
                {text:'Add Property',
                    link: '/properties/add',
                    backgroundColor:'bg-blue-500'
                }
            }>
                List your properties and reach potential tenants. Rent for hours or for long term
            </InfoBox>
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes