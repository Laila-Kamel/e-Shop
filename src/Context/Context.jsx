import { createContext, useState } from 'react';

export const ItemsInCartContext = createContext();

const ItemsInCartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const context = { items, setItems};

  return (
    <ItemsInCartContext.Provider value={context}>{children}</ItemsInCartContext.Provider>
  );
};

export default ItemsInCartProvider;
