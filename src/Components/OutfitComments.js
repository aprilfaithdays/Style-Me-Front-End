import React from 'react';
import Moment from 'react-moment';
import '../Styling/OutfitPage.css'
import { useContext } from 'react';
import { CurrentUserContext } from '../Context/CurrentUser';

const OutfitComments = props => {
    const [currentUser] = useContext(CurrentUserContext)
    
    const renderComments = () => {
        const list = props.comments
        list.sort((a,b) => b.id - a.id)
        return list.map(comment => renderComment(comment))
    }

    const deleteComment = id => {
        fetch(`http://localhost:3000/comments/${id}`, {
            method: 'DELETE'
        })
        props.removeComment(id);
    }

    const renderComment = comment =>{
        return (
            <div>
                <div key={comment.id} className="comments">
                    <img src={comment.user.img_url} alt={comment.user.name} className="comment-img"/>
                    <div className="cmt-text">
                        <b>{comment.user.name}</b>
                        <em className="cmt-created">
                            <Moment fromNow>{comment.created_at}</Moment>
                        </em>
                        <div>
                            {comment.text}
                            {comment.user_id === currentUser.id && <button 
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => deleteComment(comment.id)}
                            >Delete</button>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <b>Comments</b>
            {renderComments()}
        </div>
    )
}

export default OutfitComments