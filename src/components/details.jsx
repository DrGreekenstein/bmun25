import React from "react";
import "./styles/details.css";
import Image from "next/image";
import NavBar from "./navbar";

const Details = (props) => {
  return (
    <>
      <NavBar/>
      <div className="bConatiner bg-gray-900 pb-20 flex flex-col justify-center">
        <div className="flex justify-center pt-40 pb-10">
          <Image src={props.image} width={200} height={200} alt="" />
        </div>

        {["heading", "shortName"].map((curr, index) => {
          const sizeClass = index === 0 ? "text-5xl" : "text-6xl";
          return <h1
            key={curr + 10000}
            width={index==0 ? "100" :"100"}
            className={`bHeading ${sizeClass} text-white text-center break-words w-full mx-auto px-4`}
          >
            {props[curr]}
          </h1>;
        })}

          {props.agenda.map((curr, index) => (
            <h1 className="bText text-2xl w-200 self-center text-center text-white mb-5 mt-20">
              {curr}
          </h1>
          ))
          }

        <div className="pb-7 text-white" />
        <hr className="bLine h-0.5 mx-auto mt-10 my-7 bg-yellow-600 border-0 rounded-sm md:my-10 dark:bg-white-700" />

        <u className="bAbout">
          <h1 className="bHeading text-4xl text-center text-white mb-5 mt-20">
            ABOUT COMMITTEE
          </h1>
        </u>

        <i>
          <p
            className="text-lg text-center text-white"
            style={{ fontSize: "18.2px" }}
          >
            {props.quote[0]}
          </p>
        </i>

        <p
          className="text-lg text-center text-white mb-15"
          style={{ marginLeft: 1.1 * (480 + +props.length) }}
        >
          ~{props.quote[1]}
        </p>

        {
          <div
            style={{ width: "60vw", margin: "auto" }}
            className="flex flex-col items-center"
          >
            {props.content.map((curr, index) => (
              <>
                <p
                  key={index}
                  className="bText text-white"
                  style={{ fontSize: "19px" }}
                >
                  {curr}
                </p>
                <br key={index + 80} />
              </>
            ))}
          </div>
        }

        <img
          className="mx-auto mt-20"
          src="/assets/chairperson.jpg"
          width={300}
        ></img>

        {
          <>
            <div style={{ width: "60vw", margin: "auto" }}>
              <p
                className="text-align-left bText text-white mt-20"
                style={{ fontSize: "19px" }}
              >
                Greetings Delegates,
              </p>
              <div className="flex flex-col items-center">
                {props.chairpersonAddress.map((curr, index) => (
                  <>
                    <p
                      key={index}
                      className="bText text-white"
                      style={{ fontSize: "19px" }}
                    >
                      {curr}
                    </p>
                    <br key={index + 5000} />
                  </>
                ))}
              </div>
            </div>
          </>
        }
        {
          <>
            <div style={{ width: "60vw", margin: "auto" }}>
              <div className="flex flex-col items-end space-y-1">
                {props.conclusion.map((curr, index) => (
                  <>
                    <p
                      key={index + 3000}
                      className="bText text-white"
                      style={{ fontSize: "19px" }}
                    >
                      {curr}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </>
        }
      </div>
      {/* footer */}
    </>
  );
};

export default Details;
