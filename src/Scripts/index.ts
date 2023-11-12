import axios from "axios";


const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_SERVER_URI,
  baseURL: "http://localhost:5000",
  withCredentials: true,
  
});

instance.interceptors.request.use(
  (config: any) => {
    //request 에 쿠키 넣기 
    // const cookies = new Cookies()
    // config.headers ={
    //   AccessToken: cookies.get("AccessToken"),
    //   RefreshToken: cookies.get("RefreshToken"),
    // }
      
  

    
    

    



   
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
