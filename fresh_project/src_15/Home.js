import React from 'react'
import "./Home.css"; //external

const Home = () => {
    const button = { //inline
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        background: '#1890ff',
        color: '#fff',
        fontSize: '14px',
        cursor: 'pointer',
        transition: '.3s background',
        '&:hover': {
          background: '#40a9ff'
        }
    };
  return (
    <header>
        <h1 style={{color: "red"}}>Hello Style!</h1>
        <h1 className='home'>Home</h1>
        <button style={button}>Button</button>
    </header>
  )
}

export default Home;