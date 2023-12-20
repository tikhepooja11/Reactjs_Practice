import axios from "axios";

const data = axios
  .get(
    "https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League"
  )
  .then((res) => console.log(res.data))
  .catch((error) => console.log(error));
