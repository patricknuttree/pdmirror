import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { displayPds } from "../../store/pd";
import AuthNavBar from "../AuthNavBar";
import Search from "../search/Search";
import "./Main.css"

const Main = () => {
    const dispatch = useDispatch();
    const policeDepartments = useSelector(state => {
        return state.pd.list.map(pdId => state.pd[pdId])
    })

    useEffect(() => {
        dispatch(displayPds())
    },[dispatch])

    return (
        <div>
            <AuthNavBar />
            <div className="main-search-container-outer">
                <div className="main-search-container-mid">
                    <div className="main-search-container-inner">
                        <div className="main-search-container">
                            <div className="main-search-title">Search Police Department</div>
                                <Search />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main