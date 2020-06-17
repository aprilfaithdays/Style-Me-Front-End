import React from 'react';
import '../Styling/OutfitPage.css'
import { useContext } from 'react';
import { CurrentUserContext } from '../Context/CurrentUser';
import { useState } from 'react';

const CommentForm = props => {
    const outfit_id = props.id
    const buttonStyle = "btn btn-outline-secondary btn-sm"
    const [currentUser] = useContext(CurrentUserContext)
    const [text, setText] = useState('')
    const [addCmt, setAddCmt] = useState(false)

    const addComment = e => {
        e.preventDefault()
        const user_id = parseInt(currentUser.id, 0)
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ outfit_id, user_id, text })
        })
        .then(res => res.json())
        .then(res => {
            props.postComment(res);
            setText('');
            setAddCmt(false)
        })
    }

    const comment = () => (
        <div>
            <form onSubmit={e => addComment(e)}>
                <textarea className="cmt-input" type="text" value={text} onChange={e => setText(e.target.value)}/>
                <div className="post-btn">
                    <button className={buttonStyle} type="submit">Post</button>
                </div>
            </form>
        </div>
    )

    const cmtBtn = () => (
        <div className="add-comment">
            <button className={buttonStyle} onClick={() => setAddCmt(true)}>Add Comment</button>
        </div>
    )

    return(
        <div>
            {addCmt ? comment() : cmtBtn() }
        </div>
    )
}

export default CommentForm