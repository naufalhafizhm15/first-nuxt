<template>
  <div class="py-10 pl-20 pr-20 bg-stone-50 min-h-screen">
    <h1 class="text-3xl font-bold font-poppins text-netral-primary">User</h1>
    <p class="text-neutral-500 text-base font-normal font-poppins leading-6 tracking-tighter">Pengguna yang menggunakan aplikasi RegisT</p>

    <div class="mt-10 flex items-center pb-6">
      <div class="w-[280px] h-12 px-4 py-3 bg-white rounded-lg shadow justify-between items-center inline-flex">
        <div class="text-stone-500 text-base font-normal font-poppins leading-normal tracking-tight">Cari Pengguna...</div>
        <div class="w-6 h-6 pl-0.5 pr-[1.74px] pt-0.5 pb-[1.28px] bg-black bg-opacity-0 justify-center items-center flex">A</div>
      </div>
      <button @click="navigateTo('/dashboard');" class="ml-auto flex items-center justify-center gap-2 p-3 rounded-lg bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:ring focus:border-blue-300">
        Tambah Pengguna
      </button>
    </div>

    <div class="flex flex-col w-1127 px-10 py-6 items-start gap-6 bg-white rounded-lg shadow-smooth-down">

      <div class="flex w-full justify-between">
        <div class="w-1/4 font-poppins text-neutral-01 text-xl font-semibold leading-6">
          Name
        </div>
        <div class="w-1/4 font-poppins text-neutral-01 text-xl font-semibold leading-6">
          No HP
        </div>
        <div class="w-1/4 font-poppins text-neutral-01 text-xl font-semibold leading-6">
          Email
        </div>
        <div class="w-1/4 font-poppins text-neutral-01 text-xl font-semibold leading-6">
          Akses Menu
        </div>
      </div>

      <div class="w-full border-b border-gray-300"></div>

      <div v-for="user in users" :key="user.id" class="flex w-full justify-between">
        <div class="w-1/4 font-poppins text-neutral-01 text-base font-normal leading-6">
          {{ user.name }}
        </div>
        <div class="w-1/4 font-poppins text-neutral-01 text-base font-normal leading-6">
          {{ user.phone_country_code }} {{ user.phone_number }}
        </div>
        <div class="w-1/4 font-poppins text-neutral-01 text-base font-normal leading-6">
          {{ user.email }}
        </div>
        <div class="w-1/4 font-poppins text-neutral-01 text-base font-normal leading-6">
          {{ user.role }}
        </div>

        <div v-if="showConfirmation" class="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <div class="bg-white p-8 rounded-lg">
            <p class="text-lg font-semibold mb-4">Are you sure you want to delete this user?</p>
            <div class="flex justify-end">
              <button @click="cancelDelete" class="mr-2 px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
              <button @click="confirmDelete" class="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
            </div>
          </div>
        </div>

        <div class="w-14 h-6 justify-start items-start gap-2 inline-flex">
          <NuxtLink :to="`/events/${user.id}`" class="w-6 h-6 pl-[3px] pr-[2.54px] py-0.5 rounded-lg shadow justify-center items-center flex"><img src="~assets/edit-user.svg" alt="Edit User" /></NuxtLink>
          <button class="w-6 h-6 pl-[3px] pr-[2.54px] py-0.5 rounded-lg shadow justify-center items-center flex" @click="deleteUserConfirmation(user)">
            <img src="~assets/delete.svg" alt="Delete User" />
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between gap-4 pt-7">=
      <div class="flex items-center gap-4">
        <div class="w-[52px] h-8 px-2 py-1 bg-white rounded-lg shadow justify-center items-center gap-1 inline-flex">
          <div class="text-zinc-900 text-base font-normal font-poppins leading-normal tracking-tight">10</div>
          <div class="w-4 h-4 relative origin-top-left rotate-180 bg-black bg-opacity-0"></div>
        </div>
        <div class="text-neutral-500 text-base font-semibold font-poppins leading-normal tracking-tight">
          10 dari {{ users.length }} Users
        </div>
      </div>

      <div class="flex gap-2">
        <button @click="fetchUserData(currentPage - 1)">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="fetchUserData(currentPage + 1)">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      currentPage: 1,
      showConfirmation: false,
      userToDelete: null,
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData(page = 1, entries = 10) {
      try {
        const response = await fetch(`https://regist-api-test.transtrack.id/api/v1/users?page=${page}&entries=${entries}`, {
          headers: {
            'Authorization': 'Bearer 1389|z0cI5RADaaVLIauLbaIs2treHaq4UDtoNC89xsI5'
          },
        });

        const data = await response.json();
        this.users = data.data;

        this.currentPage = data.meta.current_page;
        this.totalPages = data.meta.last_page;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    async deleteUser(userId) {
      try {
        const response = await fetch(`https://regist-api-test.transtrack.id/api/v1/users/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': 'Bearer 1389|z0cI5RADaaVLIauLbaIs2treHaq4UDtoNC89xsI5'
          },
        });

        if (response.ok) {
          console.log(`User with ID ${userId} deleted successfully`);
          this.fetchUserData(this.currentPage);
        } else {
          console.error(`Error deleting user with ID ${userId}: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async deleteUserConfirmation(user) {
      this.userToDelete = user;
      this.showConfirmation = true;
    },

    cancelDelete() {
      this.userToDelete = null;
      this.showConfirmation = false;
    },

    async confirmDelete() {
      if (this.userToDelete) {
        await this.deleteUser(this.userToDelete.id);
        this.userToDelete = null;
        this.showConfirmation = false;
      }
    },
  },
};
</script>
