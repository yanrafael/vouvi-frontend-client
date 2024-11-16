import Modal from "./Modal";
import NoteCard from "../Cards/NoteCard";

function NotesModal() {
  const nota =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua jkvofmapfmo jfkldjaokfj jo jfodkaj fofdjaofjodsaj fjkamfioewjmkl joi fdjaoj fojdao pfj odasifjsdoaio.";

  return (
    <Modal
      title="Anotações livres"
      id="notes-modal"
      icon={"mdi:note-outline"}
      iconColor={"green"}
      iconWidth={32}
      top
    >
      <ul className="mt-4 flex max-h-[65vh] flex-col gap-4 overflow-y-auto px-3">
        <li>
          <button className="w-full rounded-[9px] border-4 border-[#8B4A00] p-2 text-md font-semibold text-[#8B4A00] transition-all hover:text-black">
            Adicionar anotação
          </button>
        </li>
        <li>
          <NoteCard title="Título" content={nota} />
        </li>
        <li>
          <NoteCard title="Título" content={nota} />
        </li>
        <li>
          <NoteCard title="Título" content={nota} />
        </li>
        <li>
          <NoteCard title="Título" content={nota} />
        </li>
      </ul>
    </Modal>
  );
}

export default NotesModal;
