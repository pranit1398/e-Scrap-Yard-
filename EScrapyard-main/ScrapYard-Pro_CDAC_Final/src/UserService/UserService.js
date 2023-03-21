import axios from "axios"
const API_BASE_URL = "http://localhost:8082/findalluser";
const baseUrl="http://localhost:8082/admin"


 class UserService {
 
    getUsers(){
        return axios.get(API_BASE_URL)
           
    }

    deleteUser(id){
        return axios.delete(baseUrl+"/"+id);
    }
    
    getProduct(){
        return axios.get("http://localhost:8082/getAllStock");
    }

    placeorder(){
        return axios.post("http://localhost:8082/placeOrder");
    }

    getDealer(role){
      ;
    }
    
}
export default new UserService()

