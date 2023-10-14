import axios from 'axios';
// function
export const commonAPI = async(httpMethod,url,reqBody)=>{
// configuration & the Key will be fixed
    let reqConfig ={
        method:httpMethod,
        url,
        data:reqBody,
        headers:{
            "Content-Type":"application/json"
        }
    }

    // axiox te request configation il varan
    return await axios(reqConfig).then(
        (result)=>{
            return result
        }
    ).catch((err)=>{
        return err
    }
    )
}