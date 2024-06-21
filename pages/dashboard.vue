<template>
  <div class="container mx-auto mt-8">
    <UserProfile />
    <div class="flex justify-end">
      <button @click="logout" class="mt-4 bg-red-500 text-white py-2 px-4 rounded">Выйти</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth';
import UserProfile from '~/components/UserProfile.vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push('/login');
};
</script>

<style scoped>

</style>