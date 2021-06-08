import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createReflection} from "../../store/reflection";
import { displayReflections } from "../../store/reflection";

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
        <div>
            <div>Write a Reflection</div>
            <form onSubmit={onReflectionSubmit}>
                <div>
                    <label>Reflection</label>
                    <textarea id="post-input"
                        name="post"
                        onChange={updatePost}
                        value={post}
                        />
                    <input id="rating-input"
                        type="number"
                        min="1"
                        max="5"
                        step="1"
                        name="rating"
                        onChange={updateRating}
                        value={rating}
                        />
                    <button type="submit">Submit Reflection</button>
                </div>
            </form>
        </div>
    )

}

export default CreateReflection