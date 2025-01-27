import React from 'react';

const CommentBox = () => {
    return (
        <div className="commentbox">
            <div className="input-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Add a comment" 
                aria-label="Add a comment" 
                aria-describedby="basic-addon2"
                />
            </div>
            <button type="button" class="btn btn-primary">Cancel</button>
            <button type="button" class="btn btn-primary">Comment</button>
      </div>
      
    );

}

export default CommentBox;