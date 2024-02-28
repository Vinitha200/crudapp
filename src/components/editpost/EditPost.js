import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import "./editPost.css"

function EditPost() {
    const location = useLocation()
    const navigation = useNavigate()
    const { state } = location
    const { id } = useParams()
    const [newTitle, setNewTitle] = useState("")
    const [newContent, setNewContent] = useState("")

    
    const HandleEdit = (e) => {
        e.preventDefault();
        const response = fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                title: newTitle,
                body: newContent,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        if (response) {
            alert("Data Updated")
            navigation("/")
        }
    }

    //Initially it should have data which we want to edit 
    useEffect(() => {
        setNewTitle(state?.title)
        setNewContent(state?.body)
    }, [state?.title, state?.body])

    return (
        <>
            <div>
                <h2 style={{ display: "flex" ,marginLeft:"20px" }}>Edit Post</h2>
                <div className='createpost-container'>
                    <form
                        className='create-form'
                        onSubmit={HandleEdit}>
                        <div className='create-main'>
                            <label className="create-title" htmlFor='Title'>Title: </label><br />
                            <textarea
                                required
                                type='text'
                                id='title'
                                name='title'
                                value={newTitle}
                                rows="6" cols="70"
                                onChange={(e) => setNewTitle(e.target.value)}
                            /></div>
                        <div className='create-main'>
                            <label className="create-title" htmlFor='Content'>Content: </label><br />
                            <textarea
                                required
                                type='text'
                                id='Content'
                                name='Content'
                                rows="6" cols="70"
                                value={newContent}
                                onChange={(e) => setNewContent(e.target.value)}
                            />
                        </div>
                        <button type='submit'>Edit</button>
                    </form>
                </div>


            </div>
        </>

    )
}

export default EditPost