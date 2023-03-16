import {
  URL_PATTERN,
  PASSWORD_PATTERN,
  EMAIL_PATTERN,
  PIVA_PATTERN,
  TELEPHONE_PATTERN,
} from "./pattern";

export const validationUserForm = (user) => {
  const errorObj = {};

  const now = new Date(Date.now());

  if (user.name === "") {
    errorObj.name = "Name is mandatory";
  }
  if (user.surname === "") {
    errorObj.surname = "Surname is mandatory";
  }
  if (user.username.length < 3 || user.username.length > 50) {
    errorObj.username = "Username must be between 3 and 50 characters";
  }
  if (!user.password.match(PASSWORD_PATTERN)) {
    errorObj.password =
      "password must be between 7 and 15 characters and must contain at least one number and one lowercase letter and one uppercase letter and a special character";
  }

  if (user.email === "") {
    errorObj.email = "Email is mandatory or incorrect";
  }
  if (user.email !== "" && !user.email.match(EMAIL_PATTERN)) {
    errorObj.email = "email is incorrect";
  }

  if (user.dob === "") {
    errorObj.dob = "Date of Birth is mandatory";
  }
  if (user.dob >= now.toISOString().slice(0, 10)) {
    errorObj.dob = "Date of Birth must be in the past";
  }

  return errorObj;
};
export const validationGalleryForm = (gallery) => {
  const errorObj = {};

  if (gallery.name === "") {
    errorObj.name = "Name is mandatory";
  }

  if (gallery.email === "") {
    errorObj.email = "Email is mandatory or incorrect";
  }
  if (gallery.email !== "" && !gallery.email.match(EMAIL_PATTERN)) {
    errorObj.email = "email is incorrect";
  }

  if (gallery.username.length < 3 || gallery.username.length > 75) {
    errorObj.username = "Username must be between 3 and 75 characters";
  }

  if (!gallery.password.match(PASSWORD_PATTERN)) {
    errorObj.password =
      "password must be between 7 and 15 characters and must contain at least one number and a lowercase letter and an uppercase letter and a special character";
  }
  if (!gallery.pIva.match(PIVA_PATTERN)) {
    errorObj.pIva = "P.Iva must have 11 number";
  }
  if (gallery.address === "") {
    errorObj.address = "Address is mandatory";
  }
  if (gallery.telephone === "") {
    errorObj.telephone = "Telephone is mandatory ";
  }
  if (!gallery.telephone.match(TELEPHONE_PATTERN)) {
    errorObj.telephone = "Telephone must be only numbers";
  }
  if (gallery.firstImgUrl !== "" && !gallery.firstImgUrl.match(URL_PATTERN)) {
    errorObj.firstImgUrl = "Url not valid";
  }
  if (gallery.secondImgUrl !== "" && !gallery.secondImgUrl.match(URL_PATTERN)) {
    errorObj.secondImgUrl = "Url not valid";
  }
  if (gallery.thirdImgUrl !== "" && !gallery.thirdImgUrl.match(URL_PATTERN)) {
    errorObj.thirdImgUrl = "Url not valid";
  }

  return errorObj;
};
export const validationArtworkForm = (artwork) => {
  const errorObj = {};
  const now = new Date(Date.now());
  if (artwork.artist === "") {
    errorObj.artist = "Artist is mandatory";
  }
  if (artwork.title === "") {
    errorObj.title = "Title is mandatory";
  }
  if (artwork.year === "") {
    errorObj.year = "Year is mandatory";
  }
  if (artwork.year >= now.toISOString().slice(0, 10)) {
    errorObj.year = "Year must be in the past";
  }
  if (artwork.size === "") {
    errorObj.size = "Size is mandatory";
  }
  if (artwork.material === "") {
    errorObj.material = "Material is mandatory";
  }
  if (artwork.imgUrl === "") {
    errorObj.imgUrl = "Image is mandatory";
  }
  if (artwork.imgUrl !== "" && !artwork.imgUrl.match(URL_PATTERN)) {
    errorObj.imgUrl = "Url not valid";
  }

  return errorObj;
};
export const validationTagForm = (tag) => {
  const errorObj = {};
  if (tag.name === "") {
    errorObj.name = "Name is mandatory";
  }
  if (tag.color === "") {
    errorObj.color = "Color is mandatory";
  }
  return errorObj;
};
export const validationExhibitForm = (exhibit) => {
  const errorObj = {};
  if (exhibit.name === "") {
    errorObj.name = "Name is mandatory";
  }
  if (exhibit.start === "") {
    errorObj.start = "Start is mandatory";
  }
  if (exhibit.end === "") {
    errorObj.end = "End is mandatory";
  }
  if (exhibit.firstImgUrl !== "" && !exhibit.firstImgUrl.match(URL_PATTERN)) {
    errorObj.firstImgUrl = "Url not valid";
  }
  if (exhibit.secondImgUrl !== "" && !exhibit.secondImgUrl.match(URL_PATTERN)) {
    errorObj.secondImgUrl = "Url not valid";
  }
  if (exhibit.thirdImgUrl !== "" && !exhibit.thirdImgUrl.match(URL_PATTERN)) {
    errorObj.thirdImgUrl = "Url not valid";
  }
  return errorObj;
};
