import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
import blogFetch from "../axios/config"

const Home = () => {
  const [post, setPost] = useState([])

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts"
        )

      const data = response.data

      setPost(data)
    } catch (error) {
      console.log("Erro na requisição")
    }
  }

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <>

    <div className="containerHome">
      <h1>Ultimos Posts</h1>
      {post.length === 0 ? <p>Carregando</p> : (
      post.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">Ler Mais</Link>
          </div>
        )
      )
    )}</div>
    </>
  )
}

export default Home