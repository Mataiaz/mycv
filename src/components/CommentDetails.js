const CommentDetails = ({ comment }) => {
    return (
        <div className="comment-details">
            <h4>{comment.text}</h4>
            <p>{comment.createdAt}</p>
        </div>
    )
}

export default CommentDetails