import React from "react";
import "./styles.css";
import BoxB from "./boxconf";
import NavBar from "@/components/navbar";
import BGAnimation from "@/components/utils/animation";

const Conference = () => {
  return (
    <>
      <NavBar />

      <BoxB>
        <div className="flex flex-col items-center">
          <h1 className="bHeading mt-20 text-7xl text-yellow-500">
            Conference Details
          </h1>
          <p className="bHeading mt-20 text-xl text-white text-center">
            Date: 17th July to 19th July <br />
            Venue: DBPC premises
            <br />
            Delegate Fee: Rs. 6900 <br />
          </p>
          <em className="text-lg text-gray-300">
            *Not inclusive of meals, stationery, or any actual event - just
            funding the EB's Red Bull supply for late-night prep. TY for your
            generous contribution. *
          </em>
          <p className="bHeading mt-10 text-xl text-white text-center">
            <strong>Accommodation:</strong> Details not confirmed. For now,
            let's say... under the stars
          </p>
        </div>
      </BoxB>
      <BGAnimation />
    </>
  );
};

export default Conference;
