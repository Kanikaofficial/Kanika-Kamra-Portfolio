import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";
import img from "./woman-doing.png";
import kanika from "./kanikakamra.png";
// import { Component } from "react";
// import banner from "./greeting-01.svg"

//for animated svgs use json file
export default function BannerImg() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./banner.json"),
    });
  }, []);
  return (
    <div className="App">
      {/* <div className="container" ref={container}></div> */}
      <img src={kanika} alt="svg image" Drop a mail />
    </div>
  );
}

// //for static svgs
// class BannerImg extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//       <img src={banner} alt="" width="550" />
//       </div>
//       </div>
//     );
//   }
// }
// export default BannerImg;
