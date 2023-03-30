import React from 'react';
import Comment from './Comment';
import userCommentJSON from '../userComments.json';

const user_Comment = Object.values(userCommentJSON);


const CommentList = ()=>{
    return(
        <div className='commentList'>
            {user_Comment.map(v=>{
                return (
                    <Comment name = {v.name} comment = {v.comment}/>
                )
            })}
        </div>
    )
}

export default CommentList