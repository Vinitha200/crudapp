import React, { useState } from 'react'
import "./CreatePost.css"
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import BackButon from '../backbutton/BackButton';

function CreatePost() {
  let navigation = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, content)
    const response = fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title:title,
        body: content,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    
    if(response){
      alert("Data Saved ")
      navigation("/")
    }
  }

  return (
    <>
    <div style={{display:"flex"}}>
      <BackButon url={"/"}/>
      <span className='create-span'>Create Post</span>
    </div>
    
      <div className='createpost-container'>
        <form
          className='create-form'
          onSubmit={handleSubmit}>
          <div className='create-main'>
            <label className="create-title" htmlFor='Title'>Title: </label><br />
            <textarea
              required
              type='text'
              id='title'
              name='title'
              value={title}
              rows="6" cols="70"
              onChange={(e) => setTitle(e.target.value)}
            /></div>
          <div className='create-main'>
            <label className="create-content" htmlFor='Content'>Content: </label><br />
            <textarea
              required
              type='text'
              id='Content'
              name='Content'
              value={content}
              rows="6" cols="70"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type='submit'>Create</button>
        </form>
      </div>
    </>
  )
}

export default CreatePost