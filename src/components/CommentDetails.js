const CommentDetails = ({ comment }) => {
    return (
        <div className="comment-details">
            <h4>{comment.text}</h4>
            <p>{comment.createAt}</p>
        </div>
    )
}

export default CommentDetails