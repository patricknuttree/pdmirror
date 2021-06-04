import React, { useState } from "react"
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import Locations from "./Locations"
import "./Map.css"
import { useDispatch, useSelector } from "react-redux";
import { displayPds } from "../../store/pd";

require('dotenv').config();

const Map = () => {
    const dispatch = useDispatch();
    dispatch(displayPds())

// API KEY
// const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env
// console.log("THIS IS THE DUMB THING THAT WONT WORK", process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
//MAP SIZE
const mapStyles = {
    height: "500px",
    width: "500px",
}
//DEFAULT LOCATION
const defaultCenter = {
        lat: 41.4586535,
        lng:  -82.0156992
    };
    // SET LOCATIONS
    const [selected, setSelected] = useState({})
    const onSelect = item => {
        setSelected(item)
        {console.log("ITEM", item)}
}

    return (
        <div className="map-container">
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapStyles} zoom={7} center={defaultCenter}>
                    {
                        Locations.map(item => {
                            return (
                                <Marker key={item.location.lat}
                                position={item.location}
                                onClick={() => {onSelect(item)}}
                                />
                            )
                        })
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Map