<template>
  <form @submit.prevent="submitForm" class="w-1/4 p-6 rounded-xl border border-slate-300 shadow-blue-glow">
    <p class="mb-5 text-slate-700 text-3xl text-center">Авторизация</p>
    <div class="mb-8 flex flex-col gap-2">
      <input v-model="username" class="h-10 px-3 rounded-sm border border-slate-300 outline-blue-500 text-lg" placeholder="Логин"/>
      <input v-model="password" type="password" class="h-10 px-3 rounded-sm border border-slate-300 outline-blue-500 text-lg" placeholder="Пароль"/>
    </div>
    <div class="flex">
      <button type="submit" class="h-10 w-1/2 mx-auto rounded-lg border border-slate-300 text-lg font-medium text-slate-700">Войти</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth} from '~/composables/useAuth'

  const username = ref('');
  const password = ref('');
  const { login } = useAuth();
  const router = useRouter();

  const submitForm = async () =>{
    const success = await login(username.value, password.value);
    if (success) {
      router.push('/dashboard');
    } else {
      alert('Login failed');
    }
  };
</script>