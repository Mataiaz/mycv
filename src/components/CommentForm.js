import { useState } from "react"
import { useCommentsContext } from '../hooks/useCommentsContext'


const CommentForm = () => {
    const { dispatch } = useCommentsContext()
  
    const [text, setText] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      const comment = {text}
      
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
  
      if (!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
      }
      if (response.ok) {
        setText('')
        setError(null)
        setEmptyFields([])
        console.log('new comment added', json)
        dispatch({type: 'CREATE_COMMENT', payload: json})
      }
  
    }
  
    return (
      <form className="create" onSubmit={handleSubmit}> 
        <h3>Add a comment!</h3>
  
        <label>Comment text:</label>
        <input 
          type="text" 
          onChange={(e) => setText(e.target.value)} 
          value={text}
          className={emptyFields.includes('text') ? 'error' : ''}
        />
  
        <button>Add Comment</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
  }

export default CommentForm