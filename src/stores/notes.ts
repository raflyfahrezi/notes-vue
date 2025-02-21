import { defineStore } from "pinia";
import { ref, computed } from "vue";

import type { TNote } from "@/models/note";

export const useNotesStore = defineStore("notes", () => {
  const notes = ref<TNote[]>([]);
  const searchQuery = ref<string>("");

  const filteredNotes = computed(() => {
    if (!searchQuery.value) {
      return notes.value;
    }

    return notes.value.filter((item) => item.title.includes(searchQuery.value));
  });

  const addNewNote = (newNote: Omit<TNote, "id">) => {
    notes.value.push({ ...newNote, id: new Date().valueOf().toString() });
  };

  const removeNote = (id: string) => {
    const newNotes = notes.value.filter((note) => note.id !== id);

    notes.value = newNotes;
  };

  return { notes, searchQuery, filteredNotes, addNewNote, removeNote };
});
