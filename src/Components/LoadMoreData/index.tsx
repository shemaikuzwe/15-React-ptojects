import {useEffect, useState} from "react";
import './style.css';
export  default function LoadMoreData(){
    const [loading,setLoading]=useState(false);
    const [products,setproducts]=useState([]);
    const [count,setCount]=useState(0);
    const [disable,setDisable]=useState(false);

    async function fetchProducts(){
       try {
           setLoading(false);
           const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${count == 0?0:count*20}`);
           const result=await response.json();
           if(result && result.products && result.products.length){
               setproducts((prevData)=> [...prevData, ...result.products] );
               setLoading(false);
           }
       }catch (e){
           setLoading(false);
           console.error(e);

       }
    }
    useEffect(()=>{
       fetchProducts();
    },[count]);

    useEffect(()=>{
        if(products && products.length ==100){
            setDisable(true);
        }
    },[products])
    if(loading){
        return <div> Loading....</div>
    }
  return <div className="load-more-container">
          <div className="product-container">
          {products && products.length ?
              products.map((item :any)=>(
                  <div key={item.id} className="products">
                      <img
                          src={item.thumbnail}
                          alt={item.title}
                      />
                      <p>{item.title}</p>
                  </div>
              )) :" no product found"
          }

      </div>
      <button disabled={disable} onClick={()=> setCount(count+1)}>Load more Data</button>
      {disable && "you have reached maximum products"}
  </div>;
}