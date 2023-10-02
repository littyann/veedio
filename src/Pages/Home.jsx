import React from 'react';
import Add from '../components/Add';
import View from '../components/View';
import Category from '../components/Category'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="add-videos">
        <Add/>
      </div>
      <Link to={'/watch-history'}className='fs-5' style={{textDecoration:"none",color:"white"}}>Watch History</Link>
    </div>
    <div className="container mt-5 d-flex justify-content-between">
      <div className="all-videos">
        <h2>All Videos</h2>
        <View/>
      </div>
      <div className="category">
        <Category/>
      </div>
    </div>
    </>
  )
}

export default Home