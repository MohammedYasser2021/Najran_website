import React from "react";
import Lottie from "lottie-react";
import RobotBot3D from "../assets/loading.json";

const CustomLoading = () => {
  return (
    <div className="flex items-center justify-center">
      <Lottie 
        animationData={RobotBot3D} 
        loop={true} 
        style={{ width: 200, height: 200 }} 
      />
    </div>
  );
};

export default CustomLoading;