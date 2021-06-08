import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { displayPds } from "../../store/pd";
import Reflection from "./Reflection";

const SinglePoliceDepartment = () => {
    const { pdId } = useParams();
    const dispatch = useDispatch();
    const policeDepartments = useSelector(state => {
        return state.pd.list.map(singlePdId => state.pd[singlePdId])
    })
    const singlePd = policeDepartments[pdId]

    useEffect(() => {
        dispatch(displayPds())
    },[dispatch])

    return (
        <div>
            <div>{singlePd?.department_name}</div>
            <div>
                <div>Department Address:</div>
                <div>{singlePd?.street_address}</div>
                <div>{singlePd?.city}, {singlePd?.state}, {singlePd?.zip_code}</div>
            </div>
            <div>
                <Reflection pdId={pdId}/>
            </div>
        </div>
    )
}

export default SinglePoliceDepartment