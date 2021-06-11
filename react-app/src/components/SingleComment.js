import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentThunk, displayComments } from "../store/comment";
import EditCommentForm from './EditCommentForm';
import "./styles/singlecomment.css"


function SingleComment({ comment, reflectionId }){
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const user = useSelector(state => state.session.user)

    const editButton = (e) => {
        e.preventDefault()
        setEditable(!editable)
    }

    const deleteButton = (e) => {
        e.preventDefault()
        const payload = {
            user_id:user.id,
            reflection_id: reflectionId,
            comment_id: comment.id
        }
        dispatch(deleteCommentThunk(payload))
        dispatch(displayComments(reflectionId))
    }

    return (
        <div className="scomment-container-outer">
            <div className="scomment-container-inner" key={comment?.id}>
                <div className="scomment-username">{comment?.username}</div>
                <div className="scomment-comment">{comment?.comment}</div>
                <div className="scomment-buttons-container">
                    {user.id === comment?.user_id && <button className="scomment-button" id={comment?.id} onClick={editButton}>Edit</button>}
                    {user.id === comment?.user_id && <button id="scomment-delete-button" className="scomment-button" onClick={deleteButton}>click x2 to Delete</button>}
                    {editable && <EditCommentForm comment_id={comment?.id} editable={editable} setEditable={setEditable} />}
                    </div>
            </div>
        </div>
    )
}

export default SingleComment