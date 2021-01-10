import SideBar from "./SideBar";
import NothingSelected from "./NothinSelected";
import NoteScreen from "../notes/NoteScreen";
import {useSelector} from "react-redux";

function JournalScreen () {

    const {notes, active} = useSelector(state => state.notes);

    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
            <SideBar />
            <main>
                {
                    (active) ? <NoteScreen /> : <NothingSelected />
                }
            </main>
        </div>
    )

}
export default JournalScreen;