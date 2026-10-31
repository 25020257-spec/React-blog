import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Profile() {
  return <h2>Thông tin của tôi</h2>
}

function Photo() {
  return <img src={heroImg} alt="RonaldRonaldoo" />
}
function App() {


  return (
    <>
      <Photo />
      <h1>hello world</h1>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
      <h1>code step by step</h1>
    </>
  )
}

export default App
