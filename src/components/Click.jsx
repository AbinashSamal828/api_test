import React, { useState ,useEffect} from "react";

const Click = () => {
  //   const [currInput, setCurrInput] = useState("");
    // const [clicked, setClicked] = useState(false);
  const [xmar, setXMar] = useState(0);
  const [ymar, setYMar] = useState(0);
  const [coordinates, setCoordinates] = useState([]);
  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  return (
    <div
      style={{ backgroundColor: "black", width: "100vw", height: "100vh" }}
      onClick={(e) => {
        // console.log(e);
        const xmar = e.clientX;
        const ymar = e.clientY;
        // await setYMar(e.clientY);
        // await setXMar(e.clientX);
        setCoordinates((prevCoors)=>{
            console.log(xmar,ymar);
            return [...prevCoors,{xmar,ymar}];
        })
        console.log(coordinates);
        // setClicked(true);
      }}
    >
      {coordinates.map((coordinate) => {
        return <div
          style={{
            position: "absolute",
            left: `${coordinate.xmar-50}px`,
            top: `${coordinate.ymar-50}px`,
            backgroundColor: "red",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
        ></div>;
      })}
    </div>
  );
};

export default Click;
