import axios from "axios";

const Backend = "http://localhost:8111"; 

const AxiosApi = {
    // 뉴스 shortContnet 정보 가죠오기
    getShortDetailNews : async(category,page) => {
        return await axios.get(Backend + `/News?cat=${category}&page=${page}`);
    },

    // Pagination 을 위해 뉴스 Total 갯수 조회 
    getNewsSize : async(category) => {
        return await axios.get(Backend + `/News/TotalPage?cat=${category}`);
    },

    // 뉴스 LongContnet 정보 가죠오기
    getLongDetailNews : async(news_no) => {
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
    }
}

export default AxiosApi;