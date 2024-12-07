import Modal from "./Modal";
import NoteCard from "../Cards/NoteCard";
import showModal from "../../utils/showModal";
import { useEffect, useState } from "react";
import axios from "axios";

function NotesModal() {
  const [notes, setNotes] = useState([]); // Estado para armazenar anotações

    useEffect(() => {
      const fetchNotes = async () => {
        try {
          const response = await axios.get("http://localhost:3000/annotation");
          setNotes(response.data); // Atualiza o estado com as anotações do backend
        } catch (error) {
          console.error("Erro ao buscar anotações:", error);
        }
      };
  
      fetchNotes();
    }, []);
  
    

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
          <button
            onClick={() => showModal("note-modal")}
            type="button"
            className="w-full rounded-[9px] border-4 border-[#8B4A00] p-2 sm:text-md xs:text-[20px] text-[18px] font-semibold text-[#8B4A00] transition-all hover:text-black"
          >
            Adicionar anotação
          </button>
        </li>
        {notes.map((note) => (
          <li key={note.id}>
            <NoteCard title={note.title} content={note.text} />
          </li>
        ))}
      </ul>
    </Modal>
  );
}

export default NotesModal;
