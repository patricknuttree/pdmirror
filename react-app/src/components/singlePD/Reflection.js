import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
// import { useParams } from "react-router"
import { displayReflections } from "../../store/reflection"
// import { Comment } from "../Comment"
import CreateReflection from "./CreateReflection"

const Reflection = ({ pdId }) => {
    const dispatch = useDispatch();
    const reflections = useSelector(state => {
        return state.reflectionReducer.list?.map(reflectionId => state.reflectionReducer[reflectionId])
    })

    // console.log("THIS IS THE REFLECTION STATE", reflections)

    const ratingCalculator = () => {
        if (reflections.length){
            let ratingTotal = 0
            reflections.forEach(reflectRating => {
                ratingTotal += reflectRating.rating
            })
            return ratingTotal / reflections.length
        }
        else {
            return "Department has no reflection thus no rating."
        }
    }

    useEffect(() => {
        dispatch(displayReflections(pdId))
    }, [dispatch])
    // console.log("ARE REFLECTIONS CONNECTED", reflections)

    return (
        <div>
            <div>
                <CreateReflection />
            </div>
            <div>
                <h1>Department Reflection Rating: {ratingCalculator()}</h1>
                {reflections?.map(reflect => (
                    <div key={reflect.id}>
                        <div>{reflect.username}</div>
                        <NavLink to={`/reflection/${reflect.id}`}>
                            <div>
                                {reflect.post}
                            </div>
                        </NavLink>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Reflection