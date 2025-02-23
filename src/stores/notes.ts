import { ref } from "vue";
import { defineStore } from "pinia";

import type { TNote } from "@/models/note";

export const useNotesStore = defineStore("notes", () => {
  const notes = ref<TNote[]>([]);
  const searchQuery = ref<string>("");

  const addNewNote = (newNote: Omit<TNote, "id">) => {
    notes.value.push({ ...newNote, id: new Date().valueOf().toString() });
  };

  const updateNewNote = (newNote: TNote, id: string) => {
    const newNotes = notes.value.map((item) => {
      if (item.id === id) {
        return {
          ...newNote,
        };
      }

      return { ...item };
    });

    notes.value = [...newNotes];
  };

  const removeNote = (id: string) => {
    const newNotes = notes.value.filter((note) => note.id !== id);

    notes.value = newNotes;
  };

  return { notes, searchQuery, addNewNote, removeNote, updateNewNote };
});
