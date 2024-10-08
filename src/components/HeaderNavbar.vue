<script setup>
// Le script reste inchangé
import { ref, onMounted } from 'vue';
import { initializeTheme } from '@/utils/initDarkMode';


const isMobileMenuOpen = ref(false)
const isResourcesDropdownOpen = ref(false)
const isUserDropdownOpen = ref(false)
const isMobileResourcesDropdownOpen = ref(false)
// Simulated user object, replace with your actual user management logic
const user = ref({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  photoUrl: 'https://via.placeholder.com/150'
})
//const user = ref(null)

const isDarkMode = ref(document.documentElement.classList.contains('dark'));

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
  isDarkMode.value = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  isResourcesDropdownOpen.value = false
  isUserDropdownOpen.value = false
  isMobileResourcesDropdownOpen.value = false
  manageOutsideClickListener();
}

const toggleResourcesDropdown = () => {
  isResourcesDropdownOpen.value = !isResourcesDropdownOpen.value
  isUserDropdownOpen.value = false
  manageOutsideClickListener();
}

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value
  isResourcesDropdownOpen.value = false
  manageOutsideClickListener();
}

const toggleMobileResourcesDropdown = () => {
  isMobileResourcesDropdownOpen.value = !isMobileResourcesDropdownOpen.value
  manageOutsideClickListener();
}

const closeDropdowns = () => {
  isResourcesDropdownOpen.value = false
  isUserDropdownOpen.value = false
  isMobileResourcesDropdownOpen.value = false
  isMobileMenuOpen.value = false
  manageOutsideClickListener();
}

const anyDropdownOpen = () =>
  isResourcesDropdownOpen.value ||
  isUserDropdownOpen.value ||
  isMobileResourcesDropdownOpen.value ||
  isMobileMenuOpen.value;

// Fonction appelée dans chaque toggle pour gérer les événements
const manageOutsideClickListener = () => {
  if (anyDropdownOpen()) {
    document.addEventListener('click', closeDropdowns);
    console.log('Event listener added');
    return;
  }
  document.removeEventListener('click', closeDropdowns);
  console.log('Event listener removed');
};

onMounted(() => {
  initializeTheme(isDarkMode);
  console.log('User:', user.value);
});
</script>


<template>
  <header
    class="fixed top-0 left-0 right-0 bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 backdrop-blur-md py-4 transition-colors duration-100 z-50">
    <nav class="container mx-auto px-4 flex items-center justify-between">
      <div class="flex items-center space-x-8">
        <div class="flex items-center space-x-2">
          <img src="@/assets/logo.png" alt="Logo" class="h-10 w-auto">
          <span class="text-xl font-bold hover:text-blue-600 dark:hover:text-yellow-300 transition duration-100">TechVerse</span>
        </div>
        <ul class="hidden md:flex space-x-6 text-lg">
          <li>
            <RouterLink to="/home" class="hover:text-blue-600 dark:hover:text-yellow-300 transition duration-100">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/product-crud-1"
                         class="hover:text-blue-600 dark:hover:text-yellow-300 transition duration-100">Product V1
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/product-crud-2"
                        class="hover:text-blue-600 dark:hover:text-yellow-300 transition duration-100">Product V2
            </RouterLink>
          </li>
          <li class="relative">
            <button @click.stop="toggleResourcesDropdown"
                    class="hover:text-blue-600 dark:hover:text-yellow-300 transition duration-100">
              Demo
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul v-show="isResourcesDropdownOpen"
                class="absolute left-0 mt-2 w-48 bg-blue-100 dark:bg-gray-700 rounded-md shadow-lg">
              <li><RouterLink to="/demo-product"
                     class="block px-4 py-2 text-sm hover:bg-blue-200 dark:hover:bg-gray-600">Demo Product</RouterLink></li>
              <li><RouterLink to="/demo-features" class="block px-4 py-2 text-sm hover:bg-blue-200 dark:hover:bg-gray-600">Demo Features</RouterLink>
              </li>
              <li><RouterLink to="/" class="block px-4 py-2 text-sm hover:bg-blue-200 dark:hover:bg-gray-600">API
                Reference</RouterLink></li>
            </ul>
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-blue-600 dark:hover:text-yellow-300 transition duration-100">
              About
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center space-x-4">
        <button @click="toggleDarkMode"
                class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-blue-200 dark:hover:bg-yellow-500 transition duration-300">
          <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
        <template v-if="user">
          <div class="relative">
            <img @click.stop="toggleUserDropdown" :src="user.photoUrl" alt="User photo"
                 class="h-10 w-10 rounded-full cursor-pointer">
            <div v-show="isUserDropdownOpen"
                 class="absolute right-0 mt-2 w-64 bg-blue-100 dark:bg-gray-700 rounded-md shadow-lg">
              <div class="p-4">
                <p class="font-semibold">{{ user.firstName }} {{ user.lastName }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ user.email }}</p>
              </div>
              <hr class="border-gray-200 dark:border-gray-600">
              <ul>
                <li><a href="#"
                       class="block px-4 py-2 text-sm hover:bg-blue-200 dark:hover:bg-gray-600">Dashboard</a></li>
                <li><a href="#"
                       class="block px-4 py-2 text-sm hover:bg-blue-200 dark:hover:bg-gray-600">Settings</a></li>
                <li><a href="#" class="block px-4 py-2 text-sm hover:bg-blue-200 dark:hover:bg-gray-600">Sign
                  Out</a></li>
              </ul>
            </div>
          </div>
        </template>
        <button v-else
                class="bg-blue-500 dark:bg-yellow-400 hover:bg-blue-600 dark:hover:bg-yellow-500 text-white dark:text-gray-900 px-6 py-2 rounded-full font-semibold transition duration-300">
          Login / Register
        </button>
        <button class="md:hidden p-2" @click.stop="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-white" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
    <!-- Mobile menu -->
    <div v-show="isMobileMenuOpen"
         class="md:hidden bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 py-2">
      <ul class="px-4 space-y-2">
        <li>
          <RouterLink to="/home"
                       class="block py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 transition duration-300">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/product-crud-1"
                       class="block py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 transition duration-300">
            Product V1
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/product-crud-2"
                      class="block py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 transition duration-300">
            Product V2
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about"
                       class="block py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 transition duration-300">
            About
          </RouterLink>
        </li>
        <li>
          <button @click.stop="toggleMobileResourcesDropdown"
                  class="w-full text-left py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 transition duration-300 flex justify-between items-center">
            Demo
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul v-show="isMobileResourcesDropdownOpen" class="pl-4 space-y-2 mt-2">
            <li><RouterLink to="/demo-product"
                   class="block py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 transition duration-300">Demo Product</RouterLink>
            </li>
            <li><RouterLink to="/demo-features"
                   class="block py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 transition duration-300">Demo Features</RouterLink>
            </li>
            <li><RouterLink to="/"
                   class="block py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 transition duration-300">API
              Reference</RouterLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>

  <!-- Spacer to prevent content from being hidden under the fixed navbar -->
  <div class="h-20"></div>

</template>