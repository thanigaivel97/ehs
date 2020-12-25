import PlayBtn from "../../../../images/PlayBtn.svg";

const Video = (props) => {
  return (
    <div className="col-4">
      <div className="mx-auto">
        <div
          style={{ width: "100%", height: "220px", backgroundColor: "#C4C4C4" }}
          className="col d-flex align-items-center justify-content-center"
        >
          <button className="btn border-0">
            <img
              src={PlayBtn}
              width="50"
              height="50"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                position: "relative",
              }}
              alt="play"
            />
          </button>
        </div>
        <p className="videoTitle mt-2">{props.title}</p>
      </div>
    </div>
  );
};

export default Video;
