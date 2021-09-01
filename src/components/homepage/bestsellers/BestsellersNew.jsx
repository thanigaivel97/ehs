import React from 'react';
import "./bestsellersNew.css"
import imgDummy from "../../../images/BeforeStart.png";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Card = (props) => {
    return(
        <div className="br-22 bestsellerCard d-flex flex-column justify-content-start">
            <img src={props.imgUrl} className="br-22 bestsellerImg"  />
            <p className="bestsellerText  mb-0 px-2">{props.title}</p>
        </div>
    )
};

const  BestsellersNew = () =>  {
    return (
        <div className="padding-10">
            <p className="bestsellerTitle">Our Bestsellers</p> 
            <div className="my-3">
                <p className="bestsellerSubHead">Posters</p>
                <div className="bestsellerContainer">
                    <Zoom>
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    </Zoom>
                </div> 
            </div>
            <div className="my-3">
                <p className="bestsellerSubHead">Signages</p>
                <div className="bestsellerContainer">
                    <Zoom>
                        <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                        <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                        <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                        <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    </Zoom>
                </div>
            </div>
            <div className="my-3">
                <p className="bestsellerSubHead">Floor Graphics</p>
                <div className="bestsellerContainer">
                    <Zoom>
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    </Zoom>
                </div> 
            </div>
            <div className="my-3">
                <p className="bestsellerSubHead">Asset Markings</p>
                <div className="bestsellerContainer">
                    <Zoom >
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    <Card title="Floor Graphics | Printable Catalog | PRD-FG0009" imgUrl={imgDummy} />
                    </Zoom>
                </div> 
            </div>
        </div>
    )
}

export default BestsellersNew;