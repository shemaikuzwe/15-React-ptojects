import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending  ?<h3>Loading data...</h3>:null}
      
        {data && data.products && data.products.length > 0 ? data.products.map((dataItem) =>   <p key={dataItem.id}>{dataItem.title}</p>)  : <p>No products found</p>}

    </div>
  );
}
