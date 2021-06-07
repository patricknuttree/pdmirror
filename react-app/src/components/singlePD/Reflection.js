import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router"
import { displayReflections } from "../../store/reflection"

const Reflection = ({ pdId }) => {
    console.log(pdId)
    const dispatch = useDispatch();
    const reflections = useSelector(state => {
        return state.reflectionReducer.list?.map(reflectionId => state.reflectionReducer[reflectionId])
    })


    useEffect(() => {
        dispatch(displayReflections(pdId))
    }, [dispatch])
    console.log("ARE REFLECTIONS CONNECTED", reflections)

    return (
        <div>
            <div>
                {reflections?.map(reflect => (
                    <NavLink to={`/reflection/${reflect.id}`}>
                        <div>
                            {reflect.post}
                        </div>
                    </NavLink>
                ))}

            </div>
        </div>
    )
}

export default Reflection