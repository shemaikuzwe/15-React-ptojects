import useWindowResize from ".";

export default function WindowResize() {
      const{width,height}=useWindowResize()
 return(
      <div>
        <h1>Use Window Resize Hook</h1>
        <p> The width is: {width}</p>
        <p> The height is: {height}</p>
      </div>
 )     
}