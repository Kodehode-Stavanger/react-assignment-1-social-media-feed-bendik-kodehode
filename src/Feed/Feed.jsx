
import Post from "../Post/Post";
import style from "./Feed.module.css"

function Feed({posts}) {
    return (
        <ul className={style.list}>
            {posts.map((e, i) => <Post post={e} key={i} index={i}/>
            )}
        </ul>
        )
}

export default Feed;
