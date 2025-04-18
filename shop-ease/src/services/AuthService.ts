import { LoginResponse } from "../types/userTypes";

const USER_KEY = "shopease_user"

const AuthService = {
    saveUser(user: LoginResponse){
        localStorage.setItem(USER_KEY, JSON.stringify(user))
    },
    getUser(): LoginResponse | null{
        const user = localStorage.getItem(USER_KEY)
        return user? JSON.parse(user) : null
    },
    logout(){
        localStorage.removeItem(USER_KEY)
    },
}
export default AuthService;