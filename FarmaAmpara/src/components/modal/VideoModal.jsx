import React, { useContext } from "react";
import { FarzaaContext } from "../../context/FarzaaContext";

const VideoModal = () => {
  const { showVideo, handleVideoClose } = useContext(FarzaaContext);
  return (
    <>
      <div
        className={`overlay ${showVideo ? "open" : ""}`}
        role="button"
        onClick={handleVideoClose}
      ></div>
      <div className={`modal-video ${showVideo ? "open" : ""}`}>
        <div className="video-modal-header">
          <a
            className="video-modal-close-btn"
            role="button"
            onClick={handleVideoClose}
          >
            <i className="fa-regular fa-xmark"></i>
          </a>
        </div>
        <div className="modal-video-body">
          {showVideo && (
           <iframe width="560" height="315" src="https://www.youtube.com/embed/2LnfHPqdt5U?si=PIm566V3dBmSdBBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoModal;
