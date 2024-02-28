import React, { useEffect, useState } from 'react'
import Post from './post'
import useFetch from '../hook/customFetchHook'
import { Input } from 'antd'
import { SortAscendingOutlined,SortDescendingOutlined } from '@ant-design/icons'

function Home() {
  const { data: postData, error, isLoading } = useFetch("https://jsonplaceholder.typicode.com/posts")
//   const [postData,setPostData] = useState([])
  
  const [filter, setFilter] = useState([])
  const [sort, setSort] = useState([])
  const [searchTerm,setSearchTerm]=useState('')

//   const getAll = async ()=>{
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

  const handleSearch = (e) => {
    const searchTerm = e?.target?.value?.trim()
    setSearchTerm(searchTerm)
    console.log(searchTerm)
    if (searchTerm.length > 0) {

      let filterData = postData?.filter((entry) => {
        return Object.values(entry).some(
          (val) => {
            if (val === null || val === undefined) {
              return false
            }
            else {
              return val.toString().toLowerCase().includes(searchTerm)
            }
          }
        )
      });
      console.log("filterData", filterData)
      
      setFilter(filterData)
    }
    else {
      setFilter([])
    }

  }

  const HandleSortdesc = () => {
    const sortData = [...postData].sort((a, b) => b["title"].localeCompare(a["title"]))
    console.log("filterData1", sortData)
    setSort(sortData)
  }

  const HandleSortasc = () => {
    const sortData = [...postData].sort((a, b) => a["title"].localeCompare(b["title"]))
    console.log("filterData1", sortData)
    setSort(sortData)
  }

  console.log("filterData", sort)
  return (
    <>
      {isLoading && <h3>Loading</h3>}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className='search-div'>
          <Input
            placeholder='search here'
            onChange={(e) => handleSearch(e)}
            enter
            style={{ width: "30%" }}
          />
          <div>
         
          <button className ="sort" onClick={() => HandleSortasc()}>  <SortAscendingOutlined/> </button>
            <button className ="sort" onClick={() => HandleSortdesc()}>  <SortDescendingOutlined/> </button>
          </div>

        </div>


        <div>
          {(searchTerm.length > 0 ? filter : (sort.length > 0 ? sort : postData)).map((item) => (
            <Post post={item} key={item?.id}></Post>
          ))}
        </div>
      </div>

    </>

  )
}

export default Home