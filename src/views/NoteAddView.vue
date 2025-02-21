<!-- eslint-disable @typescript-eslint/no-explicit-any -->

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import type { TNote } from "@/models/note";
import { useNotesStore } from "@/stores/notes";
import ViewWrapper from "@/components/ViewWrapper.vue";

const router = useRouter();
const notesStore = useNotesStore();

const form = ref<Omit<TNote, "id">>({
  title: "",
  content: "",
});

const onSubmit = (event: Event) => {
  event.preventDefault();

  notesStore.addNewNote(form.value);

  form.value = {
    title: "",
    content: "",
  };

  router.push("/");
};
</script>

<template>
  <ViewWrapper>
    <form class="flex w-full flex-col gap-6" v-on:submit="onSubmit">
      <div>
        <label for="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          v-model="form.title"
          class="w-full rounded-md border-2 border-green-600 px-4 py-2 text-base"
        />
      </div>
      <div>
        <label for="content">Content</label>
        <textarea
          id="content"
          name="content"
          v-model="form.content"
          class="w-full rounded-md border-2 border-green-600 px-4 py-2 text-base"
        />
      </div>
      <button
        type="submit"
        class="w-full cursor-pointer rounded-md bg-green-600 px-4 py-2 text-white"
      >
        Add Note
      </button>
    </form>
  </ViewWrapper>
</template>
