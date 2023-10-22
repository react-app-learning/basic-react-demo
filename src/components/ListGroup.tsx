import { MouseEvent, useState } from "react";

function ListGroup() {
  let lists = [
    { id: 1, addressName: "北京" },
    { id: 2, addressName: "上海" },
    { id: 3, addressName: "广州" },
    { id: 4, addressName: "深圳" },
    { id: 5, addressName: "成都" },
  ];

  let [selectIndex, setSelectIndex] = useState(-1);
  const handleClick = (index:number) => setSelectIndex(index);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {lists.map((item, index) => (
          <li className= {selectIndex === index ? "list-group-item active" : "list-group-item"} key={item.id} onClick={()=>{setSelectIndex(index)}}>
            {index}. {item.addressName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
