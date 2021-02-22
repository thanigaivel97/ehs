/* eslint-disable jsx-a11y/iframe-has-title */
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
            <iframe
              width="320"
              height="240"
              src={props.src}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <video width="320" height="240" controls>
              <source src="https://youtu.be/WHldQo3nkgM" type="video/mp4" />
            </video> */}
          </button>
        </div>
        <p className="videoTitle mt-2">{props.title}</p>
      </div>
    </div>
  );
};

export default Video;
