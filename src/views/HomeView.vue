<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter, RouterLink } from "vue-router";

import { useNotesStore } from "@/stores/notes";
import ViewWrapper from "@/components/ViewWrapper.vue";

const router = useRouter();
const notesStore = useNotesStore();

const searchQuery = ref<string>("");

const filteredNotes = computed(() => {
  return notesStore.notes.filter((item) => item.title.includes(searchQuery.value));
});
</script>

<template>
  <ViewWrapper>
    <div class="flex w-full flex-col gap-6">
      <div class="flex gap-4">
        <input
          type="text"
          name="search"
          v-model="searchQuery"
          placeholder="Search notes here..."
          class="w-full rounded-md border-2 border-green-600 px-4 py-2 text-base"
        />
        <RouterLink to="/add-note" class="flex w-full max-w-max">
          <button
            class="w-full max-w-max cursor-pointer rounded-md bg-green-600 px-4 py-2 text-white"
          >
            Add Note
          </button>
        </RouterLink>
      </div>

      <div class="grid grid-cols-3 gap-6" v-if="filteredNotes.length > 0">
        <div
          v-bind:key="note.id"
          v-for="note in filteredNotes"
          class="flex flex-col gap-2 rounded-md border-2 border-green-200 p-6"
        >
          <p class="text-lg font-bold">{{ note.title }}</p>
          <p>{{ note.content }}</p>
          <div class="mt-4 flex gap-2">
            <button
              class="w-full cursor-pointer rounded-md bg-blue-200 p-2"
              v-on:click="
                router.push({
                  name: 'add-note',
                  query: {
                    id: note.id,
                  },
                })
              "
            >
              Edit
            </button>
            <button
              class="w-full cursor-pointer rounded-md bg-red-200 p-2"
              v-on:click="() => notesStore.removeNote(note.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div v-else>
        <p>No notes available</p>
      </div>
    </div>
  </ViewWrapper>
</template>
