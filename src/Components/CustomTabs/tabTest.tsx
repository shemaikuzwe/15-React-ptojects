import Tabs from "./tabs.tsx";
import './tabs.css';
export default function TabTest(){
    function RandomComponent() {
        return <h1>Some Random content</h1>
    }
    function handleChange(tabIndex) {
         console.log(tabIndex)
    }
    const tabs=[
        {
            label:"tab 1",
            content:" This is content for tab 1"
        },
        {
            label:"tab 2",
            content:" This is content for tab 2"
        },
        {
            label:"tab 3",
            content:<RandomComponent/>
        }
    ]
    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}