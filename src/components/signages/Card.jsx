/*jshint esversion: 6 */
import { Link } from "react-router-dom";

const Card = (props) => {
  const title = props.title;
  return (
    <div>
      <Link className="catCardContainer" to={"/signages/subcat/" + title.toUpperCase()} >
      <img
        className="mx-auto d-block catCardImg"
        src={props.src}
        alt=""
      />
      <div
      className="cardOverlay text-light"
      >
      {title}
      </div>

      </Link>
    </div>

    /*
    <div className="cardInCat">
      <img
        style={{ width: "160px", height: "180px" }}
        className="mx-auto d-block cardInCatImg"
        src={src}
        alt=""
      />
      <Link
        className="mt-2"
        style={{
          fontFamily: "Lato",
          fontWeight: "500",
          fontStyle: "normal",
          fontSize: "16px",
          display: "block",
          textAlign: "center",
          color: "#000000",
          lineHeight: "19px",
        }}
        to={"/signages/" + title.toUpperCase()}
      >
        {title}
      </Link>
    </div>*/
  );
};
export default Card;
