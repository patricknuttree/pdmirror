import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import Comment from "./Comment"
import { displayComments } from "../store/comment";

const SingleReflection = () => {
    const dispatch = useDispatch();
    const { reflectionId } = useParams()
    
    


    return (
        <div>
            <Comment reflectionId={reflectionId} />
        </div>
    )
}

export default SingleReflection