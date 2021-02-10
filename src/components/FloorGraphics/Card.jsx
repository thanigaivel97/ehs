/*jshint esversion: 6 */
const Card = (props) => {
    const {src, title} = props.data;
  return (
    <div className="cardInCat">
      <img
        style={{ width: "160px", height: "180px" }}
        className="mx-auto d-block"
        src={src}
        alt=""
      />
      <p
        className="text-center mt-1"
        style={{
          fontFamily: "Lato",
          fontWeight: "500",
          fontStyle: "normal",
          fontSize: "16px",
          color: "#000000",
          lineHeight: "19px",
        }}
      >{title}
      </p>
    </div>
  );
};
export default Card;
