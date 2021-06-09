import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayComments } from "../store/comment";
import { updateComment } from "../store/comment";


function EditCommentForm({ comment_id, setEditable, editable }) {
    const oGComment = useSelector(state => state.commentReducer[comment_id]);
    const [comment, setComment] = useState(oGComment.comment);
    
    const dispatch = useDispatch();
    
    const { reflectionId } = useParams()
    console.log("OGCOMMENT", reflectionId)

    const onCommentSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            comment,
            reflection_id:reflectionId,
            comment_id
        }

        await dispatch(updateComment(payload))
        dispatch(displayComments(reflectionId))

        setComment("")
        setEditable(!editable)
    };

    const updateCommentValue = (e) => {
        setComment(e.target?.value)
    }

    return (
        <form onSubmit={onCommentSubmit}>
            <div>
                <label>Comment</label>
                <textarea
                    name="comment"
                    onChange={updateCommentValue}
                    value={comment}
                />
            </div>
            <button type="submit">Edit Comment</button>
        </form>
    )
}

export default EditCommentForm;