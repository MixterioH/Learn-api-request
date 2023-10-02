import React from 'react'
import "./NewPost.css"
import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault()

    const post = { title, body, userId: 1 }

    await blogFetch.post("/posts", {
      body: post
    })

    navigate("/")
  }

  return (
    <div className='newpost'>
      <form onSubmit={(e) => createPost(e)}>
        <label htmlFor="title">Titulo:</label>
        <input 
          id='title'
          type='text'
          name='title'
          placeholder='Digite Um título'
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Conteúdo:</label>
        <textarea   
          id='content'
          name='content'
          placeholder='Digite seu Conteúdo'
          onChange={(e) => setBody(e.target.value)}
          />

          <button type='submit' className='btn'>Enviar</button>
      </form>
    </div>
  )
}

export default NewPost