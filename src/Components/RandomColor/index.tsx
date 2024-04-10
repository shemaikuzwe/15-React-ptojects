import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomColor(length: number) {    
  return Math.floor(Math.random() * length);
  }
  function handleCreateHexColor() {
    let hexColor = "#";
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColor(hex.length)];
    
    }
   return setColor(hexColor);
  }
  function handleCreateRgbColor() {
    const  r=randomColor(256);
    const g=randomColor(256);
    const b=randomColor(256);
    const rgbColor=`rgb(${r},${g},${b})`;
    return setColor(rgbColor);
  }
  useEffect(()=>{
    if(typeOfColor=="hex") handleCreateHexColor();
    else handleCreateRgbColor();
  },[typeOfColor])
  return (
    <div
      style={{
        width: "95vw",
        backgroundColor: color,
        height: "95vh",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>HEx color</button>
      <button onClick={() => setTypeOfColor("rgb")}>RGB color</button>
      <button
        onClick={
          typeOfColor == "hex"
            ? handleCreateHexColor
            : handleCreateRgbColor
        }
      >
        Generate Random color
      </button>
      <div style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop:'50px',
        fontSize:'40px',
        color: 'white'
        }}>
       <h3>{typeOfColor == "hex"?"HexColor":"RGB Color"}</h3>
       <h1>{color}</h1>
      </div>
    </div>
  );
}
