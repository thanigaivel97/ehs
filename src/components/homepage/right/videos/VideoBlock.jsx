import Video from "./Video";

const VideoBlock = () => {
  return (
    <div className="row mt-5">
      <Video
        title="Watch how EHS Prints works"
        src="https://www.youtube.com/embed/WHldQo3nkgM"
      />
      <Video
        title="Get to know us"
        src="https://www.youtube.com/embed/j8n5in8UrV0"
      />
      <Video
        title="Watch how to find the perfect print for your workplace"
        src="https://www.youtube.com/embed/gM61u_1br4k"
      />
    </div>
  );
};

export default VideoBlock;
