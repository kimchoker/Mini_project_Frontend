import axios from "axios";


const Backend = "http://localhost:8111"; // 시연시에는 실제 ip로 바꿔야함

const AxiosApi = {

    // 뉴스 번호로 뉴스 정보 Get 방식 가져오기
    getNews : async(news_no) => {
        return await axios.get(Backend + `/News?news_no=${news_no}`);
    },

    

    getNewsInfo : async(news_no) => {
        return await axios.get(Backend + `/News/View?news_no=${news_no}`);
    },
    
    // 팀 랭킹 Get 방식

    getTeamRanking : async(team) => {
        return await axios.get(Backend + `/?team=${team}`);
    },

    // 뉴스 타이틀 뉴스 번호 Get 방식 가죠오기

    getNews : async(news_no) => {
        return await axios.get(Backend + `/News?news_no=${news_no}`);
    },

    // 뉴스 번호로 뉴스 정보 Get 방식 가죠오기

    getNewsInfo : async(news_no) => {
        return await axios.get(Backend + `/News/View?news_no=${news_no}`);
    },

    // 로그인

    memberLogin: async(id, pw) => { 
        const login = {
            id : id, 
            pwd : pw,

        };
        return await axios.post(Backend + "/login", login);
    },

    // 닉네임 중복 조회

    memberNickname: async(nickname) => {
        return await axios.get(Backend + `/nickname?nickname=${nickname}`);
    },
    
    // 회원조회 

    memberGet : async(id) => {
        
        return await axios.get(Backend + `/member?id=${id}`);
        
    },

    // 회원가입 여부 확인

    memberRegCheck : async(id) => {
        return await axios.get(Backend + `/check?id=${id}`);
    },

    // 회원가입
    
    memberReg : async(id, pwd, name, email) => {
        const member ={
            id : id,
            pwd: pwd,
            name: name,
            mail: email
    };
    return await axios.post(Backend + "/new", member);
    },

    // 회원 탈퇴
    memberDel: async(id) => {
        const del = {
            id: id
        };
        return await axios.post(Backend + "/delete", del);
    },

    // 비밀번호 찾기
    findPw: async (id) => {
        const data = {
          id: id
        };
      
        const response = await axios.post(Backend + "/findpw", data);
        const isSent = response.data;
        console.log(isSent);
        return isSent;
      }
}

export default AxiosApi;