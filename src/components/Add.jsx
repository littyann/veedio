import { Modal,Button,Form } from 'react-bootstrap';
import React,{useState} from 'react';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//// statelifting-setUploadVideoServerResponse-state fuction created in the home
function Add({setUploadVideoServerResponse}) {
  // state
  const [video,setVideo]=useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for link 
  const getEmbedLink=(e)=> {
    const {value} = e.target
    if(value){
      // link ondekil
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`

      setVideo({...video,embedLink:link})

    }
    // link remove aakiya empty aakan
    else{
      setVideo({...video,embedLink:""})
    }

  }

  // console.log(video);

// submit
  const handleUpload = async ()=>{
     // video state
    const {id,caption,url,embedLink}=video
    if(!id || !caption || !url || !embedLink){
      toast.warning("Please Fill the Form Completely")
    }
    else{
      // make api call uploadVideo
      // video state
      const response = await uploadVideo(video)
      console.log(response);

      if(response.status>=200 && response.status<300){
        toast.success(`'${response.data.caption}' Video uploaded Successfully!!!`)
        // set server response
        //statelifting
        setUploadVideoServerResponse(response.data)
        // reset video -success aakumbo state value empty aakan vendi
        setVideo({
          id:"",caption:"",embedLink:""
        })

        // hide modal
        handleClose()
      }
      else{
        console.log(response);
        // alert("Please provide unique id for uploading video")

        toast.error("Cannot perfom the operation now. Please try after some time....")
      }
    }
  }
  return (
  <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn'><i className="fa-solid fa-circle-plus fs-5"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <p>Please fill the following details !!!</p>
       <Form className='border border-secondary rounded p-3'>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption"  onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Img URL"  onChange={(e)=>setVideo({...video,url:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Link"  onChange={getEmbedLink} />
      </Form.Group>
       </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
  </>
  )
}

export default Add