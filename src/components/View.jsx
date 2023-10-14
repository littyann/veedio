import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard'
import { Row,Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI';

//  // statelifting -uploadVideoServerResponse-state is created in the home
function View({uploadVideoServerResponse}) {
  const [allVideos,setAllVideos] = useState([])

  const[deleteVideoStatus,setdeleteVideoStatus] = useState(false)
  
  const getAllUploadedVideos = async ()=>{
    // make api call getAllVideos
    const {data} = await getAllVideos()

  //  console.log(data);

    setAllVideos(data);
  }
// side effect ondele fuction veliyil athinr access cheyan pattath ollu
  useEffect(()=>{
    getAllUploadedVideos()
    setdeleteVideoStatus(false)
    // first render kittan empty array - dependency

    // statelifting
    // props value change cheyumbo invoke aakum athond 
  },[uploadVideoServerResponse,deleteVideoStatus]
  )

  // console.log(allVideos);

  return (
    <>
      <Row>
        {
          allVideos.length>0?
          allVideos.map(video=>(
            <Col sm={12} md={6} lg={4} xl={3} >
              {/* displaydata key il video ellam eduth vech for adding it in the vidiocard(destructuring) */}
              <VideoCard displayData={video} setdeleteVideoStatus={setdeleteVideoStatus}/>
            </Col>
          ))

          :
          <p className='fw-bolder fs-5 text-danger'>Nothing to display</p>
        }
      </Row>
    
    </>
  )
}

export default View