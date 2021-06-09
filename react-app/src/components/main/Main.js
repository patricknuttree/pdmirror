import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { displayPds } from "../../store/pd";
import Search from "../search/Search";
// import Map from "../map/Map"

const Main = () => {
    const dispatch = useDispatch();
    const policeDepartments = useSelector(state => {
        return state.pd.list.map(pdId => state.pd[pdId])
    })

    useEffect(() => {
        dispatch(displayPds())
    },[dispatch])
    console.log("IS STATE CONNECTED", policeDepartments)

    return (
        <div>
            <div>
                <div>
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Main