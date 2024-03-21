import style from "./AddPost.module.css";
import React, { useState, useContext } from "react";
import { PostContext, UserContext } from "../App";

function AddPost() {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [posts, setPosts] = useContext(PostContext);
    const [selectedUser, setSelectedUser] = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedUser.length !== 0) {
            const newPost = {
                username: selectedUser,
                content: message,
                timestamp: new Date().toISOString().replace(/\.\d{3}Z$/, "Z"), // Removes milliseconds.
                likes: 1
            };
            setPosts(prevPosts => [newPost, ...prevPosts]);
            setError("");
            setMessage("");
        } else {
            setError("Please select a user.");
        }
    };

    return (
        <form className={style.container} onSubmit={handleSubmit}>
            <textarea id="textField" name="textField" value={message} autoComplete="off" placeholder="What's on your mind?" onChange={(e) => setMessage(e.target.value)} required></textarea>
            <div className={style.btnContainer}>
                <button type="submit">Post</button>
            </div>
            {error && <div className={style.error}>{error}</div>}
        </form>
    )
}

export default AddPost;
