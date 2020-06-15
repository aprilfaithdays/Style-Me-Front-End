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

    const addComment = () => {
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
            console.log(res);
            setText('')
        })
    }

    return(
        <div>
            <button type="button" className={buttonStyle} data-toggle="modal" data-target="#commentOutfit" data-whatever="@mdo">Add Comment</button>
            <div className="modal fade" id="commentOutfit" tabIndex="-1" role="dialog" aria-labelledby="commentOutfitLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="commentOutfitLabel">Add Comment</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="form-group">
                            <textarea className="form-control" id="message-text" value={text} onChange={e => setText(e.target.value)}></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className={buttonStyle} data-dismiss="modal" onClick={addComment}>Post</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentForm