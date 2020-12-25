import React from "react";

const FloorBox = (props) => {
  return (
    <div className="row">
      <div className="col floorBox">{props.one}</div>

      <div className="col floorBox ml-3">
        <div className="row  p-2">{props.two}</div>
      </div>

      <div className="col floorBox ml-3">
        {props.isArtist ? (
          <p
            className="text-center pt-3 artistHead"
            style={{ margin: "0 auto" }}
          >
            Browse by Artists
          </p>
        ) : null}
        {props.three}
      </div>
    </div>
  );
};

export default FloorBox;
