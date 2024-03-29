import { useCommentsContext } from "../hooks/useCommentsContext"
import { useAuthContext } from "../hooks/useAuthContext"

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CommentDetails = ({ comment }) => {
    const { dispatch } = useCommentsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch('/api/comments/' + comment._id, {
            method: 'DELETE',
            header: {
                'Authorization': `Bearer ${user.toke}`
            }
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_COMMENT', payload: json})
        }
    }

    return (
        <div className="comment-details">
            <h4>{comment.text}</h4>
            <p>{formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default CommentDetails