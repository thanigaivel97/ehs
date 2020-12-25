import ImgBox from "./ImgBox";

const FourImg = (props) => {
  const firstTwo = props.data.slice(0, 2);
  const LastTwo = props.data.slice(2);

  return (
    <div className="row p-3">
      <div className="col-4">
        {firstTwo.map((item, index) => (
          <ImgBox key={index} src={item.src} title={item.title} />
        ))}
      </div>
      <div className="col-4 ml-5">
        {LastTwo.map((item, index) => (
          <ImgBox key={index} src={item.src} title={item.title} />
        ))}
      </div>
    </div>
  );
};
export default FourImg;
