import { useContext } from "react"
import Accordian from "../Accordian"
import ImageSlider from "../ImageSlider"
import LightDarkMode from "../LightDarkMode"
import RandomColor from "../RandomColor"
import { FeatureFlagContext } from "./Context"

export default function FeatureFlags() {
    const {loading,enabledFeatures}=useContext(FeatureFlagContext);
   
    const componentsTorender=[
     {
        key:"ShowLightAndDarkMode",
        component:<LightDarkMode/>
     },
     {
        key:"showRandomColor",
        component:<RandomColor/>
     },
     {
        key:"showAccordian",
        component:<Accordian/>
     },
     {
        key:"showImageSlider",
        component:<ImageSlider url={"https://picsum.photos/v2/list"}/>
     },
     
    ];
    function checkEnabledFlags(getCurrentkey){
       return enabledFeatures[getCurrentkey];
    }
    if(loading) return <h1>Loading data</h1>
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsTorender.map( componentItem =>checkEnabledFlags(componentItem.key) ? (componentItem.component) :null )}
    </div>
  );
}
