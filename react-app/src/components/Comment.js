import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { displayComments } from "../store/comment";
import CreateComment from "./CreateComment";
import SingleComment from "./SingleComment";

const Comment = ({ reflectionId }) => {
    const dispatch = useDispatch();
    const reflectionComments = useSelector(state => {
        return state.commentReducer.list?.map(commentId => state.commentReducer[commentId])
    })

    useEffect(() => {
        dispatch(displayComments(reflectionId))
    }, [dispatch])

    return (
        <div>
            <h2>Comments</h2>
            <CreateComment />
            <div>
                {reflectionComments?.map((comment, index) => (
                    <SingleComment key={index} comment={comment} reflectionId={reflectionId} />
                ))}

            </div>
        </div>
    )

}

export default Comment