import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

export const init = async ({ landmarkerRef, videoRef, streamRef }) => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
  );

  landmarkerRef.current = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task"
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1
  });

  // start webcam
  streamRef.current = await navigator.mediaDevices.getUserMedia({
    video: true
  });

  videoRef.current.srcObject = streamRef.current;

  await new Promise((resolve) => {
    videoRef.current.onloadedmetadata = () => {
      videoRef.current.play();
      resolve();
    };
  });
};

export const detect = ({ landmarkerRef, videoRef, setExpression }) => {
  if (!landmarkerRef.current || !videoRef.current) return;

  const video = videoRef.current;

  // prevent ROI error
  if (video.readyState !== 4 || video.videoWidth === 0) {
    console.log("Video not ready");
    return;
  }

  try {
    const results = landmarkerRef.current.detectForVideo(
      video,
      performance.now()
    );

    if (!results.faceBlendshapes?.length) {
      setExpression("No face detected");
      return "no_face";
    }

    const blendshapes = results.faceBlendshapes[0].categories;

    const getScore = (name) =>
      blendshapes.find((b) => b.categoryName === name)?.score || 0;

    const smileLeft = getScore("mouthSmileLeft");
    const smileRight = getScore("mouthSmileRight");

    const jawOpen = getScore("jawOpen");
    const browUp = getScore("browInnerUp");

    const frownLeft = getScore("mouthFrownLeft");
    const frownRight = getScore("mouthFrownRight");

    let currentExpression = "neutral";

    if (smileLeft > 0.5 && smileRight > 0.5) {
      currentExpression = "happy";
    } else if (jawOpen > 0.25 && browUp > 0.25) {
      currentExpression = "surprised";
    } else if (frownLeft > 0.001 && frownRight > 0.001) {
      currentExpression = "sad";
    }

    setExpression(currentExpression);

    return currentExpression;
  } catch (err) {
    console.error("Detection error:", err);
  }
};