

export const getCategory=async(category)=>{
    const response=await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data=await response.json();
    console.log(data);
    return data
}
export const getProduct=async(id)=>{
    const response=await fetch(`https://fakestoreapi.com/products/${id}`);
    const data=await response.json();
    if(!data) throw new Error ("Not a valid Product");
    return data
}