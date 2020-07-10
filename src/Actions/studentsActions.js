import axios from "axios";
import { GET_STUDENTS } from "./types";
const API_URL = "http://localhost:3000/getstudents";



const getStudents = () => (dispatch) => {
  console.log("i am in getStudents action");
  axios
    .get(`${API_URL}`,{  headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
})
    .then((res) => {
      console.log("Students data", res.data);
      dispatch({
        type: GET_STUDENTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log("error", err));
};



export {getStudents};
