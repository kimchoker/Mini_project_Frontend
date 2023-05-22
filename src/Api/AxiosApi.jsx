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
        const loginData = {
          id: id,
          pwd: pw,
        };
      
        try {
          const response = await axios.post('/login', loginData);
          const { authToken } = response.data; // 서버에서 발급한 토큰 받아오기
      
          // 토큰 저장 (로컬 스토리지 등에 저장)
          localStorage.setItem('authToken', authToken);
      
          // 이후에 API 요청 시 헤더에 토큰 포함하여 보내기
          // axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
      
          return response.data; // 로그인 성공 시 추가 작업을 위해 필요한 데이터 반환
        } catch (error) {
          // 로그인 실패 처리
          throw new Error('로그인에 실패했습니다.');
        }


      },

    // 닉네임 중복 조회

    memberNickname: async(nickname) => {
        return await axios.get(Backend + `/nickname?nickname=${nickname}`);
    },
    
    // 회원조회 

    memberGet : async(id) => {
        try {
          const authToken = localStorage.getItem('authToken');
          
          if (authToken) {
            // 헤더에 토큰 포함하여 보내기
            axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
          } else {
            // 토큰이 없을 경우에 대한 처리
            throw new Error('로그인이 필요합니다.');
          }
      
          const response = await axios.get(`${Backend}/member?id=${id}`);
          // 데이터 처리 등 추가 작업 수행
          return response.data;

        } catch (error) {
          // 오류 처리
          throw new Error('회원 조회에 실패했습니다.');
        }
    },

    // 회원가입 여부 확인

    memberRegCheck : async(id) => {
        return await axios.get(Backend + `/check?id=${id}`);
    },

    // 회원가입
    
    memberReg : async(id, pwd, nickname) => {
        const member ={
            id : id,
            pwd: pwd,
            nickname: nickname,
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

    findPw: async(id) => {

        const data = {
            id: id
        }
        
        return await axios.post(Backend + "/findpw", data);
    },

    // 글번호, 제목, 날짜 조회
    Homeplate: async(boardTitle) => {
        return await axios.get(Backend + `/homeplate?boardTitle=${boardTitle}`);
    },

    // 내용 가져오기
    HomeContent : async(boardNo) => {
        return await axios.get(Backend + `/homeplate/contents?boardNo=${boardNo}`);
    },

    // 제목 검색
    HomeSearch : async(boardTitle) => {
        return await axios.get(Backend + `/homeplate/search?boardTitle=${boardTitle}`);
    },

    getSchedule : async(monthFilter) => {
        return await axios.get(Backend + `/schedule?monthFilter=${monthFilter}`);
    },
    Standings : async(winRatio) => {
        return await axios.get(Backend + `/standings?winRatio=${winRatio}`);
    }
    
}

export default AxiosApi;