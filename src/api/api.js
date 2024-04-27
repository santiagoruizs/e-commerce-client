
export const logIn = async ({email, password}) => {
    try{
    const response = await fetch('http://localhost:8000/auth/login',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({email, password})
    });
    return response.json()
}catch(err){
    console.log(err)
    return err
}
}   

export const signUp = async ({name, email, password}) => {
    try{
    const response = await fetch('http://localhost:8000/auth/signup',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({name, email, password})
    });
    return response.json()
}catch(err){
    console.log(err)
    return err
}
} 
