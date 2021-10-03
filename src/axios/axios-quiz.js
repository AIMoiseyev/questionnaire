import axios from "axios";

export default axios.create({
  baseURL:
    "https://questionnaire-b3711-default-rtdb.europe-west1.firebasedatabase.app/",
});
