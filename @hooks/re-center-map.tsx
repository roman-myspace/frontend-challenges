import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const RecenterMapMarker = ({ lat, lng }: any) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng]);
    }, [lat, lng]);
    return null;
}