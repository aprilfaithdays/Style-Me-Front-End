import React from 'react';
import Moment from 'react-moment';
import '../Styling/OutfitPage.css'
import { useContext } from 'react';
import { CurrentUserContext } from '../Context/CurrentUser';

const OutfitComments = props => {
    const [currentUser] = useContext(CurrentUserContext)
    
    const renderComments = () => {
        const list = props.comments
        return list.map(comment => renderComment(comment))
    }

    const renderComment = comment =>{
        return (
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
                            onClick={() => props.deleteComment(comment.id)}
                        >Delete</button>}
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            Map out the comments~
            {renderComments()}
        </div>
    )
}

export default OutfitComments