import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommentThunk } from "../store/comment";
import EditCommentForm from './EditCommentForm';


function SingleComment({ comment, reflectionId }){
    // console.log("COMMENT IN SINGLECOMMENT", comment)
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
    }

    return (
        <div key={comment?.id}>
            <div>{comment?.user_name}</div>
            <div>{comment?.comment}</div>
            <div>
                {user.id === comment?.user_id && <button id={comment?.id} onClick={editButton}>Edit</button>}
                {user.id === comment?.user_id && <button onClick={deleteButton}>Delete</button>}
                {editable && <EditCommentForm comment_id={comment?.id} editable={editable} setEditable={setEditable} />}
            </div>
        </div>
    )
}

export default SingleComment