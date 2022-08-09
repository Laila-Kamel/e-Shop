import { createContext, useState } from 'react';

export const NoOfFaouritedItemsContext = createContext();

const NoOfFaouritedItemsProvider = ({ children }) => {
//   const [items, setItems] = useState([]);
  const [noOfFavouritedItems,setnoOfFavouritedItems]=useState(0);
  const context = {noOfFavouritedItems,setnoOfFavouritedItems};

  return (
    <NoOfFaouritedItemsContext.Provider value={context}>{children}</NoOfFaouritedItemsContext.Provider>
  );
};

export default NoOfFaouritedItemsProvider;