import React from 'react';
import '../Styling/OutfitPage.css'

const OutfitComments = props => {

    
    const renderComments = () => {
        const list = props.comments
        return list.map(comment => renderComment(comment))
    }

    const renderComment = comment =>{
        return (
            <div key={comment.id}>
                {comment.text}
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