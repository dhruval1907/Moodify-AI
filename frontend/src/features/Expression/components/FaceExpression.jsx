import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/util";

export default function FaceExpression({ onClick = () => {} }) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    init({ landmarkerRef, videoRef, streamRef });

    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  async function handleClick() {
    const exp = detect({
      landmarkerRef,
      videoRef,
      setExpression
    });

    console.log("Detected:", exp);
    onClick(exp);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        style={{
          width: "400px",
          borderRadius: "12px",
          border: "2px solid #444"
        }}
        playsInline
        muted
      />

      <h2>{expression}</h2>

      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Detect Expression
      </button>
    </div>
  );
}