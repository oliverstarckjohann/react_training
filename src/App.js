import React, { useState } from "react";
import styled from "styled-components/macro";

let appDataSource = [{ datakey: "home" }, { datakey: "outside" }];

export default function App() {
  const [statedata, setStatedata] = useState(appDataSource);

  statedata.forEach((dataitem) =>
    console.log(`${dataitem.datakey}` + " from foreach")
  );
  statedata.map((dataitem) => console.log(`${dataitem.datakey}` + " from map"));

  return (
    <>
      <ContentBoard className="App">
        <h2>Content from stateArray:</h2>
        {statedata.map((dataitem) => (
          <p>{dataitem.datakey} maped from state (statedata)</p>
        ))}
        <p>{statedata[0].dataitem} direct from array accessed (indexvalue)</p>
        <p>{statedata[1].dataitem} direct from array accessed (indexvalue)</p>
      </ContentBoard>
    </>
  );
}

const ContentBoard = styled.div`
  font-family: sans-serif;
  width: 180px;
  background-color: #fbf6b9;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;
