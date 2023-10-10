import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                I'm <mark data-entity="">{greeting.sub}</mark>
              </h1>
              <h1 style={{ fontSize: "x-larger" }}>I am professional in </h1>
              <br />
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Statistical Analysis")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Data Manipulation")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Data Visualization")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Database Management")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Programming")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Machine Learning")
                      .pauseFor(200)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}
              >
                <div className="entities">
                  A <mark data-entity="">Data Analyst</mark>
                  with a passion for
                  <mark data-entity="">uncovering insights</mark> through data
                  analysis, skilled in
                  <mark data-entity="">data manipulation</mark>, and dedicated
                  to
                  <mark data-entity="">delivering actionable results</mark>.
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="/contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
