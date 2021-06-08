import React from "react"
import { useParams } from "react-router"
import Comment from "./Comment"

const SingleReflection = () => {
    const { reflectionId } = useParams()

    return (
        <div>
            <Comment reflectionId={reflectionId} />
        </div>
    )
}

export default SingleReflection