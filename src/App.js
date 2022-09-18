import React from "react";
import { Parallax } from "react-parallax";
import balloon from "./images/balloon.jpg";
import effect from "./images/effect.jpg";
import happyBirthday from "./images/happyBirthday.jpg";
import love from "./images/love.jpg";
import smileStone from "./images/smileStone.jpg";
import smokeEffect from "./images/smokeEffect.jpg";
import toTheMoon from "./images/toTheMoon.jpg";
import banner from "./images/banner.png";
import joshiJi from "./images/joshiJi.png";
import cake from "./images/cake.png";
import hat from "./images/hat.png";
import popper from "./images/popper.png";
import present from "./images/present.png";
import toast from "./images/toast.png";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.jpeg";
import smile1 from "./images/smile1.JPG";
import awesome from "./images/awesome.JPG";

import smile3 from "./images/smile3.JPG";
const App = () => {
  return (
    <div>
      <Parallax bgImage={balloon} strength={500}>
        <div style={{ height: "100vh", width: "100%" }}>
          <div
            style={{
              marginTop: "10vw",
              backgroundColor: "#fff",
              maxWidth: "70vw",
              height: "30vw",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img
              style={{
                backgroundColor: "#fff",
                height: "auto",
                width: "23vw",
                position: "absolute",
                top: "2vw",
                left: "20vw",
              }}
              src={banner}
              alt=""
            />

            <br />
            <img
              style={{
                height: "auto",
                width: "18vw",
                position: "absolute",
                top: "8vw",
                right: "38vw",
              }}
              src={joshiJi}
              alt=""
            />
            <img
              style={{
                height: "auto",
                width: "9vw",
                position: "absolute",
                top: "9vw",
                right: "18vw",
              }}
              src={cake}
              alt=""
            />
            <img
              style={{
                height: "auto",
                width: "11vw",
                position: "absolute",
                top: "1.7vw",
                right: "37.5vw",
              }}
              src={hat}
              alt=""
            />
            <img
              style={{
                height: "auto",
                width: "10vw",
                position: "absolute",
                top: "2.5vw",
                right: "26vw",
              }}
              src={toast}
              alt=""
            />
            <img
              style={{
                height: "auto",
                width: "9vw",
                position: "absolute",
                top: "19vw",
                right: "22vw",
              }}
              src={popper}
              alt=""
            />
            <img
              style={{
                height: "auto",
                width: "11vw",
                position: "absolute",
                top: "13vw",
                right: "28vw",
              }}
              src={present}
              alt=""
            />
          </div>
        </div>
      </Parallax>
      {/* <h1></h1> */}
      <Parallax bgImage={happyBirthday} strength={400}>
        <div style={{ height: "100vh", width: "100%" }}>
          <img
            style={{
              height: "auto",
              width: "15vw",
              position: "absolute",
              top: "8vw",
              right: "50vw",
            }}
            src={img1}
            alt=""
          />
          <img
            style={{
              height: "auto",
              width: "11vw",
              position: "absolute",
              top: "12vw",
              right: "39vw",
            }}
            src={img2}
            alt=""
          />
          <img
            style={{
              height: "auto",
              width: "15vw",
              position: "absolute",
              top: "29vw",
              left: "18.7vw",
            }}
            src={img3}
            alt=""
          />
          <img
            style={{
              height: "auto",
              width: "18vw",
              position: "absolute",
              top: "10vw",
              right: "14vw",
            }}
            src={img4}
            alt=""
          />
          <img
            style={{
              height: "auto",
              width: "11vw",
              position: "absolute",
              top: "26vw",
              right: "28vw",
            }}
            src={img5}
            alt=""
          />
        </div>
      </Parallax>
      <Parallax bgImage={smileStone} strength={400}>
        <div style={{ height: "100vh", width: "100%" }}>
          <img
            style={{
              height: "auto",
              width: "23vw",
              position: "absolute",
              top: "22vw",
              right: "8vw",
            }}
            src={smile1}
            alt=""
          />

          <img
            style={{
              height: "auto",
              width: "26vw",
              position: "absolute",
              top: "9vw",
              right: "11vw",
            }}
            src={smile3}
            alt=""
          />
          <h1
            style={{
              fontFamily: "Merienda",
              position: "absolute",
              top: "42vw",
              right: "10vw",
            }}
          >
            You are awesome, smart or i can say a complete package of
            awesomeness. <br /> 😊 Keep smiling Joshi Ji
          </h1>
        </div>
      </Parallax>
      <Parallax bgImage={love} strength={400}>
        <div style={{ height: "100vh", width: "100%" }}>
          <img
            style={{
              height: "auto",
              width: "22vw",
              position: "absolute",
              top: "20vw",
              left: "44vw",
            }}
            src={awesome}
            alt=""
          />
        </div>
      </Parallax>
    </div>
  );
};

export default App;
