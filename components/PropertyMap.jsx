'use client'
import {useEffect, useState } from 'react'
import { setDefaults, fromAddress } from 'react-geocode'

const PropertyMap = ({ property }) => {
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [viewport, setViewport] = useState ({
        latitude: 0,
        longitude: 0,
        zoom: 12,
        width: '100%',
        height: '500'
    })


  return (
    <div>PropertyMap</div>
  )
}

export default PropertyMap