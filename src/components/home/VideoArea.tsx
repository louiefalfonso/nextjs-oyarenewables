"use client";
import VideoPopup from "@/modals/VideoPopup";
import React, { useState } from "react";
import Link from "next/link";

const VideoArea = ({ style }: any) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  const bg_img = style
    ? "/assets/images/resource/call-do-bg2.jpg"
    : "/assets/images/resource/call-do-bg.jpg";

  return (
    <>
      <div className={`call-do-action-section ${style ? "style-two" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-video text-center wow animate__bounceInDown">
                <div className="video-icon">
                  <Link
                    href="https://www.youtube.com/watch?v=JSCStxizL58"
                    passHref
                    className="video-vemo-icon venobox vbox-item"
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="bi bi-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"JSCStxizL58"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoArea;
