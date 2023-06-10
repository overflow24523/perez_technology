import { useEffect, useRef, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.088295,
  lng: -82.3791495,
};

const options = {
  zoomControl: true,
};

const Ubicacion = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyClHlTwS5qEZ845QmQ7XBtBMih5C9zaIL4",
  });

  const [marker, setMarker] = useState(center);
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const listener = mapRef.current?.addListener("click", (event: google.maps.MapMouseEvent) => {
        if(event.latLng){   
            setMarker({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            })
        }
    });

    return () => {
      listener?.remove();
    };
  }, []);

  if (loadError) return <div>Error al cargar el mapa</div>;
  if (!isLoaded) return <div>Cargando el mapa...</div>;

  return (
    <GoogleMap 
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={12}
      options={options}
      onClick={(event) => {
        if(event.latLng){
            setMarker({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            });
        }
      }}
      onLoad={(map) => {
        mapRef.current = map;
      }}
    >
      <Marker position={marker} />
    </GoogleMap>
  );
};

export default Ubicacion;