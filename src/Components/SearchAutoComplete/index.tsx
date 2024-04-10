import {useEffect, useState} from "react";
import Suggestions from "./Suggestions.tsx";

export default function SearchAutoComplete(){
    const [loading,setLoading]=useState(false)
    const [users,setUsers]=useState([])
    const [error,setError]=useState(null)
    const [searchParams,setSearchParams]=useState("")
    const [show,setShow]=useState(false)
    const [filteredUsers,setFilteredUsers]=useState([])
    function handleChange(event){
      const query=event.target.value.toLowerCase()
      setSearchParams(query)
      if (query.length >1){
       const filterData=users && users.length>0 ?
             users.filter((item)=> item.toLowerCase().indexOf(query)>-1)
           :[]
          setFilteredUsers(filterData)
          setShow(true)
      }
      else {
          setShow(false)
      }

    }
    function handleClick(event) {
        setShow(false)
        setSearchParams(event.target.innerText)
        setFilteredUsers([])
    }
   async  function fetchList() {
       try {
           setLoading(true)
           const response=await fetch("https://dummyjson.com/users")
           const data=await response.json()
           if (data && data.users && data.users.length){
               setUsers(data.users.map((userItem)=> userItem.firstName))
               setLoading(false)
           }
       }
       catch (e) {
           console.log(e.message)
           setError(e.message)
           setLoading(false)
       }
    }
    useEffect(()=>{
        fetchList()
    },[])

    return (
        <div className="search-auto-complete-container">
            {loading ? <h1>Loading...</h1> :
                <input type="text" placeholder="Search users here"  value={searchParams} onChange={handleChange}
                />
            }
            {show && <Suggestions data={filteredUsers} handleClick={handleClick}/>}
        </div>
    )
}