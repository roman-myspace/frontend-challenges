"use client"

import React, { useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useIPCtx } from '@/context/iptracker-context';
import { RecenterMapMarker } from '@/@hooks/re-center-map';


export default function MapTracker() {
    const ipContext = useIPCtx();

    return (
        <div className="w-full overflow-hidden flex">
            {
                ipContext?.ipData?.location?.lat && ipContext?.ipData?.location?.lng &&
                <MapContainer center={[ipContext?.ipData?.location?.lat ?? "", ipContext?.ipData?.location?.lng ?? ""]} zoom={13}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[ipContext?.ipData?.location?.lat ?? "", ipContext?.ipData?.location?.lng ?? ""]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <RecenterMapMarker
                        lat={ipContext?.ipData?.location?.lat}
                        lng={ipContext?.ipData?.location?.lng}
                    />
                </MapContainer>
            }
        </div>
    )
}

