import { useState } from "react";
import style from "./AddPost.module.css";

function AddPost({setPosts, selectedUser}) {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

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
        <div className={style.container}>
            <textarea id="textField" name="textField" value={message} autoComplete="off" placeholder="What's on your mind?" required onChange={(e) => setMessage(e.target.value)}></textarea>
            <div className={style.btnContainer}>
                <button type="submit" onClick={handleSubmit}>Post</button>
            </div>
            {error && <div className={style.error}>{error}</div>}
        </div>
    )
}

export default AddPost;
