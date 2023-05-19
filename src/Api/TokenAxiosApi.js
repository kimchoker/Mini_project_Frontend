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

  editInfo: async (id, nickname, favTeam, token) => {
      const editInfo = {
        id: id,
        nickname: nickname,
        favTeam: favTeam
      };
    
      return await axios.post(Backend + "/editinfo", editInfo, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      });
    },
};

export default TokenAxiosApi;