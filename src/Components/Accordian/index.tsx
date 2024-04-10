import { useState } from "react";
import { data } from "./data.tsx";
import './style.css';
export default function Accordian() {
  const [Selected, setSelected] = useState("");
  const [enableMultiSelection,setEnableMultiSelection] = useState(false);
  const [Multi,setMulti]=useState([]);
  function handleSelection(getcurrentId: string) {
    setSelected(getcurrentId == Selected ? "" : getcurrentId);
  }
  function handleMultiSelection(getCurrentId){
    let cpyMultiple=[...Multi];
    const findIndexOfMulti=cpyMultiple.indexOf(getCurrentId);
    if(findIndexOfMulti=== -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfMulti,1);
    setMulti(cpyMultiple);
  }
  console.log(Multi);
  return (
    <div className="wrapper">
        <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>
      <div className="accordian">
      {data && data.length > 0
        ? data.map((item) => (
            <div className="item">
              <div onClick={enableMultiSelection ?()=>handleMultiSelection(item.id)  :() => handleSelection(item.id)} className="title">
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection ? Multi.indexOf(item.id) !==-1 && (
               <div className="content">{item.answer}</div> 
              )
              :Selected === item.id && (
                <div className="content">{item.answer}</div>
              )}
             
            </div>
          ))
        : "No data found"}
      </div>
    </div>
  );
}
