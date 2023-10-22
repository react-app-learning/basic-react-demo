function ListGroup() {
  let lists = [
    { id: 1, addressName: "北京" },
    { id: 2, addressName: "上海" },
    { id: 3, addressName: "广州" },
    { id: 4, addressName: "深圳" },
    { id: 5, addressName: "成都" },
  ];

  return (
    <>
      <h1>First List</h1>
      <ul className="list-group">
        {lists.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.addressName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
