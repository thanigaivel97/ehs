/*jshint esversion: 9 */
import { Image, Grid } from "semantic-ui-react";
import Rating from "@material-ui/lab/Rating";
import { useState,useEffect } from "react";
import DisInfect from "../../images/DisInfectant.svg";
import $ from "jquery";
import CloseBtn from "../../images/ExitBtn.svg";
import { Link } from "react-router-dom";
import { DesContext } from "../../App.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {findMat,findDim} from '../../helper/apiPath';

export const ModalCard = (props) => {
  const [pop, popup] = useState(false);

  const blabla = () => {
    let selected = {Material: {one: false, two: false, three: false}, Dimension: {one: false, two: false, three: false}};

    if (props.boxDet.select === "Material"){
      if (props.boxDet.name === "one"){
        selected.Material = {one: true, two:false, three:false};
      }
      else if (props.boxDet.name === "two"){
        selected.Material = {one: false, two:true, three:false};
      }
       else if (props.boxDet.name === "three"){
        selected.Material = {one: false, two:false, three:true};
      }
      props.setMatDim(prev=> {
        return {Dimension:{...prev.Dimension}, Material:{...selected.Material}};
      });
    }

    else if (props.boxDet.select === "Dimension"){
      if (props.boxDet.name === "one"){
        selected.Dimension = {one:true, two:false, three:false};
      }
      else if (props.boxDet.name === "two"){
        selected.Dimension = {one:false, two:true, three:false};
      }
       else if (props.boxDet.name === "three"){
        selected.Dimension = {one:false, two:false, three:true};
      }
      props.setMatDim(prev=> {
        //props.addToCart(p=>{return { Material:{...p.Material}, Dimension:{...selected.Dimension}}});
        return { Material:{...prev.Material}, Dimension:{...selected.Dimension}};
      });
    }

    console.log(props.boxDet.select + props.boxDet.name);

  };
  return (
    <div
      className="pt-2"
      style={props.selected[props.boxDet.name]?{
        border: "2px solid #003459",
        borderRadius: "6px",
        width: "130px",
        height: "200px",
      }:{
        border: "1px solid #D2D2D2",
        borderRadius: "6px",
        width: "130px",
        height: "200px",
      }}
      // props.oriDet[props.name]=props.boxDet.title;
      onClick={()=>{blabla();} } 
    >      
      <img
        className="mt-4 ml-4 mb-2 justify-content-center oneone "
        src={`data:${props.boxDet.src.contentType};base64,${props.boxDet.src.data}`}
        width={"80px"}
        height={props.boxDet.cus ? props.boxDet.cusWidth : "80"}
        alt={props.boxDet.title}
        onMouseEnter={() => { popup(!pop);} }
        onMouseLeave={() => { popup(!pop);} }
      />

      <Card className="popcard"
        style={
          pop
            ? {
                display: "block",
                width: "230px",
                zIndex: "2",
                position:"absolute",
                border: "1px solid #D2D2D2",
              }
            : { display:"none",width: "250px", position:"absolute", zIndex: "20", border: "1px solid #D2D2D2" }
        }
      >
        <CardContent style={{marginRight:"-8px",marginLeft:"-8px",marginBottom:"-8px"}}>
          <Typography variant="body2" color="textSecondary" component="p">
            Posters Paper is non-tearable with premium quality and PET Mat
            finish Laminate
          </Typography>
        </CardContent>
      </Card>

      <p
        style={{
          fontFamily: "Lato",
          width: "100px",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "17px",
          textAlign: "center",
          color: "#000000",
        }}
        className="text-center ml-3 mt-1"
      >
        {props.boxDet.title}
      </p>
    </div>
  );
};

const Card2 = (props) => {

  const { _id,name, imgUrl, creator, bought, stocks, rating, material, dimension } = props.data;
  
  return (
    <DesContext.Consumer>
      {(DesDetail) => (
        <div className="card2InCat">
          <Image
            style={{ width: "230px", height: "240px", cursor: "pointer" }}
            className="mx-auto d-block"
            src={`data:${imgUrl?.contentType};base64,${imgUrl?.data}`}
            alt={name}
            onClick={() => props.selectedModalCard(props.data)}
          />

          <Link
            className="card2Title"
            style={{ cursor: "pointer" }}
            to={`/item/${_id}`}
            onClick={() => DesDetail.DesDetail(props.data)}
          >
            {name}
          </Link>

          <div>
            <div>
              <p className="card2By">{creator}</p>
            </div>
            <div className="ml-3" style={{ marginTop: "-10px" }}>
              <Grid>
                <Grid.Row columns="3">
                  <Grid.Column>
                    <p className="card2Stock" style={{ float: "left" }}>
                      {stocks > 0 ? "In Stock" : "No Stock"}
                    </p>
                  </Grid.Column>
                  <Grid.Column floated="right" style={{ marginLeft: "70px" }}>
                    <Rating
                      style={{ float: "left" }}
                      name="size-small"
                      size="small"
                      defaultValue={rating?.length}
                      precision={0.5}
                      disabled
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <p className="card2Rating">{rating?.length}</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <br />
            <div style={{ float: "left", marginTop: "-35px" }}>
              <p
                onClick={() => props.selectedModalCard(props.data)}
                style={{ float: "left", cursor: "pointer" }}
                className="card2AddStock"
              >
                Add to Cart
              </p>
              <p
                className="card2Bought"
                style={{ float: "right", width: "95px", marginLeft: "65px" }}
              >
                {bought} bought this
              </p>
            </div>
          </div>
          </div>
      )}
    </DesContext.Consumer>
  );
};

export default Card2;

