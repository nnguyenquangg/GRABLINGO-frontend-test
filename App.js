import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [arrColor, setArrColor] = useState([
    "57c30a",
    "58589c",
    "2a3538",
    "c44bdc",
    "8ece0a",
    "d0aad8",
    "51e8e7",
    "8505b3",
    "8281",
    "689d0d",
    "cc9f0c",
    "cc9914",
    "35bb22",
    "d5c719",
    "bbe68d",
    "f5b10",
    "7c1699",
    "856677",
    "2843ff",
    "c593be",
    "3bb2e7",
    "cf5251",
    "a5c581",
    "432984",
    "ffa24b",
    "2022c1",
    "98ca63",
    "4259d",
    "d8ac45",
    "c2cc07",
    "8b3162",
    "460b8d",
    "60d6b6",
    "837c0c",
    "a855a7",
    "d8d059",
    "8c8a09",
    "41f955",
    "26c721",
    "5317ce",
    "178fee",
    "b94b37",
    "c584fa",
    "c62ab2",
    "ff60ba",
    "843ff4",
    "7a11db",
    "c48ff",
    "981cf3",
    "7fd157",
    "4b2ffb",
    "3f0a4b",
    "560b85",
    "46cd4e",
    "246408",
    "72cb93",
    "6d052e",
    "4310c0",
    "660338",
    "e71996",
    "6d199e",
    "fd8701",
    "8fd2df",
    "56bc59",
  ]);

  const [dragColor, setDragColor] = useState(null);

  const dragWord = (dragColor) => {
    setDragColor(dragColor);
  };
  const dropWord = (event, dropColor, arrColor) => {
    event.preventDefault();
    setArrColor(
      arrColor.map((color) => {
        if (color === dragColor) return dropColor;
        if (color === dropColor) return dragColor;
        return color;
      })
    );
  };

  return (
    <>
      <div style={{ width: "100wh", display: "block", padding: "10% 37%" }}>
        <div style={{ width: 400, display: "flex", flexWrap: "wrap" }}>
          {arrColor?.map((item) => {
            return (
              <div
                key={item}
                onDragOver={(event) => event.preventDefault()}
                name={`${item}`}
                onDrop={(event) => dropWord(event, item, arrColor)}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: `#${item}`,
                }}
              >
                <div
                  className="mover boxA"
                  draggable="true"
                  onDragStart={() => dragWord(item)}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: `#${item}`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
