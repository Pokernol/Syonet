import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./maps.css"

//API GOOGLE MAPS
function Maps(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBVcp5GwUapeOKxU-hpNvIpt-iQyk6Fw5I"
  })
  const position = {
    lat: -29.68374352661882,
    lng: -51.45792828644756
  }
  
  return (
    <div className="Maps">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '1000px', height: "500px" }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position} 
            options={{
              label:{
               text:"SYONET",
               className:"map-marker",
              },
              }}
          />
          )
        </GoogleMap>
      ) : <></>
    }</div>
    )
    }
    

export default Maps;