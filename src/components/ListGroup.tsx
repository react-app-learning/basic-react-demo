import { MouseEvent, useState } from "react";

interface Props {
    lists: string[];
    heading: string;
}

function ListGroup({lists, heading}: Props) {
  let [selectIndex, setSelectIndex] = useState(-1);
  const handleClick = (index:number) => setSelectIndex(index);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {lists.map((item, index) => (
          <li className= {selectIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={()=>{setSelectIndex(index)}}>
            {index}. {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
