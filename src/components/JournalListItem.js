/* Wir erhalten hier in der Komponente ein prop(journalEntry) und returnen die Werte 
    jeweils als neues ListItem an die App */

export default function JournalListItem({journalEntry}){

    return(       
            <li>
            <p>{journalEntry.date}</p>
            <h2>{journalEntry.title}</h2>
            <p>{journalEntry.content}</p>
            </li>
    );
}