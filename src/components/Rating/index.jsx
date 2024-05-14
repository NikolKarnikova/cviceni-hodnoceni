import { useState } from "react";
import { Star } from "../Star";
import "./style.css";

export const Rating = () => {
  const [value, setValue] = useState(0);

  const onSelect = ()=>{
    setValue=
  }
  return (
    <div className="rating">
      <div className="rating__value">{value}</div>
      <div className="rating__stars">
        <Star value={1} onSelect />
        <Star value={2} onSelect/>
        <Star value={3} onSelect/>
        <Star value={4} onSelect/>
        <Star value={5} onSelect/>
      </div>
    </div>
  );
};
