import { MouseEvent, useState } from "react";

function ListGroup() {
  const lists = ["北京","上海","广州","深圳"];
  let [selectIndex, setSelectIndex] = useState(-1);
  const handleClick = (index:number) => setSelectIndex(index);
  return (
    <>
      <h1>ListGroup1</h1>
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
