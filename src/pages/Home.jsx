import React from 'react'
import './Home.css'
import Hero from "../components/Hero"
import Abstract from '../components/Abstract'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Abstract></Abstract>
      <Products></Products>
      <Footer></Footer>
    </>
  )
}

export default Home