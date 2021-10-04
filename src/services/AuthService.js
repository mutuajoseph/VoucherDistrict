import http from "../http-common";
class AuthService{
    registerUser(data) {
        console.log(data)
        return http.post("/signUp",data);        
    }

    loginUser(data) {
        return http.post("/authenticate",data);
    } 


}
export default new AuthService();
