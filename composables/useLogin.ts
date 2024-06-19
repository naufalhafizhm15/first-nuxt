import { ref } from 'vue';

export const useLogin = () => {
  const formData = ref({
    email: 'seal.dev@transtrack.id',
    password: '1234qwer',
  });

  const login = async () => {
    try {
      const { data: responseData } = await useFetch('https://eseal-api-staging.transtrack.id/api/v1/auth/login', {
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
        return navigateTo('/dashboard');
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
