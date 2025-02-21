<script setup lang="ts">
import ComponentWrapper from "@/components/ComponentWrapper.vue";
import LayoutNavigation from "@/components/layouts/LayoutNavigation.vue";
</script>

<template>
  <div>
    <LayoutNavigation />

    <main class="pt-6">
      <ComponentWrapper>
        <slot />
      </ComponentWrapper>
    </main>
  </div>
</template>
