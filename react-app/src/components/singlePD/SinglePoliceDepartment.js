import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { displayPds } from "../../store/pd";
import AuthNavBar from "../AuthNavBar";
import Reflection from "./Reflection";
import "./singlepolicedepartment.css"

const SinglePoliceDepartment = () => {
    const { pdId } = useParams();
    const dispatch = useDispatch();
    const policeDepartments = useSelector(state => {
        return state.pd.list.map(singlePdId => state.pd[singlePdId])
    })
    const singlePd = policeDepartments[pdId - 1]

    useEffect(() => {
        dispatch(displayPds())
    },[dispatch])

    return (
        <div>
                <AuthNavBar />
            <div className="spd-container-outer">
                <div className="spd-container-inner">
                <div className="spd-pd-title-container-outer">
                    <div className="spd-pd-title-container">
                        <div className="spd-pd-name-container">
                            <div>{singlePd?.department_name}</div>
                        </div>
                        <div className="spd-pd-address-container">
                            <div className="spd-address-title">Department Address:</div>
                            <div className="spd-address-streetadd">{singlePd?.street_address}</div>
                            <div className="spd-address-secondline">{singlePd?.city}, {singlePd?.state}, {singlePd?.zip_code}</div>
                        </div>
                    </div>
                </div>
                <div className="spd-reflection-container">
                    <Reflection pdId={pdId}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePoliceDepartment