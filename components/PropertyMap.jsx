'use client'
import Spinner from './Spinner'
import { useEffect, useState } from 'react';

const PropertyMap = ({ property }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCoordsFromMapbox = async (address) => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${token}`;

    const res = await fetch(url);
    const data = await res.json();
    if (!data.features?.length) throw new Error('No results');
    return {
      lng: data.features[0].center[0],
      lat: data.features[0].center[1],
    };
  };

  useEffect(() => {
    (async () => {
      try {
        const address = [
          property?.location?.street,
          property?.location?.city,
          property?.location?.state,
          property?.location?.zipcode,
          property?.location?.country, // optional
        ]
          .filter(Boolean)
          .join(', ');

        const { lat, lng } = await fetchCoordsFromMapbox(address);
        setLat(lat);
        setLng(lng);
      } catch (err) {
        console.error('Mapbox geocoding failed:', err);
        // Fallback: Nairobi
        setLat(-1.286389);
        setLng(36.817223);
      } finally {
        setLoading(false);
      }
    })();
  }, [property]);

  if (loading) {<Spinner />}

  return (
    <div className="w-full h-[500px]">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
      ></iframe>
    </div>
  );
};

export default PropertyMap;
