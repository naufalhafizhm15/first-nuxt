<template>
    <div class="h-[1097px] relative bg-stone-50">
      <div class="left-[240px] top-[40px] absolute flex-col justify-start items-start gap-10 inline-flex">
        <div class="w-[1120px] justify-between items-start inline-flex">
          <div class="flex-col justify-start items-start gap-1 inline-flex">
            <div class="text-zinc-900 text-2xl font-bold font-poppins leading-9 tracking-tight">Users</div>
            <div class="text-neutral-500 text-base font-normal font-poppins leading-normal tracking-tight">Pengguna yang menggunakan aplikasi RegisT</div>
          </div>
          <div class="w-12 h-12 relative">
            <div class="w-12 h-12 left-0 top-0 absolute bg-white rounded-lg shadow"></div>
            <div class="w-6 h-6 left-[12px] top-[12px] absolute bg-black bg-opacity-0"></div>
            <div class="w-1 h-1 left-[32px] top-[12px] absolute bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <div class="h-[528px] px-10 py-[38px] left-[240px] top-[144px] absolute bg-white rounded-2xl flex-col justify-end items-start gap-10 inline-flex">
        <div class="self-stretch justify-start items-start gap-[623px] inline-flex">
          <div class="text-black text-2xl font-bold font-poppins leading-9 tracking-tight">Tambah Pengguna</div>
        </div>
        <div class="self-stretch h-72 flex-col justify-start items-start gap-6 flex">
          <div class="self-stretch h-72 flex-col justify-start items-start gap-6 flex">
            <div class="justify-start items-start gap-10 inline-flex">
              <div class="w-[500px] flex-col justify-start items-start gap-1 inline-flex">
                <div class="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                  <div class="self-stretch justify-start items-start gap-1 inline-flex">
                    <div class="text-black text-base font-semibold font-poppins leading-normal tracking-tight">Pilih role</div>
                  </div>
                  <select id="role" name="role" v-model="selectedRole" class="self-stretch px-4 py-3 rounded-lg border border-stone-200 justify-between items-center inline-flex">
                    <option value="" disabled selected>Select a role</option>
                    <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
                  </select>
                </div>
              </div>
              <div class="w-[500px] flex-col justify-start items-start gap-1 inline-flex">
                <div class="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                  <div class="self-stretch justify-start items-start gap-1 inline-flex">
                    <div class="text-black text-base font-semibold font-poppins leading-normal tracking-tight">Lokasi</div>
                  </div>
                  <input v-model="location" type="text" id="location" name="location" placeholder="Pilih Kota" class="self-stretch px-4 py-3 rounded-lg border border-stone-200 justify-between items-center inline-flex">
                </div>
              </div>
            </div>
            <div class="self-stretch justify-start items-start gap-10 inline-flex">
              <div class="w-[500px] flex-col justify-start items-start gap-1 inline-flex">
                <div class="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                  <div class="self-stretch justify-start items-start gap-1 inline-flex">
                    <div class="text-black text-base font-semibold font-poppins leading-normal tracking-tight">Nama</div>
                  </div>
                  <input v-model="name"  type="text" id="name" name="name" placeholder="Input nama" class="grow shrink basis-0 text-stone-500 text-base font-normal font-poppins leading-normal tracking-tight self-stretch px-4 py-3 rounded-lg border border-stone-200 justify-between items-center inline-flex">
                </div>
              </div>
              <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div class="justify-start items-start gap-1 inline-flex">
                  <div class="text-black text-base font-semibold font-poppins leading-normal tracking-tight">No HP</div>
                </div>
                <div class="justify-start items-center inline-flex">
                  <div class="relative">
                    <select v-model="selectedCountryCode" class="appearance-none px-4 py-3 pr-8 rounded-lg border border-stone-200 justify-between items-center inline-flex">
                      <option v-for="countryCode in countryCodes" :key="countryCode" :value="countryCode">{{ countryCode }}</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg class="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                  <input v-model="phoneNumber" type="text" id="phoneNumber" name="phoneNumber" placeholder="8965770213231" class="w-[420px] self-stretch px-4 py-3 rounded-lg border border-stone-200 justify-between items-center inline-flex">
                </div>
              </div>
            </div>
            <div class="self-stretch justify-start items-start gap-10 inline-flex">
              <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div class="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                  <div class="justify-start items-start gap-1 inline-flex">
                    <div class="text-center text-black text-base font-semibold font-poppins leading-normal tracking-tight">Email</div>
                  </div>
                  <input v-model="email"  type="email" id="email" name="email" placeholder="Iqbalganteng@gmail.com" class="self-stretch px-4 py-3 rounded-lg border border-stone-200 justify-between items-center inline-flex">
                </div>
              </div>
              <div class="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div class="self-stretch h-20 flex-col justify-start items-start gap-2 flex">
                  <div class="justify-start items-start gap-1 inline-flex">
                    <div class="text-center text-black text-base font-semibold font-poppins leading-normal tracking-tight">Password</div>
                  </div>
                  <input type="password" id="password" name="password" placeholder="Enter Password" class="self-stretch px-4 py-3 rounded-lg border border-stone-200 justify-between items-center inline-flex">
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="justify-start items-end gap-6 inline-flex">
            <button @click="addUser" class="px-6 py-3 bg-red-500 rounded-lg shadow justify-center items-center gap-2 flex">
        <div class="text-white text-base font-semibold font-poppins leading-normal tracking-tight">Tambah Pengguna</div>
      </button>
          <button @click="$router.back()" class="px-6 py-3 rounded-lg justify-center items-center gap-2 flex">
            <div class="text-stone-500 text-base font-semibold font-poppins leading-normal tracking-tight">Kembali</div>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedRole: '',
        roles: ["TECHNICIAN", "OPERATION", "SELLER", "CUSTOMER_CARE", "SCHEDULER", "LEAD_SELLER"],
        selectedCountryCode: '+62',
        countryCodes: ['+62', '+1', '+44', '+81', '+86', '+91'],
        name: '',
        email: '',
        phoneNumber: '',
        location: '',
      };
    },
    methods: {
      async addUser() {
        try {
          const response = await fetch('https://regist-api-test.transtrack.id/api/v1/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
        'Authorization': 'Bearer 1389|z0cI5RADaaVLIauLbaIs2treHaq4UDtoNC89xsI5'
            },
            body: JSON.stringify({
              name: this.name,
              email: this.email,
              phone_country_code: this.selectedCountryCode,
              phone_number: this.phoneNumber,
              city: this.location,
              role: this.selectedRole,
              password: this.password,
            }),
          });
  
          if (response.ok) {
            console.log('User added successfully');
            
            alert('User added successfully');
            this.resetForm();

          } else {
            console.error('Failed to add user:', response.statusText);
            
            alert('Failed to add user:', response.statusText);
          }
        } catch (error) {
          console.error('An error occurred:', error);
          
          alert('An error occurred:', error);
        }
      },
      resetForm() {
        this.selectedRole = '';
        this.name = '';
        this.email = '';
        this.phoneNumber = '';
        this.location = '';
        this.password = '';
      },
    },
  };
  </script>
  