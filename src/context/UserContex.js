import authService from "../services/AuthServices";

const context = {
    login: (identifier, password) => {
        if (identifier.length === 0 && password === 0) return false;
    
        const asyncFetchUser = async (identifier, password) => {
        let response = await authService.login(identifier, password);
        console.log(response.data.token);
        let responseCode = await authService.verifyToken(response.data.token);//Esto da error
        console.log("Esto es el responseCode: " + responseCode); 
        if (response.hasError) return false; //{ status: 400, code: null };
    
        if (localStorage.getItem("content")) {
            localStorage.removeItem("content");
            localStorage.removeItem("code");
            localStorage.removeItem("hasLoggedIn", false);
        }
    
        localStorage.setItem("content", response.data.token);
        localStorage.setItem("code", responseCode);
        localStorage.setItem("hasLoggedIn", "true");
    
            return { status: response.status, code: responseCode };//"Logueado";
        }
        
        return asyncFetchUser(identifier, password);
    },
    logout: function() {
        localStorage.removeItem("content");
        localStorage.removeItem("code");
        localStorage.removeItem("hasLoggedIn");
    },
    getToken: function() {
        //const content = localStorage.getItem("content");
        return localStorage.getItem("content");
    },
    getCode: () => {
        return localStorage.getItem("code");
    },
    isUserLogged: () => {
        return !!localStorage.getItem("hasLoggedIn")
    }
}
export default context;