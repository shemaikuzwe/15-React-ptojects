import {useState} from "react";
import Modal from "./modal.tsx";
import './modal.css';

export default function ModalTest(){
    const [modal,setModal]=useState(false);
    const handleToggleModal=()=>{
        setModal(!modal);
    }
   return <div >
       <button onClick={handleToggleModal}>Open Modal</button>
       {modal && <Modal id={1} header={"Heading"} body={"Some content Here"} footer={"Footer"} onClose={handleToggleModal}/>}
   </div>
}