import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../store/comment";
import { displayComments } from "../store/comment"
import "./styles/createcomment.css"

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
        <div className="ccomment-container-outer">
            <div className="ccomment-container-inner">
                <div className="ccomment-title">Write a Comment</div>
                <form className="ccomment-form" onSubmit={onCommentSubmit}>
                    <div id="ccomment-input-and-labels" className="ccomment-fields-position" className="ccomment-field-style">
                        <label className="ccomment-labels">Comment</label>
                        <textarea id="comment-input"
                        name="comment"
                        onChange={updateComment}
                        value={comment}
                        />
                        <button className="ccomment-fields-position" id="ccomment-button-style" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateComment