import { useState } from "react"

const CommentForm = () => {
    const [text, setText] = useState('')
    const [error, setError] = useState(null)
  
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
        console.log("SSSSSSSSSSSSSSSS")
        setError(json.error)
      }
      if (response.ok) {
        setError(null)
        setText('')
        console.log('new comment added:', json)
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
        />
  
        <button>Add Comment</button>
        {error && <div className="error">{error}</div>}
      </form>
    )
  }

export default CommentForm