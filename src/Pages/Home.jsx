import React, { useState } from 'react';
import Add from '../components/Add';
import View from '../components/View';
import Category from '../components/Category'
import { Link } from 'react-router-dom';

function Home() {
  // statelifting-view & add connection aakan
  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({}) 
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="add-videos">
        <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
      </div>
      <Link to={'/watch-history'}className='fs-5' style={{textDecoration:"none",color:"white"}}>Watch History</Link>
    </div>
    <div className="container-fluid w-100 mt-5 d-flex justify-content-between">
      <div className="all-videos col-lg-9">
        <h2>All Videos</h2>
        <View uploadVideoServerResponse={uploadVideoServerResponse}/>
      </div>
      <div className="category col-lg-3">
        <Category/>
      </div>
    </div>
    </>
  )
}

export default Home