const authentication={
    isLoggedIn:false,
    async Login(){
        await fetch("http://localhost:3004/auth/v1/isAuthenticated",{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>res.json())
        .then(data=>{
            this.isLoggedIn=data.isAuthenticated;
        })
    }
}

export default authentication
