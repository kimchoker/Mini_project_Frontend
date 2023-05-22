import axios from "axios";
const Backend = "http://localhost:8111";

const TokenAxiosApi = {
  getToken : async(email, pwd) => {
    const token = {
      email : email,
      pwd : pwd
    };
    return await axios.post(Backend + "/auth", token, {
      headers: {
        'Content-Type' : 'application/json'
      }
    });
  },

  userInfo : async (token) => {
    return await axios.get(Backend + "/user", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  },

  editInfo: async (data) => {

      const updatedData = {
        id: data.id,
        pwd: data.pwd,
        nickname: data.nickname,
        favTeam: data.favTeam,
        token: data.token
      };
      console.log(data.token);
      return await axios.post(Backend + "/editinfo", updatedData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + data.token
        }
      });
    },
};

export default TokenAxiosApi;