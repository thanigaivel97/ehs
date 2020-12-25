/*jshint esversion: 6 */
const url = "https://ehsapi1att.herokuapp.com/";

const login = url + "auth/login";
const signup = url + "auth/signup";
const updateUser = url + "auth/updateUser";
const getUsers = url + "auth/getUsers";

const getPoster = url + "posters/getPoster";
const createPoster = url + "posters/createPoster";
const updatePoster = url + "posters/updatePoster";
const deletePoster = url + "posters/deletePoster";

const getMaterial = url + "material/getMaterial";
const createMaterial = url + "material/createMaterial";
const updateMaterial = url + "material/updateMaterial";
const deleteMaterial = url + "material/deleteMaterial";

const createCategory = url + "category/createCategory";
const updateCategory = url + "category/updateCategory";
const getCategory = url + "category/getCategory";
const deleteCategory = url + "category/deleteCategory";

const createSubCategory = url + "subCategory/createSubCategory";
const getSubCategory = url + "subCategory/getSubCategory";
const deleteSubCategory = url + "category/deleteSubCategory";
const updateSubCategory = url + "category/updateSubCategory";

const createOrder = url + "orders/createOrder";
const getOrders = url + "orders/getOrders";
const updateOrders = url + "orders/updateOrders";
const deleteOrder = url + "orders/deleteOrder";


const config = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

const Material = {
  one: "125 Micron (non-tearable)",
  two: "Self-adhesive (premium)",
  three: "Self-adhesive 3mm sunboard (premium)",
};
const Dimension = {
  one: "16in by 24in",
  two: "19in by 27in",
  three: "24in by 36in",
};


const findMat = (mat) => {
  if (mat.one) return Material.one;
  else if (mat.two) return Material.two;
  else if (mat.three) return Material.three;
};

const findDim = (dim) => {
  if (dim.one) return Dimension.one;
  else if (dim.two) return Dimension.two;
  else if (dim.three) return Dimension.three;
};


  function buildFormData(formData, data, parentKey) {
    if (
      data &&
      typeof data === "object" &&
      !(data instanceof Date) &&
      !(data instanceof File)
    ) {
      Object.keys(data).forEach((key) => {
        buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else {
      const value = data == null ? "" : data;

      formData.append(parentKey, value);
    }
  }

  function jsonToFormData(data) {
    const formData = new FormData();

    buildFormData(formData, data);

    return formData;
  }


export {
  url,
  login,
  updateUser,
  getPoster,
  createPoster,
  signup,
  updatePoster,
  deletePoster,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  createCategory,
  updateCategory,
  createSubCategory,
  getSubCategory,
  createOrder,
  getOrders,
  updateOrders,
  deleteOrder,
  getUsers,
  getCategory,
  deleteSubCategory,
  updateSubCategory,
  deleteCategory,
  config,
  findMat,
  findDim,
  jsonToFormData
};