import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutside() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div ref={ref}>
      {showContent ? (
        <div>
          <h1>This is arandom Content</h1>
          <p>Please click outside to close the Content</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
