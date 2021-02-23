/*jshint esversion: 9 */
import React from "react";
import EhsLogo from "../../images/EhsLogo.svg";
import Axios from "axios";
import {
  login,
  getArtWorks,
  config,
  getCategory,
  getSubCategory,
  getMaterial,
  createPoster,
  updatePoster,
  deletePoster,
  jsonToFormData,
  getOrders,
  updateOrder,
  updateCategory,
  findMat,
  findDim,
} from "../../helper/apiPath";
import swal from "sweetalert";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Grid } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import defaultImage from "../../images/Artist.svg";
import { Input, TextField, MenuItem, InputAdornment } from "@material-ui/core";
import $ from "jquery";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

function CreatePoster(props) {
  var materialIds = [];
  var dimensionIds = [];
  props.matDimData
    .filter((v) => v.type === 0)
    .map((v) => materialIds.push(v._id));

  props.matDimData
    .filter((v) => v.type === 1)
    .map((v) => dimensionIds.push(v._id));

  const [image, setImg] = React.useState(defaultImage);

  var newPoster = {
    name: "",
    category: "",
    subCategory: "",
    language: "",
    creator: "",
    originalPrice: "",
    priceGroup: "",
    imgUrl: defaultImage,
    link: "",
    description: "",
    discountPercentage: "",
    stocks: 0,
    weight: "",
    additionalDetails: "",
    sale: "",
    bestSeller: "",
    material: materialIds,
    dimension: dimensionIds,
  };

  const configImage = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };

  const [err, setErr] = React.useState({
    name: false,
    category: false,
    subCategory: false,
    language: false,
    creator: false,
    originalPrice: false,
    priceGroup: false,
    imgUrl: false,
    link: false,
    description: false,
    discountPercentage: false,
    stocks: false,
    weight: false,
    additionalDetails: false,
    sale: false,
    material: false,
    dimension: false,
    bestSeller: false,
  });

  var allowed = [
    "name",
    "category",
    "subCategory",
    "language",
    "creator",
    "originalPrice",
    "priceGroup",
    "imgUrl",
    "link",
    "description",
    "discountPercentage",
    "stocks",
    "weight",
    "additionalDetails",
    "sale",
    "bestSeller",
  ];

  function reduceObj(prev, toReduce) {
    return Object.keys(prev)
      .filter((key) => allowed.filter((v) => v !== toReduce).includes(key))
      .reduce((obj, key) => {
        obj[key] = prev[key];
        return obj;
      }, {});
  }

  function check() {
    Object.keys(newPoster).forEach((s) => {
      if (newPoster[s] === "" || newPoster[s] === 0 || !newPoster[s]) {
        setErr((prev) => {
          return { ...reduceObj(prev, s), [s]: true };
        });
      } else {
        setErr((prev) => {
          return { ...reduceObj(prev, s), [s]: false };
        });
      }
    });
  }

  function setValue() {
    allowed.forEach((single) => {
      if (single === "imgUrl") {
        newPoster[single] = $(`#${single}`)[0].files[0];
      } else if (single === "category") {
        var a = props.catData.filter((v) => v.title === $(`#${single}`).text());
        newPoster[single] = a[0]._id;
      } else if (single === "subCategory") {
        var b = props.subCatData.filter(
          (v) => v.title === $(`#${single}`).text()
        );
        newPoster[single] = b[0]._id;
      } else if (
        single === "language" ||
        single === "priceGroup" ||
        single === "bestSeller"
      ) {
        newPoster[single] = $(`#${single}`).text();
      } else {
        newPoster[single] = $(`#${single}`).val();
      }
    });
  }

  function createPosterFun() {
    setValue();
    check();
    let p = [];
    Object.keys(err).map((v) => p.push(err[v]));

    Axios.post(createPoster, jsonToFormData(newPoster), configImage)
      .then((res) => {
        swal({
          title: res.data.message,
          icon: "success",
        }).then(() => {
          props.getPosterFun();
          props.setRedirect({
            one: true,
            two: false,
            three: false,
          });
        });
      })
      .catch((err) => {
        console.log(err);
        swal(err);
      });
  }

  return (
    <>
      <Grid className="text-center pt-5">
        <Grid.Row columns="3" className="mt-2">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              error={err.name}
              id="name"
              label="Name"
              helperText={err.name ? "Enter Name" : null}
              variant="outlined"
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="category"
              error={err.category}
              style={{ width: "223px" }}
              helperText={err.category ? "Enter Category" : null}
              select
              variant="outlined"
              label="Category"
              onChange={(e) =>
                props.getSubCategoryData(props.token, e.target.value)
              }
            >
              {props.catData.map((v, i) => (
                <MenuItem key={i} value={v._id} name={v._id}>
                  {v.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="subCategory"
              error={err.subCategory}
              style={{ width: "223px" }}
              helperText={err.subCategory ? "Enter SubCategory" : null}
              select
              defaultValue="none"
              variant="outlined"
              label="Sub-Category"
            >
              {props.subCatData.map((v, i) => (
                <MenuItem key={i} value={v._id} name={v._id}>
                  {v.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="3" className="mt-4">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="language"
              select
              label="Language"
              error={err.language}
              style={{ width: "223px" }}
              helperText={err.language ? "Enter Language" : null}
              variant="outlined"
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="BiLingual">BiLingual</MenuItem>
            </TextField>
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              error={err.creator}
              id="creator"
              label="Creator"
              helperText={err.creator ? "Enter Creator" : null}
              variant="outlined"
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <Input
              id="imgUrl"
              type="file"
              error={err.imgUrl}
              label="Poster Image"
              style={{ display: "none" }}
              helperText={err.creator ? "Upload Poster" : null}
              variant="outlined"
              accept=".jpg,.png,.jpeg"
              onChange={(e) => {
                setImg(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <img
              width="50px"
              height="50px"
              src={image}
              alt=""
              onClick={(e) => $("#imgUrl").trigger("click")}
            ></img>
            <label className="ml-4 text-secondary">Choose Poster Image</label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="3" className="mt-4">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="priceGroup"
              select
              label="PriceGroup"
              error={err.priceGroup}
              style={{ width: "223px" }}
              helperText={err.priceGroup ? "Enter PriceGroup" : null}
              variant="outlined"
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </TextField>
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              error={err.originalPrice}
              id="originalPrice"
              label="Original Price"
              helperText={err.originalPrice ? "Enter Original price" : null}
              variant="outlined"
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              error={err.description}
              id="description"
              label="Description"
              helperText={err.description ? "Enter description" : null}
              variant="outlined"
              style={{ resize: "none", width: "223px" }}
              multiline
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="3" className="mt-4">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              error={err.discountPercentage}
              id="discountPercentage"
              label="discound %"
              helperText={
                err.discountPercentage ? "Enter discountPercentage" : null
              }
              variant="outlined"
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              error={err.stocks}
              id="stocks"
              label="stocks"
              helperText={err.stocks ? "Enter stocks" : null}
              variant="outlined"
              type="number"
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              error={err.weight}
              id="weight"
              label="weight"
              helperText={err.weight ? "Enter weight" : null}
              variant="outlined"
              endAdornment={<InputAdornment position="end">gms</InputAdornment>}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="mt-4" columns="3">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              error={err.additionalDetails}
              id="additionalDetails"
              label="Additional Details"
              helperText={
                err.additionalDetails ? "Enter AdditionalDetails" : null
              }
              variant="outlined"
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              error={err.sale}
              id="sale"
              label="Sales"
              helperText={err.sale ? "Enter Sales" : null}
              variant="outlined"
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              error={err.link}
              id="link"
              label="Link"
              helperText={err.link ? "Enter Link" : null}
              variant="outlined"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="mt-4" columns="3">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="bestSeller"
              select
              label="BestSeller"
              error={err.bestSeller}
              style={{ width: "223px" }}
              helperText={err.bestSeller ? "Enter BestSeller" : null}
              variant="outlined"
            >
              <MenuItem value="true">true</MenuItem>
              <MenuItem value="false">false</MenuItem>
            </TextField>
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "223px", height: "60px", fontSize: "15px" }}
              startIcon={<SaveIcon />}
              onClick={createPosterFun}
            >
              Save
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

function UpdateAndDeletePoster(props) {
  const {
    _id,
    name,
    category,
    subCategory,
    language,
    creator,
    originalPrice,
    priceGroup,
    imgUrl,
    link,
    description,
    discountPercentage,
    stocks,
    weight,
    additionalDetails,
    sale,
    bestSeller,
  } = props.data;

  const configImage = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  const [image, setImg] = React.useState(imgUrl);

  var newPoster = {
    name: name,
    category: category._id,
    subCategory: subCategory._id,
    language: language,
    creator: creator,
    imgUrl: imgUrl,
    link: link,
    originalPrice: originalPrice,
    priceGroup: priceGroup,
    description: description,
    discountPercentage: discountPercentage,
    stocks: stocks,
    weight: weight,
    additionalDetails: additionalDetails,
    sale: sale,
    bestSeller: bestSeller,
  };

  var allowed = [
    "name",
    "category",
    "subCategory",
    "language",
    "creator",
    "imgUrl",
    "link",
    "originalPrice",
    "priceGroup",
    "description",
    "discountPercentage",
    "stocks",
    "weight",
    "additionalDetails",
    "sale",
    "bestSeller",
  ];

  function setValue() {
    allowed.forEach((single) => {
      if (single === "category") {
        var a = props.catData.filter((v) => v.title === $(`#${single}`).text());
        newPoster[single] = a[0]._id;
      } else if (single === "imgUrl") {
        newPoster[single] = $(`#${single}`)[0].files[0];
      } else if (single === "subCategory") {
        var b = props.subCatData.filter(
          (v) => v.title === $(`#${single}`).text()
        );
        newPoster[single] = b[0]._id;
      } else if (
        single === "language" ||
        single === "priceGroup" ||
        single === "bestSeller"
      ) {
        newPoster[single] = $(`#${single}`).text();
      } else {
        newPoster[single] = $(`#${single}`).val();
      }
    });
  }

  function deletePosterFun() {
    Axios.post(deletePoster, { posterId: _id })
      .then((res) => {
        swal({
          title: res.data.message,
          icon: "success",
        }).then(() => {
          props.getPosterFun();
          props.setRedirect({
            one: true,
            two: false,
            three: false,
          });
        });
      })
      .catch((err) => {
        console.log(err);
        swal(err);
      });
  }

  function updatePosterFun() {
    setValue();
    Axios.post(
      updatePoster,
      jsonToFormData({ posterId: _id, ...newPoster }),
      configImage
    )
      .then((res) => {
        swal({
          title: res.data.message,
          icon: "success",
        }).then(() => {
          props.getPosterFun();
          props.setRedirect({
            one: true,
            two: false,
            three: false,
          });
        });
      })
      .catch((err) => {
        console.log(err);
        swal(err);
      });
  }

  return (
    <>
      <Grid className="text-center pt-5">
        <Grid.Row columns="3" className="mt-2">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              defaultValue={name}
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="category"
              style={{ width: "223px" }}
              select
              variant="outlined"
              label="Category"
              defaultValue={category._id}
              onChange={(e) =>
                props.getSubCategoryData(props.token, e.target.value)
              }
            >
              {props.catData.map((v, i) => (
                <MenuItem key={i} value={v._id} name={v._id}>
                  {v.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="subCategory"
              style={{ width: "223px" }}
              select
              variant="outlined"
              label="Sub-Category"
              defaultValue={subCategory._id}
            >
              {props.subCatData.map((v, i) => (
                <MenuItem key={i} value={v._id} name={v._id}>
                  {v.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="3" className="mt-4">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="language"
              select
              label="Language"
              style={{ width: "223px" }}
              variant="outlined"
              defaultValue={language}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="BiLingual">BiLingual</MenuItem>
            </TextField>
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="creator"
              label="Creator"
              variant="outlined"
              defaultValue={creator}
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <Input
              id="imgUrl"
              type="file"
              label="Poster Image"
              style={{ display: "none" }}
              variant="outlined"
              accept=".jpg,.png,.jpeg"
              onChange={(e) => {
                setImg(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <img
              width="50px"
              height="50px"
              src={image}
              alt=""
              onClick={(e) => $("#imgUrl").trigger("click")}
              style={{ marginLeft: "-50px" }}
            ></img>
            <label className="ml-4 text-secondary">Poster Image</label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="3" className="mt-4">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="priceGroup"
              select
              label="PriceGroup"
              style={{ width: "223px" }}
              variant="outlined"
              defaultValue={priceGroup}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </TextField>
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="originalPrice"
              label="Original Price"
              variant="outlined"
              defaultValue={originalPrice}
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="description"
              label="Description"
              variant="outlined"
              style={{ resize: "none", width: "223px" }}
              defaultValue={description}
              multiline
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="3" className="mt-4">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="discountPercentage"
              label="discound %"
              variant="outlined"
              defaultValue={discountPercentage}
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="stocks"
              label="stocks"
              variant="outlined"
              type="number"
              defaultValue={stocks}
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="weight"
              label="weight"
              variant="outlined"
              endAdornment={<InputAdornment position="end">gms</InputAdornment>}
              defaultValue={weight}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="mt-4" columns="3">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="additionalDetails"
              label="Additional Details"
              variant="outlined"
              defaultValue={additionalDetails}
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="sale"
              label="Sales"
              variant="outlined"
              defaultValue={sale}
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="link"
              label="Link"
              variant="outlined"
              defaultValue={link}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="3" className="mt-4">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="bestSeller"
              select
              label="BestSeller"
              style={{ width: "223px" }}
              variant="outlined"
              defaultValue={bestSeller}
            >
              <MenuItem value="true">true</MenuItem>
              <MenuItem value="false">false</MenuItem>
            </TextField>
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "223px", height: "60px", fontSize: "15px" }}
              startIcon={<SaveIcon />}
              onClick={updatePosterFun}
            >
              Update
            </Button>
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <Button
              variant="contained"
              color="secondary"
              style={{ width: "223px", height: "60px", fontSize: "15px" }}
              startIcon={<DeleteIcon />}
              onClick={deletePosterFun}
            >
              Delete
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

function Poster(props) {
  const [search, setSearch] = React.useState("");
  const [select, setSelect] = React.useState({});
  const [skip1, setSkip1] = React.useState(props.skip);

  const [redirect, setRedirect] = React.useState({
    one: true,
    two: false,
    three: false,
  });
  function setSelected(data) {
    setSelect(data);
    setRedirect({
      one: false,
      two: false,
      three: true,
    });
  }

  return (
    <>
      <div>
        {redirect.two || redirect.three ? (
          <button
            className="btn"
            onClick={() => {
              props.getPosterFun();
              setRedirect({
                one: true,
                two: false,
                three: false,
              });
            }}
            style={{ position: "absolute" }}
          >
            {" "}
            <ArrowBackIcon />
          </button>
        ) : null}

        <h2 className="text-center">Posters</h2>
      </div>
      {redirect.one ? (
        <div>
          <div>
            <div class="wrap">
              <div class="search">
                <input
                  type="text"
                  class="searchTerm"
                  placeholder="Search"
                  onChange={(event) =>
                    setSearch(event.target.value.toLowerCase())
                  }
                />
              </div>
            </div>
            <button
              to="/admin/createPoster"
              className="btn"
              style={{ position: "absolute", right: "20px", top: "100px" }}
              onClick={() =>
                setRedirect({ one: false, two: true, three: false })
              }
            >
              <AddCircleOutlineIcon style={{ fontSize: "40px" }} />
            </button>
          </div>
          <div className=" my-custom-scrollbar table-wrapper-scroll-y">
            <table
              className="table table-hover mx-auto table-responsive"
              style={{ width: "98%" }}
            >
              <thead
                className="table-dark tableHead "
                style={{ height: "20px" }}
              >
                <tr className="tableRow">
                  <th style={{ width: "10%" }}>Image</th>
                  <th style={{ width: "15%" }}>Name</th>
                  <th style={{ width: "10%" }}>Creator</th>
                  <th style={{ width: "10%" }}>Category</th>
                  <th style={{ width: "15%" }}>SubCategory</th>
                  <th style={{ width: "5%" }}>language</th>
                  <th style={{ width: "5%" }}>originalPrice</th>
                  <th style={{ width: "5%" }}>stocks</th>
                  <th style={{ width: "5%" }}>Discount</th>
                  <th style={{ width: "10%" }}>price Group</th>
                </tr>
              </thead>
              <tbody>
                {search.length > 0
                  ? props.data
                      .filter(
                        (data) =>
                          data.name.toString().toLowerCase().includes(search) ||
                          data.creator
                            .toString()
                            .toLowerCase()
                            .includes(search) ||
                          data.weight
                            .toString()
                            .toLowerCase()
                            .includes(search) ||
                          data.sale.toString().toLowerCase().includes(search) ||
                          data.category.title
                            .toString()
                            .toLowerCase()
                            .includes(search) ||
                          data.subCategory.title
                            .toString()
                            .toLowerCase()
                            .includes(search) ||
                          data.originalPrice
                            .toString()
                            .toLowerCase()
                            .includes(search) ||
                          data.language.toLowerCase().includes(search) ||
                          data.priceGroup.toLowerCase().includes(search) ||
                          data.stocks.toString().toLowerCase().includes(search)
                      )
                      .map((v, i) => (
                        <PostRow key={i} data={v} setSelected={setSelected} />
                      ))
                  : props.data.map((v, i) => (
                      <PostRow key={i} data={v} setSelected={setSelected} />
                    ))}
              </tbody>
            </table>
            {props.skip > 0 ? (
              <>
                <div style={{ margin: "10px" }}>
                  <button
                    className="btn"
                    onClick={() => {
                      if (props.skip > 0) {
                        props.setSkip(skip1 - 10);
                        props.getPosterFun();
                      }
                    }}
                    style={{ position: "absolute" }}
                  >
                    {" "}
                    <ArrowBackIcon />
                  </button>
                </div>
              </>
            ) : null}
            {props.data.length > 0 ? (
              <>
                <div style={{ marginLeft: "1270px", marginBottom: "40px" }}>
                  <button
                    className="btn"
                    onClick={() => {
                      props.setSkip(skip1+10);
                      props.getPosterFun();
                    }}
                    style={{ position: "absolute" }}
                  >
                    <ArrowForwardIcon />
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
      {redirect.two ? (
        <CreatePoster
          catData={props.catData}
          subCatData={props.subCatData}
          matDimData={props.matDimData}
          getSubCategoryData={props.getSubCategoryData}
          setRedirect={setRedirect}
          getPosterFun={props.getPosterFun}
        />
      ) : null}
      {redirect.three ? (
        <UpdateAndDeletePoster
          data={select}
          catData={props.catData}
          subCatData={props.subCatData}
          getSubCategoryData={props.getSubCategoryData}
          setRedirect={setRedirect}
          getPosterFun={props.getPosterFun}
        />
      ) : null}
    </>
  );
}

function PostRow(props) {
  return (
    <tr
      style={{ cursor: "pointer" }}
      onClick={() => props.setSelected(props.data)}
    >
      <td style={{ width: "10%" }}>
        <img src={props.data.imgUrl} alt="" height="80px" width="80px" />
      </td>
      <td style={{ width: "15%" }}>{props.data.name}</td>
      <td style={{ width: "10%" }}>{props.data.creator}</td>
      <td style={{ width: "10%" }}>{props.data?.category.title}</td>
      <td style={{ width: "15%" }}>{props.data?.subCategory.title}</td>
      <td style={{ width: "5%" }}>{props.data.language}</td>
      <td style={{ width: "5%" }}>{props.data.originalPrice}</td>
      <td style={{ width: "5%" }}>{props.data.stocks}</td>
      <td style={{ width: "5%" }}>{props.data.discountPercentage}%</td>
      <td style={{ width: "10%" }}>{props.data.priceGroup}</td>
    </tr>
  );
}

function UpdateAndDeleteOrder(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    cover: {
      width: 160,
    },
  }));

  const classes = useStyles();

  const {
    _id,
    emailid,
    phonenumber,
    orderId,
    paymentId,
    total,
    created_at,
    status,
    address,
  } = props.data;

  const [stat, setStat] = React.useState(status);

  function updateOrderFun() {
    Axios.post(updateOrder, { orderId: _id, status: stat })
      .then((res) => {
        swal({
          title: res.data.message,
          icon: "success",
        }).then(() => {
          props.getOrderFun();
          props.setRedirect({
            one: true,
            two: false,
          });
        });
      })
      .catch((err) => {
        console.log(err);
        swal(err);
      });
  }

  return (
    <>
      <Grid className="text-center pt-5">
        <Grid.Row columns="3" className="mt-2">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="emailid"
              label="Email"
              variant="outlined"
              defaultValue={emailid || phonenumber}
              style={{ width: "300px" }}
              disabled
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="orderId"
              label="OrderId"
              variant="outlined"
              defaultValue={orderId}
              style={{ width: "300px" }}
              disabled
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="paymentId"
              label="PaymentId"
              variant="outlined"
              defaultValue={paymentId}
              style={{ width: "300px" }}
              disabled
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns="3" className="mt-4">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="total"
              label="Total"
              variant="outlined"
              defaultValue={total}
              style={{ width: "300px" }}
              disabled
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="created_at"
              label="Ordered_at"
              variant="outlined"
              defaultValue={created_at.split("T")[0]}
              style={{ width: "300px" }}
              disabled
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="status"
              select
              label="Status"
              style={{ width: "300px" }}
              variant="outlined"
              defaultValue={status}
              onChange={(e) => setStat(e.target.value)}
            >
              <MenuItem value="Order Confirmed">Order Confirmed</MenuItem>
              <MenuItem value="Order Dispatched">Order Dispatched</MenuItem>
              <MenuItem value="Order Shipped">Order Shipped</MenuItem>
              <MenuItem value="Order Delivered">Order Delivered</MenuItem>
            </TextField>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns="2" className="mt-4">
          <Grid.Column style={{ width: "66%" }}>
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              defaultValue={address}
              style={{ width: "760px" }}
              disabled
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "300px", height: "60px", fontSize: "15px" }}
              startIcon={<SaveIcon />}
              onClick={updateOrderFun}
            >
              Update
            </Button>
          </Grid.Column>
        </Grid.Row>

        {props.data.itemDetails.map((v, i) => (
          <Grid.Row key={i} style={{ width: "35%", margin: "20px auto" }}>
            <Card className={classes.root}>
              <CardMedia className={classes.cover} image={v.imgUrl} title="" />
              <div className={classes.details}>
                <CardContent style={{ textAlign: "left" }}>
                  <Typography component="h6" variant="h6">
                    {v.name}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Material: {findMat(v.Material)}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Dimension: {findDim(v.Dimension)}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Price: ₹{v.originalPrice}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Quantity: {v.quantity}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid.Row>
        ))}
      </Grid>
    </>
  );
}

function Order(props) {
  const [search, setSearch] = React.useState("");
  const [select, setSelect] = React.useState({});

  const [redirect, setRedirect] = React.useState({
    one: true,
    two: false,
  });

  function setSelected(data) {
    setSelect(data);
    setRedirect({
      one: false,
      two: true,
    });
  }

  return (
    <>
      <div>
        {redirect.two ? (
          <button
            className="btn"
            onClick={() => {
              props.getOrderFun();
              setRedirect({
                one: true,
                two: false,
              });
            }}
            style={{ position: "absolute" }}
          >
            {" "}
            <ArrowBackIcon />
          </button>
        ) : null}

        <h2 className="text-center">Orders</h2>
      </div>
      {redirect.one ? (
        <div>
          <div class="wrap">
            <div class="search">
              <input
                type="text"
                class="searchTerm"
                placeholder="Search"
                onChange={(event) =>
                  setSearch(event.target.value.toLowerCase())
                }
              />
            </div>
          </div>
          <div className=" my-custom-scrollbar table-wrapper-scroll-y">
            <table
              className="table table-hover mx-auto table-responsive"
              style={{ width: "98%" }}
            >
              <thead
                className="table-dark tableHead "
                style={{ height: "20px" }}
              >
                <tr className="tableRow">
                  <th style={{ width: "25%" }}>User</th>
                  <th style={{ width: "25%" }}>Order Id</th>
                  <th style={{ width: "25%" }}>Payment Id</th>
                  <th style={{ width: "25%" }}>Status</th>
                  <th style={{ width: "20%" }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {search.length > 0
                  ? props.data
                      .filter(
                        (data) =>
                          (data?.emailid || data?.phonenumber)
                            .toString()
                            .toLowerCase()
                            .includes(search) ||
                          data.orderId
                            .toString()
                            .toLowerCase()
                            .includes(search) ||
                          data.paymentId
                            .toString()
                            .toLowerCase()
                            .includes(search) ||
                          data.status
                            .toString()
                            .toLowerCase()
                            .includes(search) ||
                          data.total.toString().toLowerCase().includes(search)
                      )
                      .map((v, i) => (
                        <OrderRow key={i} data={v} setSelected={setSelected} />
                      ))
                  : props.data.map((v, i) => (
                      <OrderRow key={i} data={v} setSelected={setSelected} />
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {redirect.two ? (
        <UpdateAndDeleteOrder
          data={select}
          setRedirect={setRedirect}
          getOrderFun={props.getOrderFun}
        />
      ) : null}
    </>
  );
}

function OrderRow(props) {
  return (
    <tr
      style={{ cursor: "pointer" }}
      onClick={() => props.setSelected(props.data)}
    >
      <td style={{ width: "25%" }}>
        {props.data?.emailid || props.data?.phonenumber}
      </td>
      <td style={{ width: "25%" }}>{props.data.orderId}</td>
      <td style={{ width: "25%" }}>{props.data.paymentId}</td>
      <td style={{ width: "25%" }}>{props.data.status}</td>
      <td style={{ width: "20%" }}>₹{props.data.total}</td>
    </tr>
  );
}

function Discount(props) {
  const [discount, setDiscount] = React.useState("");
  const [category, setCategory] = React.useState("");

  function setValue() {
    var a = props.catData.filter((v) => v.title === $(`#category`).text());
    setCategory(a[0]._id);
  }

  function updateDiscount() {
    setValue();
    Axios.post(updateCategory, {
      categoryId: category,
      discountPercentage: discount,
    })
      .then((res) => {
        swal("Successfully Updated!!!", "", "success");
      })
      .catch((err) => {
        swal(err);
      });
  }

  return (
    <>
      <Grid className="text-center pt-5">
        <Grid.Row columns="3" className="mt-4">
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="category"
              style={{ width: "223px" }}
              select
              variant="outlined"
              label="Category"
            >
              {props.catData.map((v, i) => (
                <MenuItem key={i} value={v._id} name={v._id}>
                  {v.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <TextField
              id="discountPercentage"
              label="discound %"
              variant="outlined"
              onChange={(e) => setDiscount(e.target.value)}
            />
          </Grid.Column>
          <Grid.Column style={{ width: "33%" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ width: "223px", height: "60px", fontSize: "15px" }}
              startIcon={<SaveIcon />}
              onClick={updateDiscount}
            >
              Update
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

const AdminLogin = (props) => {
  const [emailid, setEmailId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginBody, setLoginBody] = React.useState({
    emailid: "",
    password: "",
  });

  function loginReq(loginBody) {
    Axios.post(login, loginBody)
      .then((res) => {
        if (res.data.message === "Logged in successfully!!!") {
          if (res.data.user.isAdmin) {
            props.setIsLogged(true);
            props.setUserData(res.data);
          } else {
            swal("Oops", "You are not a Admin", "error");
          }
        } else {
          swal("Oops", res.data.message, "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="loginPage p-5 mx-auto d-block">
        <img
          className="mx-auto d-block"
          id="ehsLogoImg"
          src={EhsLogo}
          alt="Ehs Logo"
        />

        <p id="ehsLogoLabel" className="text-center mt-3">
          Log Into your account
        </p>

        <input
          className="mx-auto d-block mt-3"
          id="loginUserEmail"
          type="text"
          onChange={(e) => {
            setEmailId(e.target.value);
            setLoginBody({ emailid: e.target.value, password: password });
          }}
          placeholder="Username/Email Address"
        />

        <input
          className="mx-auto d-block mt-3"
          id="loginUserPass"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setLoginBody({ emailid: emailid, password: e.target.value });
          }}
          placeholder="Password"
        />
        <button
          id="loginBtn"
          className="mt-2"
          style={{ marginLeft: "13px" }}
          onClick={() => loginReq(loginBody)}
        >
          Log In
        </button>
      </div>
    </>
  );
};

export default function AdminPage() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [posterData, setPosterData] = React.useState([]);
  const [categoryData, setCategoryData] = React.useState([]);
  const [userData, setUserData] = React.useState({});
  const [subCategoryData, setSubCategoryData] = React.useState([]);
  const [materialData, setMaterialData] = React.useState([]);
  const [setCategoryId] = React.useState("");
  const [skip, setSkip] = React.useState(0);
  const [limit] = React.useState(10);

  const [orderData, setOrderData] = React.useState([]);

  function updateDiscount() {
    setRedirect({ one: false, two: false, three: true });
  }

  function getOrderFun() {
    Axios.get(getOrders)
      .then((res) => {
        setOrderData(res.data.orders);
      })
      .catch((err) => console.log(err));
    setRedirect({ one: false, two: true });
  }

  function getPosterData() {
    Axios.get(getArtWorks, {
      params: {
        skip: skip,
        limit: limit,
      },
    })
      .then((res) => {
        setPosterData(res.data.posterData);
      })
      .catch((err) => console.log(err));
  }

  function getCategoryData(token) {
    Axios.get(getCategory, config(token))
      .then((res) => {
        setCategoryData(res.data.category);
      })
      .catch((err) => console.log(err));
  }

  function getMaterialData(token) {
    Axios.get(getMaterial, config(token))
      .then((res) => {
        setMaterialData(res.data.materialDimension);
      })
      .catch((err) => console.log(err));
  }

  function getSubCategoryData(token, categoryId) {
    Axios.get(getSubCategory, {
      params: {
        categoryId: categoryId,
      },
    })
      .then((res) => {
        setSubCategoryData(res.data.subCategory);
      })
      .catch((err) => console.log(err));
  }

  const [redirect, setRedirect] = React.useState({
    one: false,
    two: false,
    three: false,
  });

  function getPosterFun(token) {
    getPosterData(token);
    getCategoryData(token);
    getSubCategoryData(token);
    getMaterialData(token);
    setRedirect({ one: true, two: false });
  }

  return (
    <>
      {!isLogged ? (
        <AdminLogin setIsLogged={setIsLogged} setUserData={setUserData} />
      ) : (
        <>
          {" "}
          <div className="text-center mt-2 mb-2">
            <button
              className="btn btn-dark"
              onClick={() => getPosterFun(userData.token)}
            >
              Art Works
            </button>

            <button className="btn btn-dark ml-3" onClick={() => getOrderFun()}>
              Orders
            </button>

            <button
              className="btn btn-dark ml-3"
              onClick={() => {
                getPosterFun(userData.token);
                updateDiscount();
              }}
            >
              Update Discount
            </button>
          </div>
          {redirect.one ? (
            <Poster
              data={posterData}
              catData={categoryData}
              subCatData={subCategoryData}
              matDimData={materialData}
              getSubCategoryData={getSubCategoryData}
              setCategoryId={setCategoryId}
              token={userData.token}
              getPosterFun={getPosterFun}
              setSkip={setSkip}
              skip={skip}
            />
          ) : null}
          {redirect.two ? (
            <Order data={orderData} getOrderFun={getOrderFun} />
          ) : null}
          {redirect.three ? <Discount catData={categoryData} /> : null}
        </>
      )}
    </>
  );
}
