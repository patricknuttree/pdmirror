import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createReflection} from "../../store/reflection";
import { displayReflections } from "../../store/reflection";
import "./createreflection.css"

function CreateReflection() {
    const [post, setPost] = useState("");
    const [rating, setRating] = useState(1);
    const dispatch = useDispatch();

    const { pdId } = useParams()

    const onReflectionSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            post,
            rating,
            pd_id:pdId
        }
        await dispatch(createReflection(payload))
        dispatch(displayReflections(pdId))

        setRating(1)
        setPost("")
    };
    
    const updatePost = (e) => {
        setPost(e.target.value);
    };

    const updateRating = (e) => {
        setRating(e.target.value);
    };

    return (
        <div className="creflect-container-outer">
            <div className="creflect-container-inner">
                <div className="creflect-title">Write a Reflection: </div>
                <form className="creflect-form" onSubmit={onReflectionSubmit}>
                        <div id="creflect-input-and-label" className="creflect-fields-position" className="creflect-field-style">
                            <label className="creflect-labels">Reflection:</label>
                            <textarea id="post-input"
                                name="post"
                                onChange={updatePost}
                                value={post}
                                />
                        </div>
                        <div className="creflect-fields-position" className="creflect-field-style">
                            <label className="creflect-labels">Rating:</label>
                            <input id="rating-input"
                                type="number"
                                min="1"
                                max="5"
                                step="1"
                                name="rating"
                                onChange={updateRating}
                                value={rating}
                                />
                        </div>
                        <button className="creflect-fields-position" id="creflect-button-style" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )

}

export default CreateReflection