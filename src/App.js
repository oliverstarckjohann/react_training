import React, { useState } from "react";
import styled from "styled-components/macro";
import JournalForm from "./components/JournalForm";

export default function App() {
  const [journals, setJournals] = useState([{date: '19.06.2022', title: 'Dancing in Purgatory.', content: 'Nice Location, nice People.'},{date: '20.06.2022', title: 'Working in the office', content: 'Happy Monday!'}]);

  function addJournal(journal){
    setJournals([...journals, journal]);
  }

  return (
    <>
      <ContentBoard className="App">
        <h1>MobileJournal</h1>
        <ul>
        {journals.map(function(journal){
          return(
            <li>
            <p>{journal.date}</p>
            <h2>{journal.title}</h2>
            <p>{journal.content}</p>
            </li>
          );
        })}
        </ul> 
        <h2>New Entry:</h2>
        <JournalForm onSubmit={addJournal} /> 
      </ContentBoard>
    </>
  );
}

const ContentBoard = styled.div`
  font-family: sans-serif;
  width: 380px;
  background-color: #FFFFFF;
  box-shadow 0.4em 0.4em 1em #F5F5F5;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;
