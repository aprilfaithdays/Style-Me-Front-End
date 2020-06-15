import React from 'react';
import '../Styling/OutfitPage.css'
import { useContext } from 'react';
import { CurrentUserContext } from '../Context/CurrentUser';
import { useState } from 'react';

const CommentForm = props => {
    const outfitId = props.id
    const buttonStyle = "btn btn-outline-secondary btn-sm"
    const [currentUser] = useContext(CurrentUserContext)
    const [cmt, setCmt] = useState('')

    const addComment = () => {
        // need to update my backend first
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
                            <textarea className="form-control" id="message-text" value={cmt} onChange={e => setCmt(e.target.value)}></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className={buttonStyle} data-dismiss="modal">Close</button>
                        <button type="button" className={buttonStyle} onClick={addComment}>Add Comment</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentForm