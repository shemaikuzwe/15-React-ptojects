import { createContext, useEffect, useState } from "react";
import FeautureFlagsDataCaller from "../data";

export const FeatureFlagContext = createContext(null);
export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFeatures, setEnabledFeatures] = useState({});
  async function fetchFeatureFlags() {
    try {
        setLoading(true);
      const response = await FeautureFlagsDataCaller();
      setEnabledFeatures(response)
      setLoading(false);
    } catch (error) {
        setLoading(false);
      console.error(error);
      throw new Error();
    }
  } 
  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{loading,enabledFeatures}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
