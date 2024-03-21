import React, { useState, useContext } from "react";
import Feed from "./Feed/Feed";
import AddPost from "./AddPost/AddPost";
import defaultPosts from "./assets/posts";
import Navbar from "./Navbar/Navbar";

export const PostContext = React.createContext();
export const UserContext = React.createContext();

function App() {
    const [posts, setPosts] = useState(defaultPosts);
    const [selectedUser, setSelectedUser] = useState("");
    const users = (defaultPosts.map(post => post.username));

    const handleUserSelect = user => setSelectedUser(user);

    return (
    <>
    <header>
        <Navbar users={users} handleUserSelect={handleUserSelect}/>
    </header>
    <main>
        <UserContext.Provider value={[selectedUser, setSelectedUser]}>
        <PostContext.Provider value={[posts, setPosts]}>
            <AddPost/>
            <Feed posts={posts}/>
        </PostContext.Provider>
        </UserContext.Provider>
    </main>
    </>
    )
}


export default App;
