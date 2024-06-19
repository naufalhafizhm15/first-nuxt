<template>
    <div class="flex items-start justify-start min-h-screen ">
      <form @submit.prevent="login" class="w-full max-w-sm  p-10  ml-20 mt-28 bg-white rounded-2xl">
        <div class=" ">
          <label for="login" class="block text-gray-700 text-xl font-bold mb-2">Login</label>
        </div>
        <div class="mt-10">
          <label for="email" class="block text-gray-700 text-base font-bold mb-2 ">Email</label>
          <input  v-model="formData.email" type="email" id="email" name="email" class="w-full p-2 border rounded rounded-lg">
        </div>
        <div class="mt-4">
          <label for="password" class="block text-gray-700 text-base font-bold mb-2">Password</label>
          <input v-model="formData.password" type="password" id="password" name="password" class="w-full p-2 border rounded rounded-lg">
        </div>
        <div class="mt-4">
          <button type="submit" class="bg-red-500 text-white px-4 py-2  w-full rounded rounded-lg">Login</button>
        </div>
      </form>
      <div class="ml-52 mt-9 text-center">
        <label for="email" class="block text-gray-700 text-4xl font-bold mb-2 font-poppins" style="letter-spacing: -0.24px;">RegisT</label>
        <label for="email" class="block text-gray-700 block text-gray-500 text-sm font-normal mb-2 text-center font-poppins" style="font-size: 16px; line-height: 150%; letter-spacing: 0.08px;">Pengelolaan device dan pemantauan pemasangan device Transtrack.ID </label>
      <img src="~assets/illustration-login.svg" alt="" />
    </div>
    </div>
  </template>

<script setup>
const { formData, login } = useUtils();
</script>



<!-- <script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const response = await fetch('https://regist-api-test.transtrack.id/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (response.ok) {
      console.log('Login successful');
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
};
</script> -->

<!-- 
  <script setup>
  import { useAuthStore } from '~/stores/auth';
  import axios from 'axios';
  
  const authStore = useAuthStore();
  
  const login = async () => {
    try {
      const response = await axios.post('https://regist-api-test.transtrack.id/api/v1/auth/login', {
        email: authStore.email,
        password: authStore.password,
      }
      
      );
  
      if (response.data.token) {
        authStore.setAuthentication(true);
      } else {
      }
    } catch (error) {
  console.error('Login error:', error);
  
  if (error.response) {
    console.error('Response data:', error.response.data);
    console.error('Response status:', error.response.status);
    console.error('Response headers:', error.response.headers);
  }
}

  };
  </script>
  

   -->