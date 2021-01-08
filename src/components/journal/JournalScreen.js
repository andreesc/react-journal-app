import SideBar from "./SideBar";
import NothingSelected from "./NothinSelected";
import NoteScreen from "../notes/NoteScreen";

function JournalScreen () {

    return (
        <div className="journal__main-content">
            <SideBar />
            <main>
                <NoteScreen />
                {/*<NothingSelected />*/}
            </main>
        </div>
    )

}
export default JournalScreen;