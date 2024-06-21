<template>
  <div v-if="isClient" class="bg-white p-6 rounded shadow-md">
    <h2 class="text-xl mb-4">Профиль: {{ user?.username }}</h2>
    <p><strong>ID:</strong> {{ user?.user_id }}</p>
    <p><strong>Email:</strong> {{ user?.email }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useAuthStore } from '~/store/auth';

const isClient = ref(false);
const authStore = useAuthStore();
const user = computed(() => authStore.getUser);

onMounted(() => {
  isClient.value = true;
});
</script>

<style scoped>
/* Ваши стили */
</style>
