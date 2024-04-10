import {useEffect, useState} from "react";
import "./style.css"
export default function ScrollIndicator({url})
{
    const [data,setData]=useState([])
    const [loading,setloading]=useState(false)
    const [error,setError]=useState(null)
    const [percentage,setPercentage]=useState(0)
   async function fetchData(getUrl) {
        try {
            setloading(true)
            const response= await fetch(getUrl)
            const data= await response.json()
         if (data && data.products && data.products.length>0){
              setData(data.products)
             setloading(false)
         }
        }
        catch (e) {
            setError(e.messsage)
        }
    }
    function loader(){
        return <div>Loading data Please wait....</div>
    }
    function handleScrollPercentage(){
        const howMuchScrolled=document.body.scrollTop || document.documentElement.scrollTop;
        const  height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setPercentage((howMuchScrolled/height)*100)
    }
    useEffect(()=>{
        fetchData(url)
    },[url])

    useEffect(()=>{
        window.addEventListener("scroll",handleScrollPercentage);
        return ()=>{
            removeEventListener('scroll',() => {})
        }
    },[])
    console.log(percentage);
    return(
        <div>
            <div className="top-container">
                <h1> Scroll indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{width:`${percentage}%`}}></div>
                </div>
            </div>

            <div className="data-container">
                {
                  loading?loader() : data && data.length>0 ? data.map((dataItem)=>(
                       <p>{dataItem.title}</p>
                   ))  : "No Products available"
                }
            </div>
        </div>
    )
}