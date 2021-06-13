import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
// import { useParams } from "react-router"
import { displayReflections } from "../../store/reflection"
// import { Comment } from "../Comment"
import CreateReflection from "./CreateReflection"
import "./reflection.css"

const Reflection = ({ pdId }) => {
    const dispatch = useDispatch();
    const reflections = useSelector(state => {
        return state.reflectionReducer.list?.map(reflectionId => state.reflectionReducer[reflectionId])
    })

    const ratingCalculator = () => {
        if (reflections.length){
            let ratingTotal = 0
            reflections.forEach(reflectRating => {
                ratingTotal += reflectRating.rating
            })
            return (ratingTotal / reflections.length).toFixed(2)
        }
        else {
            return "Department has no reflection thus no rating."
        }
    }

    useEffect(() => {
        dispatch(displayReflections(pdId))
    }, [dispatch])

    return (
        <div className="reflect-container-outer">
            <div className="reflect-rating-container-outer">
                <div className="reflect-rating-container">
                    <h1 className="reflect-rating">Department Reflection Rating: {ratingCalculator()}</h1>
                </div>
            </div>
            <div className="reflect-create-container">
                <CreateReflection />
            </div>
            <h3>Reflections:</h3>
            <div className="reflections-container">
                {reflections?.map(reflect => (
                    <div key={reflect.id} className="reflection-containers">
                        <div className="reflection-username">{reflect.username}:</div>
                        <NavLink className="reflection-links" className="reflect-link" to={`/reflection/${reflect.id}`}>
                            <p className="reflection-links">
                                {reflect.post}
                            </p>
                        </NavLink>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Reflection