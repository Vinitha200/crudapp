import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "./postdetail.css"
import { Button } from 'antd'
import BackButon from '../backbutton/BackButton'

function PostDetail() {
  const location = useLocation()
  const navigation = useNavigate()
  //To fetch the state data tht is passed while navigation we will use useLoaction 
  const { state } = location

  const HandleUpdate = () => {
    navigation(`/postdetail/editpage/${state?.id}`, { state: state })
  }

  const HandleDelete = () => {
    var result = window.confirm("Want to delete?");
    if (result) {
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
      alert("Post deleted successfully!");
      navigation("/")
    }
  }
  console.log("state", state)

  return (
    <>
     <div style={{display:"flex"}}><BackButon url={"/"}/></div> 
      <div className='postdetail-container'>
        <h2 className='state-title'>{state?.title}</h2>
        <div className='state-body'>{state?.body}</div>
      </div>
      <div className='button-container'>
        <Button className='delete-post' onClick={HandleDelete}>Delete</Button>
        <Button className='edit-post' onClick={HandleUpdate}>Edit</Button>
      </div>
    </>

  )
}

export default PostDetail