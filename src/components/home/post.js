import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import {CaretRightOutlined} from "@ant-design/icons"
import "./home.css"


function Post({post}) {
  const navigation = useNavigate()
  const [accordian,setAccordian]=useState(false)

 const HandleClick =()=>{
  //Navigation using useNavigation and passing the data in state.
  navigation(`/postdetail/${post?.id}`,{state:post})
 }

 const HandleAccordian =()=>{
  setAccordian(!accordian)
 }
  return (
    <>
      <div className='post-title'>
         <div className="post-div" onClick={HandleClick}>{post?.id}. {post?.title}</div>
         {/* <Button onClick={HandleAccordian}>click</Button> */}
         <CaretRightOutlined onClick={HandleAccordian} rotate={accordian?90:-90}/>
      </div>
      <div>
        {accordian && <div className='post-body'>{post?.body}</div>}
      </div>
         

    </>
  )
}

export default Post