import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts dispatch={props.dispatch} newPostText={props.newPostText} posts={props.profilePage.posts} />
        </div>
    )
}

export default Profile;