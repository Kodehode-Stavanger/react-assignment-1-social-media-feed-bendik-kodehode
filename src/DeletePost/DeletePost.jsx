import style from "./DeletePost.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from "react";
import { PostContext, UserContext } from "../App";

function DeletePost({user, index}) {

    const [posts, setPosts] = useContext(PostContext); 
    const [selectedUser, setSelectedUser] = useContext(UserContext);

    const handlePostDelete = () => {
        setPosts(p => p.filter((_, i) => i !== index))
    }

    if (user === selectedUser) {
        return <FontAwesomeIcon icon={faTrashAlt} className={style.faTrashAlt} onClick={handlePostDelete}/> 
    } else {
        return null;
    }
}

export default DeletePost;