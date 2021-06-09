import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../store/comment";
import { displayComments } from "../store/comment"

function CreateComment(){
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    const { reflectionId } = useParams()

    const onCommentSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            comment,
            reflection_id:reflectionId
        }
        await dispatch(createComment(payload))
        dispatch(displayComments(reflectionId))

        setComment("")
    };

    const updateComment = (e) => {
        setComment(e.target.value);
    };

    return (
        <div>
            <div>Write a Comment</div>
            <form onSubmit={onCommentSubmit}>
                <div>
                    <label>Comment</label>
                    <textarea id="comment-input"
                    name="comment"
                    onChange={updateComment}
                    value={comment}
                    />
                    <button type="submit">Submit Comment</button>
                </div>
            </form>
        </div>
    )
}

export default CreateComment