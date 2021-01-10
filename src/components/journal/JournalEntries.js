import JournalEntry from "./JournalEntry";
import {useSelector} from "react-redux";

function JournalEntries () {

    const {notes} = useSelector(state => state.notes);

    return (
       <div className="journal__entries">
           {
               notes.map(note => {
                   return (
                       <JournalEntry
                           key={note.id}
                           {...note}
                       />
                   )
               })
           }
       </div>
    )

}
export default JournalEntries;