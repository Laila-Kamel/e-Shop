import React from "react";
import style from "./ColorVariant.module.scss";
import { useState, useEffect } from "react";
import { getVariantColor } from "../../services";

const ColorVariant = ({ title,productid,setProductId }) => {
  const [colors, setColor] = useState([]);
//   const [chosenColor,setChosenColor]=useState("");
//   const [chosenID, setChosenID]=useState(productid);

  useEffect(() => {
    const wrapper = async () => {
      const data = await getVariantColor(title);
      console.log(data);
      const colors = data.map((item) => ({color:item.color,id:item.id}));
      console.log(colors);
      setColor(colors);
    };
    wrapper();
  }, []);
  
  return (
    <main className={style._Container}>
        <p>Color</p>
    {
        // <p>Color</p>
      colors.map((color)=>(
        <div className={style.Color_Container} key={color.id}>
        <p>{color.color}</p>
        <div style={{backgroundColor:color.color, width:30,height:30,borderRadius:'50%',zIndex:9}} className={style.radioBtn}>
        <input type="radio" name="color" className={style._radio} value={color.color} onChange={()=>setProductId(color.id)} />
        </div>
        </div>))
        // <Color key={color.id} colorprop={color.color}/>
      }
    </main>
  );
};

export default ColorVariant;
