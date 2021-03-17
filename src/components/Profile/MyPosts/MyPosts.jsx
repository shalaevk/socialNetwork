import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {AddPostAc, ChangePostTextAC} from "../../../redux/state";

const MyPosts = (props) => {
console.log(props.newPostText)

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let myRef = React.createRef();


    const addPost = () => {
        props.dispatch(AddPostAc())
        props.dispatch(ChangePostTextAC(""))
    }
    const onPostChange = () => {
        let text = myRef.current.value
        props.dispatch(ChangePostTextAC(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>


                <div>
                    <textarea onChange={onPostChange}  ref={myRef}
                              value={props.newPostText}  />
                </div>


                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;