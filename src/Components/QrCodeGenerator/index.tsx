import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrcode] = useState("");
  const handleGenerate = () => {
    setQrcode(input);
    setInput("");
  };
  return (
    <div>
      <h1>Qr Code generator</h1>
      <input
        type="text"
        name="qrCode"
        placeholder="Enter value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        type="submit"
        onClick={handleGenerate}
      >
        Generate
      </button>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} />
      </div>
    </div>
  );
}
