import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost} from './postSlice'

const AddPostForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const isDisable = Boolean(title) && Boolean(content)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
        addPost(title, content)
    )
  }  
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} />
            <button disabled={!isDisable}> Submit </button>
        </form>
    </div>
  )
}

export default AddPostForm