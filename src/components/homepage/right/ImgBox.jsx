const ImgBox = (props) => {
  return (
    <div className="mt-3 text-center">
      <img style={{ width: "120px", height: "137px" }} src={props.src} alt="" />
      <p
        className="text-center mt-1 ml-2"
        style={{
          fontFamily: "Source Sans Pro",
          color: "black",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "12px",
          width: "100px",
        }}
      >
        {props.title}
      </p>
    </div>
  );
};

export default ImgBox;
