import React, { useEffect, useState } from "react";

const Home = () => {
  const [currData, setData] = useState([]);
  const [pageno, setPageno] = useState(1);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page="+pageno)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.data); 
      });
  }, [pageno]);

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
      <button onClick={() => clickHandler(1)}>1</button>
      <button onClick={() => clickHandler(2)}>2</button>
    </div>
  );
};

export default Home;
