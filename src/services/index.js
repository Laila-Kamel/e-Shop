import { firestore } from "../firestore";

export const getProducts=async()=>{
    const collectionRef=firestore.collection("Product");
    const data=await collectionRef.get();
    const rawDocuments=data.docs;
    const cleanedDocuments= rawDocuments.map((rawDoc)=>({...rawDoc.data(),id:rawDoc.id}));
    return cleanedDocuments
}
export const getProductsImage=async()=>{
    const collectionRef=firestore.collection("Product");
    const data=await collectionRef.get();
    const rawDocuments=data.docs;
    const imgs=rawDocuments.map((rawDoc)=>({image:rawDoc.data().image,title:rawDoc.data().title}))
    console.log(imgs);
    return imgs
}

export const getProductById=async(id)=>{
    const collectionRef=firestore.collection("Product");
    const docRef=collectionRef.doc(id);
   const rawDoc=await docRef.get();
   const cleanedDocument={id:rawDoc.id,...rawDoc.data()}
    console.log(cleanedDocument);
    return cleanedDocument
}

export const getVariantColor=async(title)=>{
    const collectionRef=firestore.collection("Product");
    const data=await collectionRef.get();
    const rawDocuments=data.docs;
    console.log(rawDocuments);
   const cleanedDocuments= rawDocuments.filter((fltrdDoc)=>
    fltrdDoc.data().title==title)
    .map(rawDoc=>({...rawDoc.data(),id:rawDoc.id}));
    console.log(cleanedDocuments);
    return cleanedDocuments
}
export const isFavourited=async(favourite,id)=>{
    const collectionRef=firestore.collection("Product");
    const docRef=collectionRef.doc(id);
    // console.log(docRef.get());
    await docRef.update({favourited:!favourite})
    return true;
}

export const getListOfFavouritedItems=async()=>{
    const collectionRef=firestore.collection("Product");
    const data=await collectionRef.get();
    const rawDocuments=data.docs;
    const cleanedDocuments= rawDocuments.filter(rawDoc=>(rawDoc.data().favourited==true)).map((rawDoc)=>({...rawDoc.data(),id:rawDoc.id}));
    return cleanedDocuments
}

export const updateQuantity=async(id,orderedQuantity,quantity)=>{
    const collectionRef=firestore.collection("Product");
    const docRef=collectionRef.doc(id);
    // console.log(docRef.get());
    await docRef.update({quantity:quantity-orderedQuantity})
    return true;
}
export const addConfirmedOrder=async(items)=>{
    const collectionRef=firestore.collection('Cart');
    // items.forEach(async(element) => await collectionRef.add(element));
    // const collectionRef=firestore.collection('Cart');
    // return items.map(async(item)=>await collectionRef.add(items))
    // const newOrder=await collectionRef.add(item);
    // return newOrder;

    items.map(item=>{
        collectionRef.doc('one').collection('items').doc().set(item)
    })
    
    // var landmarks = Promise.all(items.map((item)=>{
    //     collectionRef.doc().set(item)
    // }))
    console.log("added");
        // citiesRef.doc('SF').collection('landmarks').doc().set({
        //     name: 'Golden Gate Bridge',
        //     type: 'bridge'
        // }),
        // citiesRef.doc('SF').collection('landmarks').doc().set({
        //     name: 'Legion of Honor',
        //     type: 'museum'
        // })])
}
