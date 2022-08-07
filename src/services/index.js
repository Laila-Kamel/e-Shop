import { firestore } from "../firestore";

export const getProducts=async()=>{
    // const response=await fetch(`https://fakestoreapi.com/products/category/${category}`);
    // const data=await response.json();
    // console.log(data);
    // return data
    const collectionRef=firestore.collection("Product");
    const data=await collectionRef.get();
    const rawDocuments=data.docs;
    console.log(rawDocuments);
    console.log(rawDocuments[0].data());
    console.log(rawDocuments[0].id);
    const cleanedDocuments= rawDocuments.map((rawDoc)=>({...rawDoc.data(),id:rawDoc.id}));
    console.log(cleanedDocuments);
    return cleanedDocuments
}
export const getProductsImage=async()=>{
    // const response=await fetch(`https://fakestoreapi.com/products/${id}`);
    // const data=await response.json();
    // if(!data) throw new Error ("Not a valid Product");
    // return data
    const collectionRef=firestore.collection("Product");
    const data=await collectionRef.get();
    const rawDocuments=data.docs;
    const imgs=rawDocuments.map((rawDoc)=>({image:rawDoc.data().image,title:rawDoc.data().title}))
    console.log(imgs);
    return imgs
}

export const getProductById=async(id)=>{
    const collectionRef=firestore.collection("Product");
    const data=await collectionRef.get();
    const rawDocuments=data.docs;
    console.log(rawDocuments);
    // console.log(rawDocuments[0].data());
    // console.log(rawDocuments[0].id);
    // const cleanedDocuments= rawDocuments.map((rawDoc)=>({...rawDoc.data(),id:rawDoc.id})).find((rawDoc)=>{
        
    //     if(rawDoc.id==id){
    //         console.log(rawDoc.id); 
    //         return rawDoc
    //     }
   //});
   const filteredDocument= rawDocuments.find((fltrdDoc)=>fltrdDoc.id==id
    // {
    //     console.log(fltrdDoc.id);
    //     console.log(id);
     
)
// cleanedDocuments={...cleanedDocuments.data(),id:cleanedDocuments.id}
const cleanedDocument={...filteredDocument.data(),id:filteredDocument.id}
    console.log(cleanedDocument);
    return cleanedDocument
}

export const getVariantColor=async(title)=>{
    const collectionRef=firestore.collection("Product");
    const data=await collectionRef.get();
    const rawDocuments=data.docs;
    console.log(rawDocuments);
   const cleanedDocuments= rawDocuments.filter((fltrdDoc)=>
    fltrdDoc.data().title==title
).map(rawDoc=>({...rawDoc.data(),id:rawDoc.id}));
    console.log(cleanedDocuments);
    return cleanedDocuments
}