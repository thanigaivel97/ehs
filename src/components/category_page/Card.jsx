/*jshint esversion: 6 */
import { Link } from "react-router-dom";

const Card = (props) => {
  const { src, title } = props.data;
  return (
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
        to={"/posters/" + title.toUpperCase()}
      >
        {title}
      </Link>
    </div>
  );
};
export default Card;
