import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { displayComments } from "../store/comment";

const Comment = ({ reflectionId }) => {
    const dispatch = useDispatch();
    const reflectionComments = useSelector(state => {
        return state.commentReducer.list?.map(commentId => state.commentReducer[commentId])
    })
    console.log("REFLECTION COMMENTS", reflectionComments)
    useEffect(() => {
        dispatch(displayComments(reflectionId))
    }, [dispatch])

    return (
        <div>
            <div>{reflectionComments[0]?.post}</div>
            <div>
                {reflectionComments?.map(comment => (
                    <div>
                        <div>{comment.username}</div>
                        <div>{comment.comment}</div>
                    </div>
                ))}

            </div>
        </div>
    )

}

export default Comment