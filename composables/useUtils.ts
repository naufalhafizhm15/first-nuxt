import { ref } from 'vue';

export const useUtils = () => {
  const formData = ref({
    email: 'operation@regist.id',
    password: 'regist!',
  });

  // https://regist-api-test.transtrack.id/api/v1/auth/login
  const login = async () => {
    try {
      const { data: responseData } = await useFetch('https://regist-api-test.transtrack.id/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email: formData.value.email,
          password: formData.value.password,
        },
      });

      if (responseData.value !== null) {
        console.log('Login Success');
        console.log(responseData.value);
        return navigateTo('/user');
      } else {
        console.log('Login Error');
        console.error('Received null response from the API.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return {
    formData,
    login,
  };
}
