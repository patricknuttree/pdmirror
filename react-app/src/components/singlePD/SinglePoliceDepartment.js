import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { displayPds } from "../../store/pd";

const SinglePoliceDepartment = () => {
    const { pdId } = useParams();
    const dispatch = useDispatch();
    const policeDepartments = useSelector(state => {
        return state.pd.list.map(pdId => state.pd[pdId])
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
                <h1>This is where the reflections go</h1>
            </div>
        </div>
    )
}

export default SinglePoliceDepartment