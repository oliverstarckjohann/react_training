import { useState } from "react";
import styled from "styled-components";

export default function JournalForm({ onSubmit }) {
    const [date, setDate] = useState('04.08.2022');
    const [title, setTitle] = useState('Ollis Birthday');
    const [content, setContent] = useState('Surfing Bird Party');

    function onFormSubmit(event) {
        /* preventDefault verhindert die Übergabe der Werte an die URL, 
            die eigentliche HTML Submit Funktion */
        event.preventDefault();
        /* onSubmit ist die Funktion des Formulares die die Funktion onFormSubmit ausführt */
        onSubmit({ 
                "date": date,
                "title": title,
                "content": content 
            });
    }

    /* Hilfsfunktion, denn onChange übergibt einen Event, wir wollen den Wert */
    function onDateChange(event){
        /* Ruft die Funktion setDate auf und übergibt den Wert(value) aus dem Input-Feld */
        setDate(event.target.value);
    }
    /* Hilfsfunktion, denn onChange übergibt einen Event, wir wollen den Wert */
    function onTitleChange(event){
        /* Ruft die Funktion setTitle auf und übergibt den Wert(value) aus dem Input-Feld */
        setTitle(event.target.value);
    }
    /* Hilfsfunktion, denn onChange übergibt einen Event, wir wollen den Wert */
    function onContentChange(event){
        /* Ruft die Funktion setContent auf und übergibt den Wert(value) aus dem Input-Feld */
        setContent(event.target.value);
    }

    return(
    <>    
    <NewjournalForm onSubmit={onFormSubmit}>
        <NewjournalFormList>
        <NewjournalFormListItem><input type="text" name="date" value={date} onChange={onDateChange}></input></NewjournalFormListItem>
        <NewjournalFormListItem><input type="text" name="title" value={title} onChange={onTitleChange}></input></NewjournalFormListItem>
        <NewjournalFormListItem><input type="text" name="content" value={content} onChange={onContentChange}></input></NewjournalFormListItem>
        <FormSubmitButton type="submit">New Journal</FormSubmitButton>
        </NewjournalFormList>
    </NewjournalForm>
    </>
    ); 
     
}

const NewjournalForm = styled.form`
    font-size: 1,2rem;
`;

const NewjournalFormList = styled.ul`
    display: flex;
    flex-direction: column;
`;

const NewjournalFormListItem = styled.li` 
    width: 60%;  
    list-style: none;
    margin-top: 0.4rem;
`;

const FormSubmitButton = styled.button`
    width: 60%;
    color: #000000;
    backgroud-color: #FFFFFF;
    &:hover {
        background-color: #99FFAA;
        }
    border: none;
    border-radius: 0.2rem;
    box-shadow 0.4rem 0.4rem 1rem #F5F5F5;
    margin-top: 2rem;
`;