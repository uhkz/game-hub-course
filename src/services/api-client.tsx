import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "eafd9d7f931e42f396b394452c4dc540",
  },
});
