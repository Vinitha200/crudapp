import React,{useEffect, useState} from 'react'

function useFetch(url,method) {

  const [data, setData] = useState([])
  const [error, setError] = useState([])
  const [isLoading,setIsLoading]=useState(false)

  const APICall = async ()=>{
    try{
        setIsLoading(true)
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false)
    }
    catch(err){
        setError(err)
        setIsLoading(false)
    }
  }

  
 useEffect(()=>{
    APICall()
 },[url]) 

 return {data,error,isLoading}
}

export default useFetch;
// const getAll = async ()=>{
//     try{
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res=>res.json())
//       .then(data=> setPostData(data))
//     }
//     catch(err){
//       console.log("error", err)
//     }

//   }

//   useEffect(()=>{
//     getAll()
//   },[]) 