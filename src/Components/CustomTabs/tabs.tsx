import {useState} from "react";

export  default  function Tabs({tabsContent,onChange}) {
    const [tabIndex,setTabIndex]=useState(0)
   function handleClick(getIndex){
        setTabIndex(getIndex)
       onChange(getIndex)
   }
    return(
        <div className="wrapper">
           <div className="heading">
               {
                   tabsContent.map((tabItem,index)=>(<div onClick={()=> handleClick(index)} key={tabItem.label} className={`tab-item ${tabIndex === index?"active" :""}`}>
                       <span className="label">{tabItem.label}</span>
                   </div>))
               }
           </div>
            <div className="content">
                {
                    tabsContent[tabIndex] && tabsContent[tabIndex].content
                }
            </div>
        </div>
    )
}