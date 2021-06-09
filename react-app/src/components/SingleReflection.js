import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import Comment from "./Comment"

const SingleReflection = () => {
    const { reflectionId } = useParams()
    const reflection = useSelector(state => state.reflectionReducer[reflectionId])


    return (
        <div>
            <div></div>
            <div>
                <Comment reflectionId={reflectionId} />
            </div>
        </div>
    )
}

export default SingleReflection