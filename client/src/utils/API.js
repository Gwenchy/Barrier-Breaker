import axios from "axios";

export default {
    getVideosId: function() {
        return axios.get("/routes/apiRoutes");
    }
}