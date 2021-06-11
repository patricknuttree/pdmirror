import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { displayComments } from "../store/comment";
import CreateComment from "./CreateComment";
import SingleComment from "./SingleComment";
import AuthNavBar from './AuthNavBar'
import "./styles/comment.css"

const Comment = ({ reflectionId }) => {
    const dispatch = useDispatch();
    const reflectionComments = useSelector(state => {
        return state.commentReducer.list?.map(commentId => state.commentReducer[commentId])
    })

    useEffect(() => {
        dispatch(displayComments(reflectionId))
    }, [dispatch])

    return (
        <div className="comment-container-outer">
            <AuthNavBar />
            <div class="comment-container-inner">
                <div className="comment-title">Comments</div>
                <CreateComment />
                <div>
                    {reflectionComments?.map((comment, index) => (
                        <SingleComment key={index} comment={comment} reflectionId={reflectionId} />
                        ))}

                </div>
            </div>
        </div>
    )

}

export default Comment