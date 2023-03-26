import React from 'react';
import Comment from './Comment';

const CommentList = ()=>{
    return(
        <div className='commentList'>
            <Comment name = {'세종대왕'} comment = {'안녕!'}/>
            <Comment name = {'Biden'} comment = {'goodbye!'}/>
            <Comment name = {'강호동'} comment = {'리액트 공부하나'}/>
        </div>
    )
}

export default CommentList