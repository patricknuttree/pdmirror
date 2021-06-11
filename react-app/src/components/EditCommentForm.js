import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayComments } from "../store/comment";
import { updateComment } from "../store/comment";
import "./styles/editcomments.css"


function EditCommentForm({ comment_id, setEditable, editable }) {
    const oGComment = useSelector(state => state.commentReducer[comment_id]);
    const [comment, setComment] = useState(oGComment.comment);
    
    const dispatch = useDispatch();
    
    const { reflectionId } = useParams()

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
        <div className="ecomment-container">
            <form  className="ecomment-form" onSubmit={onCommentSubmit}>
                    <textarea
                        id="ecomment-input"
                        name="comment"
                        onChange={updateCommentValue}
                        value={comment}
                        />
                <button id="ecomment-button" type="submit">Submit Edit</button>
            </form>
        </div>
    )
}

export default EditCommentForm;