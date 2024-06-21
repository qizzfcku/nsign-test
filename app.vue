<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

onBeforeMount(() => {
  authStore.loadStoredState();
});
</script>
