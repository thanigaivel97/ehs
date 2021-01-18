/*jshint esversion: 9 */
import React from "react";
import Axios from "axios";
import {
  login,
  getPoster,
  config,
  getCategory,
  getSubCategory,
  getMaterial,
  createPoster,
  updatePoster,
  deletePoster,
  jsonToFormData,
} from "../../helper/apiPath";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Grid } from "semantic-ui-react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import defaultImage from "../../images/Artist.svg";
import { Input, TextField, MenuItem, InputAdornment } from "@material-ui/core";
import $ from "jquery";
import DeleteIcon from "@material-ui/icons/Delete";

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
    description: "",
    discountPercentage: "",
    stocks: 0,
    weight: "",
    additionalDetails: "",
    sale: "",
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
    description: false,
    discountPercentage: false,
    stocks: false,
    weight: false,
    additionalDetails: false,
    sale: false,
    material: false,
    dimension: false,
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
    "description",
    "discountPercentage",
    "stocks",
    "weight",
    "additionalDetails",
    "sale",
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
      } else if (single === "language" || single === "priceGroup") {
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

    console.log(newPoster);

    Axios.post(createPoster, jsonToFormData(newPoster), configImage)
      .then((res) => {
        console.log(res.data.message);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
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
              style={{ marginTop: "-20px" }}
            ></img>
            <label className="ml-4 text-secondary">
              Choose Poster Image
              <br />{" "}
              <span style={{ color: "grey", fontSize: "12px" }}>
                less than 150kb
              </span>
            </label>
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
    description,
    discountPercentage,
    stocks,
    weight,
    additionalDetails,
    sale,
  } = props.data;
  console.log(_id);

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
    originalPrice: originalPrice,
    priceGroup: priceGroup,
    description: description,
    discountPercentage: discountPercentage,
    stocks: stocks,
    weight: weight,
    additionalDetails: additionalDetails,
    sale: sale,
  };

  var allowed = [
    "name",
    "category",
    "subCategory",
    "language",
    "creator",
    "imgUrl",
    "originalPrice",
    "priceGroup",
    "description",
    "discountPercentage",
    "stocks",
    "weight",
    "additionalDetails",
    "sale",
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
      } else if (single === "language" || single === "priceGroup") {
        newPoster[single] = $(`#${single}`).text();
      } else {
        newPoster[single] = $(`#${single}`).val();
      }
    });
  }

  function deletePosterFun() {
    Axios.post(deletePoster, { posterId: _id })
      .then((res) => {
        console.log(_id);
        console.log(res.data.message);
        alert("Successfully Deleted ...Please Refresh");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  function updatePosterFun() {
    setValue();
    console.log(newPoster);
    Axios.post(
      updatePoster,
      jsonToFormData({ posterId: _id, ...newPoster }),
      configImage
    )
      .then((res) => {
        console.log(_id);
        console.log(res.data.message);
        alert("Successfully Updated...Please Refresh");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
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
              style={{ marginTop: "-20px" }}
            ></img>
            <label className="ml-4 text-secondary">
              Poster Image
              <br />{" "}
              <span style={{ color: "grey", fontSize: "12px" }}>
                less than 150kb
              </span>
            </label>
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
        <Grid.Row className="mt-4" columns="2">
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
        </Grid.Row>
        <Grid.Row columns="2" className="mt-4">
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

  const [redirect, setRedirect] = React.useState({
    one: true,
    two: false,
    three: false,
  });
  function setSelected(data) {
    console.log(data);
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
            onClick={() =>
              setRedirect({
                one: true,
                two: false,
                three: false,
              })
            }
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
                  <th style={{ width: "23%" }}>description</th>
                  <th style={{ width: "5%" }}>language</th>
                  <th style={{ width: "5%" }}>originalPrice</th>
                  <th style={{ width: "5%" }}>stocks</th>
                  <th style={{ width: "5%" }}>weight</th>
                  <th style={{ width: "5%" }}>sale</th>
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
                          data.originalPrice
                            .toString()
                            .toLowerCase()
                            .includes(search) ||
                          data.language.includes(search) ||
                          data.priceGroup.includes(search) ||
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
          </div>
        </div>
      ) : null}
      {redirect.two ? (
        <CreatePoster
          catData={props.catData}
          subCatData={props.subCatData}
          matDimData={props.matDimData}
        />
      ) : null}
      {redirect.three ? (
        <UpdateAndDeletePoster
          data={select}
          catData={props.catData}
          subCatData={props.subCatData}
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
      <td style={{ width: "23%" }}>
        {props.data.description.slice(0, 100)}....
      </td>
      <td style={{ width: "5%" }}>{props.data.language}</td>
      <td style={{ width: "5%" }}>{props.data.originalPrice}</td>
      <td style={{ width: "5%" }}>{props.data.stocks}</td>
      <td style={{ width: "5%" }}>{props.data.weight}</td>
      <td style={{ width: "5%" }}>{props.data.sale}</td>
      <td style={{ width: "10%" }}>{props.data.priceGroup}</td>
    </tr>
  );
}

export default function AdminPage() {
  const [data, setData] = React.useState({});
  const [posterData, setPosterData] = React.useState([]);
  const [categoryData, setCategoryData] = React.useState([]);
  const [subCategoryData, setSubCategoryData] = React.useState([]);
  const [materialData, setMaterialData] = React.useState([]);

  function getPosterData(token) {
    Axios.get(getPoster, config(token))
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

  function getSubCategoryData(token) {
    Axios.get(getSubCategory, config(token))
      .then((res) => {
        setSubCategoryData(res.data.subCategory);
      })
      .catch((err) => console.log(err));
  }

  const [redirect, setRedirect] = React.useState({
    one: false,
  });

  function getPosterFun() {
    getPosterData(data.token);
    getCategoryData(data.token);
    getSubCategoryData(data.token);
    getMaterialData(data.token);
    setRedirect({ one: true });
  }

  React.useEffect(() => {
    Axios.post(login, { emailid: "naveen@gmail.com", password: "1234" })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="text-center mt-2 mb-2">
        <button className="btn btn-dark" onClick={() => getPosterFun()}>
          Poster
        </button>
      </div>
      {redirect.one ? (
        <Poster
          data={posterData}
          catData={categoryData}
          subCatData={subCategoryData}
          matDimData={materialData}
        />
      ) : null}
    </>
  );
}
