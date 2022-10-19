import {BrowserRouter as Router , Route ,Routes } from "react-router-dom";
import React from 'react'
import QueriesHome from "./QueriesHome";

function QueriesApp() {
  return (
    <div>
        <Router>
            <Routes path='/qh' element={<QueriesHome />} />
        </Router>
    </div>
  )
}

export default QueriesApp