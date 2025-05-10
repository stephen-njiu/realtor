'use client'


// npm install photoswipe react-photoswipe-gallery
import {Gallery, Item } from 'react-photoswipe-gallery'
import Image from "next/image"

const PropertyImages = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
            {images.length === 1? (
                <Item 
                original = {images[0]}
                thumbnail={images[0]}
                width="1000"
                height="600"
                >
                {({ref, open}) => (   
                <Image
                    src={images[0]}
                    ref={ref}
                    onClick={open}
                    alt=''
                    className="object-cover h-[400px] mx-auto rounded-xl cursor-pointer"
                    width={1800} 
                    height={400}
                    priority={true}
                />
                )}
                </Item>
            ) : (
                <div className="grid grid-cols-2 gap-4">
                    { images.map((image, index) => (
                        <div key={index} className={`${images.length%2!==0 && index === images.length-1?
                        'col-span-2':
                        'col-span-1'
                        }`}>
                            <Item 
                            original = {image}
                            thumbnail={images}
                            width="1000"
                            height="600"
                            >
                            {({ref, open}) => (   
                            <Image
                                src={image}
                                ref={ref}
                                onClick={open}
                                alt=''
                                className="object-cover h-[400px] w-full rounded-xl cursor-pointer"
                                width={1800}
                                height={400}
                                priority={true}
                            />
                            )}
                            </Item>
                        </div>
                    ))}
                </div>
            )}
        </div>
        
    </section>
  )
}

export default PropertyImages