import { useState } from "react";
import styled from "styled-components";

export default function JournalForm({ onSubmit }) {
    const [date, setDate] = useState('04.08.2022');
    const [title, setTitle] = useState('Ollis Birthday');
    const [content, setContent] = useState('Surfing Bird Party');

    function onFormSubmit(event) {
        event.preventDefault();
        onSubmit({ 
                "date": date,
                "title": title,
                "content": content 
            });
    }

    // Hilfsfunktion, denn onChange übergibt einen Event, wir wollen den value
    function onDateChange(event){
        setDate(event.target.value);
    }
    // Hilfsfunktion, denn onChange übergibt einen Event, wir wollen den value
    function onTitleChange(event){
        setTitle(event.target.value);
    }
    // Hilfsfunktion, denn onChange übergibt einen Event, wir wollen den value
    function onContentChange(event){
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