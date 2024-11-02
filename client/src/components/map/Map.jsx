import React from 'react'
import './map.scss'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

export default function Map({ items }) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    if (!isLoaded) {
        return <div>ERROR OCCURED</div>;
    }

    // Ensure latitude and longitude are numbers
    const latSum = items.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.latitude), 0);
    const latAvg = latSum / items.length;
    const lonSum = items.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.longitude), 0);
    const lonAvg = lonSum / items.length;

    const center = { lat: latAvg, lng: lonAvg }

    return (
        <div className="map">
            <GoogleMap
                center={center}
                zoom={11.5}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false
                }}
            >
                {items.map((position) => (
                    <Marker
                        key={`${position.latitude}-${position.longitude}`} // Add a key to avoid warnings
                        position={{
                            lat: parseFloat(position.latitude),
                            lng: parseFloat(position.longitude)
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    )
}

