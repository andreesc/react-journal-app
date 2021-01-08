import NotesAppBar from "./NotesAppBar";

function NoteScreen() {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What's happened today"
                    className="notes__textarea"
                ></textarea>
                <div className="notes__image">
                    <img
                        src="https://www.online-tech-tips.com/wp-content/uploads/2020/04/WallpaperCraft.jpg.optimal.jpg"
                        alt="Imagen"
                    />
                </div>
            </div>
        </div>
    )
}
export default NoteScreen;