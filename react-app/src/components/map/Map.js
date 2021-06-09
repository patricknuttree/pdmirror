import React, { useState } from "react"
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import Geocode from "react-geocode"
// import Locations from "./Locations"
import "./Map.css"
import { useDispatch, useSelector } from "react-redux";
import { displayPds } from "../../store/pd";

require('dotenv').config();

const Map = () => {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    Geocode.setLanguage("en");

    const dispatch = useDispatch();
    dispatch(displayPds())

    const policeDepartments = useSelector(state => {
        return state.pd
    });

    const latAndLngFinder = async(pdObj) => {
        const response = await Geocode.fromAddress(`${pdObj.street_address}, ${pdObj.city}, ${pdObj.state}`);
        const {lat, lng} = response.results.geometry.location;
        pdObj.location = {}
        pdObj.location.lat = lat
        pdObj.location.lnt = lng
        return pdObj
    };

    
    // const newPds = []
    // policeDepartments.forEach(policeDept => {
    //     const policeDeptWithCoordinates = latAndLngFinder(policeDept)
    //     newPds.push(policeDeptWithCoordinates)
    // }

    //     for (const policeDept in policeDepartments) {
    //         const response = Geocode.fromAddress(`${policeDept.street_number}, ${policeDept.street_name}, ${policeDept.city}, ${policeDept.state}, ${policeDept.zip_code}`);
    //         const {lat, lng} = response.results.geometry.location;
    // }
// API KEY
// const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env

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
    }
        // return (
        //     <h1>Just a Stand in</h1>
        // )
    return (
        <div className="map-container">
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={mapStyles} zoom={7} center={defaultCenter}>
                
                </GoogleMap>
            </LoadScript>
        </div>
    )
}


export default Map