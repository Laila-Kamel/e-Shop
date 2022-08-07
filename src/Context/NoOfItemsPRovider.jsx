import { createContext, useState } from 'react';

export const NoOfItemsInCartContext = createContext();

const NoOfItemsInCartProvider = ({ children }) => {
//   const [items, setItems] = useState([]);
  const [noOfItems,setNoOfItems]=useState(0);
  const context = { noOfItems,setNoOfItems};

  return (
    <NoOfItemsInCartContext.Provider value={context}>{children}</NoOfItemsInCartContext.Provider>
  );
};

export default NoOfItemsInCartProvider;