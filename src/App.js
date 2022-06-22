import React, { useState } from "react";
import styled from "styled-components/macro";
import JournalForm from "./components/JournalForm";
import JournalListItem from "./components/JournalListItem";

export default function App() {
  const [journals, setJournals] = useState([{date: '19.06.2022', title: 'Dancing in Purgatory.', content: 'Nice Location, nice People.'},{date: '20.06.2022', title: 'Working in the office', content: 'Happy Monday!'}]);
 
  /* Hier ergänzen wir Daten in das State Array, und spreaden den Stand des Arrays davor,
    sonst würden wir den State journals einfach mit dem neuen Wert überschreiben */
  function addJournal(journal){
    setJournals([...journals, journal]);
  }

  return (
    <>
      <ContentBoard className="App">
        <h1>MobileJournal</h1>
        <ul>
        {/* .map itteriert durch das Array journals und gibt uns für jedes Element journal die Werte*/}
        {journals.map(function(journal){
          /* Wir returnen hier eine Komponente, dieser übergeben wir ein prop(journalEntry), 
          dem wir jeweils den itterierten Wert(journal) aus dem State(journals) zuweisen */
          return <JournalListItem journalEntry={journal} /> 
        
        })}
        </ul> 


        <h2>New Entry:</h2>
        {/* hier rendern wir die Komponente JournalForm und holen uns die Funktion onSubmit 
            mit den Returnwerten
            und übergeben diese beim Aufruf der Funktion adddJournal (Inversion of Control) */}
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
