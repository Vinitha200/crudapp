
import React from 'react'
import Header from './header/header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './home/Home'
import CreatePost from './CreatePost/CreatePost'
import PostDetail from './postDetail/postDetail'
import EditPost from './editpost/EditPost'



export default function MainPage() {
  return (
    <div>
    <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
        <Route path="/postdetail/:id" element={<PostDetail/>}/>
        <Route path="/postdetail/editpage/:id" element={<EditPost/>}/>
         
        {/* Interview */}
        {/* <Route path="/interview" element={<Main_interview/>}/>  */}
        {/* <Route path="/interview/:id" element={<Question />}/> */}
       </Routes>
    </BrowserRouter>
    </div>
  )
}
