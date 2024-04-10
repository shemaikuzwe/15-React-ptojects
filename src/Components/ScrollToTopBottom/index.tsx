import React, { useRef } from "react";
import useFetch from "../UseFetch";
const ScrollToTopBottom = () => {
    const bottomref=useRef(null);
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const hanleScrollTop=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
        left:0
    })
  }
  const hanleScrollToBottom=()=>{
    bottomref.current.scrollIntoView({ behavior:"smooth" })
  }
  return (
    <div>
      {pending && <p>loading data..</p>}
      {error && <p>something went wrong</p>}
      <h1>scroll to Top Bottom feauture </h1>
      <h3>This is a top section</h3>
      <button onClick={hanleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{listStyle:"none"}}>
        {data && data.products && data.products.length > 0 ? (
          data.products.map((dataItem) => (
            <li key={dataItem.id}>{dataItem.title}</li>
          ))
        ) : (
          <p>No products found</p>
        )}
      </ul>
      <button  onClick={hanleScrollTop}>Scroll to Top</button>
      <div ref={bottomref}></div>
      <h3>This is bottom section</h3>
    </div>
  );
};

export default ScrollToTopBottom;
