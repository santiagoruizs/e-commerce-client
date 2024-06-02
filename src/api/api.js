
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
    console.log("Error: "+err)
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

export const getProducts = async () => {
    try{
    const response = await fetch('http://localhost:8000/products',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          }
    });
    return response.json()
    }catch(err){
        console.log(err)
        return err
    }
}

export const getTopProducts = async () => {
    try{
    const response = await fetch('http://localhost:8000/products/top',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          }
    });
    return response.json()
    }catch(err){
        console.log(err)
        return err
    }
}

export const getProduct = async (id) => {
    try{
    const response = await fetch('http://localhost:8000/products/'+id,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          }
    });
    return response.json()
    }catch(err){
        console.log(err)
        return err
    }
}

export const addCartItem = async (user_id, product_id, quantity) => {
    try{
    const response = await fetch('http://localhost:8000/carts/'+user_id,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({product_id, quantity})
    });
    return response.json()
    }catch(err){
        console.log(err)
        return err
    }
}

export const getOpenCart = async (user_id) => {
    try{
    const response = await fetch('http://localhost:8000/carts/open/'+user_id,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          }
    });
    return response.json()
    }catch(err){
        console.log(err)
        return err
    }
}

export const cartCheckout = async (cart_id) => {
    try{
    const response = await fetch('http://localhost:8000/carts/'+cart_id+'/checkout',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          }
    });
    return response.json()
    }catch(err){
        console.log(err)
        return err
    }
}

export const getOrders = async (id) => {
    try{
    const response = await fetch('http://localhost:8000/orders/'+id,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
          }
    });
    return response.json()
    }catch(err){
        console.log(err)
        return err
    }
}

export const deleteCartItem = async (cart_id, product_id) => {
    try{
    const response = await fetch('http://localhost:8000/carts/'+cart_id,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({"product_id" : product_id})
    });
    return response.json()
    }catch(err){
        console.log(err)
        return err
    }
}

// export const getTopProducts = async ({name, email, password}) => {
//     try{
//     const response = await fetch('http://localhost:8000/auth/signup',{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//           },
//         body: JSON.stringify({name, email, password})
//     });
//     return response.json()
//     }catch(err){
//         console.log(err)
//         return err
//     }
// }