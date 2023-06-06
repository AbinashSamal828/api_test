import React, { useEffect, useState } from "react";

const Home = () => {
  const [currData, setData] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [totalPages,setTotalPages]=useState(0);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page="+pageno)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.data); 
        setTotalPages(data.total_pages);
      });
  }, [pageno]);
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} onClick={() => clickHandler(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };
  const clickHandler = (pno) => {
    setPageno(pno);
  };

  return (
    <div>
      {currData.map((user) => (
        <div key={user.id}>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          <img src={user.avatar} alt="Avatar" />
        </div>
      ))}
      {renderButtons()}
      {/* <button onClick={() => clickHandler(1)}>1</button>
      <button onClick={() => clickHandler(2)}>2</button> */}
    </div>
  );
};

export default Home;
