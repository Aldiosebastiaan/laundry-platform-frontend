<script setup lang="ts">
import { useBuilderStore } from '~/stores/builder'
import { useAuthStore } from '~/stores/auth'
import { useMenuStore } from '~/stores/menu'

const props = withDefaults(
  defineProps<{
    isSidebarOpen?: boolean
  }>(),
  {
    isSidebarOpen: true
  }
)

const route = useRoute()
const builderStore = useBuilderStore()
const authStore = useAuthStore()
const menuStore = useMenuStore()

const emit = defineEmits<{
  (e: 'toggle-sidebar'): void
}>()

const isLogoutModalOpen = ref(false)

const currentMenuTitle = computed(() => {
  const currentPath = route.path
  if (currentPath === '/' || currentPath === '/dashboard') return 'Dashboard'

  const allMenus = [
    ...menuStore.operationalMenus,
    ...menuStore.queueMenus,
    ...menuStore.reportMenus,
    ...menuStore.masterMenus
  ]
  const matched = allMenus.find(m => m.slug === currentPath || currentPath.startsWith(`${m.slug}/`))
  if (matched) return matched.title

  const segments = currentPath.split('/').filter(Boolean)
  if (segments.length === 0) return 'Dashboard'
  const last = segments[segments.length - 1]
  return last
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})

const userInitials = computed(() => {
  const name = authStore.user?.name || 'Aldio Sebastian'
  return name
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
})

function handleLogout() {
  isLogoutModalOpen.value = true
}

function confirmLogout() {
  authStore.logout()
  isLogoutModalOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur-md transition-all duration-200 sm:px-6">
    <!-- Left Section: Brand Logo + Hamburger Toggle + Active Menu Name -->
    <div class="flex items-center">
      <!-- Brand Logo with smooth expand / collapse animation -->
      <NuxtLink to="/dashboard" class="group flex items-center transition-all duration-300 ease-in-out hover:opacity-95">
        <!-- Brand Logo Icon -->
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary shadow-sm shadow-primary/20 transition-all duration-300 group-hover:scale-105">
          <i class="pi pi-sparkles text-lg text-white transition-transform duration-300"
            :class="props.isSidebarOpen ? 'rotate-0 scale-100' : 'rotate-12 scale-105'" />
        </div>

        <!-- Animated Brand Text (Opens & closes with smooth width & opacity transition) -->
        <div
          class="flex flex-col overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out"
          :class="[
            props.isSidebarOpen
              ? 'max-w-[180px] opacity-100 ml-2.5 translate-x-0'
              : 'max-w-0 opacity-0 ml-0 -translate-x-2 pointer-events-none'
          ]"
        >
          <div class="flex items-center gap-1.5">
            <span class="text-base font-bold tracking-tight text-slate-900 font-sans">WashWise</span>
          </div>
          <span class="text-[11px] font-medium text-slate-500">Laundry Management</span>
        </div>
      </NuxtLink>

      <!-- Hamburger Button (Shifted further right with spacing & micro-animation) -->
      <button type="button"
        class="ml-4 sm:ml-6 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all active:scale-90"
        :title="props.isSidebarOpen ? 'Tutup Sidebar' : 'Buka Sidebar'"
        aria-label="Toggle Navigation Sidebar"
        @click="emit('toggle-sidebar')"
      >
        <i class="pi text-base transition-transform duration-300"
          :class="props.isSidebarOpen ? 'pi-bars' : 'pi-bars rotate-90 text-primary font-bold'" />
      </button>

      <!-- Subtle Divider -->
      <div class="hidden h-5 w-px bg-slate-200 sm:block ml-3 sm:ml-4 mr-3 sm:mr-4" />

      <!-- Active Menu Name Display -->
      <div class="flex items-center gap-1.5 rounded-xl bg-slate-50 border border-slate-200/80 px-2.5 py-1.5 text-xs transition-all">
        <i class="pi pi-compass text-[11px] text-primary" />
        <span class="font-bold text-slate-800 truncate max-w-[120px] sm:max-w-[200px]">
          {{ currentMenuTitle }}
        </span>
      </div>
    </div>

    <!-- Right Section: Edit Mode Toggle & User Profile + Logout -->
    <div class="flex items-center gap-2.5 sm:gap-3">
      <!-- EDIT MODE TOGGLE SWITH -->
      <div v-if="authStore.isAdmin" class="flex items-center gap-2.5 rounded-xl border p-1 transition-all duration-300"
        :class="[
          builderStore.isEditMode
            ? 'border-primary/40 bg-primary-50/60 shadow-sm shadow-primary/10'
            : 'border-slate-200 bg-slate-50/80'
        ]">
        <div class="flex items-center gap-2 pl-2">
          <span class="text-xs font-semibold transition-colors duration-200"
            :class="builderStore.isEditMode ? 'text-primary' : 'text-slate-600'">
            Edit Mode
          </span>
        </div>

        <button type="button"
          class="relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          :class="builderStore.isEditMode ? 'bg-primary' : 'bg-slate-300'" role="switch"
          :aria-checked="builderStore.isEditMode" @click="builderStore.toggleEditMode()">
          <span class="sr-only">Toggle Edit Mode</span>
          <span aria-hidden="true"
            class="pointer-events-none inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            :class="builderStore.isEditMode ? 'translate-x-5' : 'translate-x-0'">
            <i class="pi text-[10px]"
              :class="builderStore.isEditMode ? 'pi-check text-primary font-bold' : 'pi-lock text-slate-400'" />
          </span>
        </button>
      </div>

      <!-- Quick Divider -->
      <div v-if="authStore.isAuthenticated" class="h-6 w-px bg-slate-200" />

      <!-- User Profile -->
      <div v-if="authStore.isAuthenticated" class="flex items-center gap-2.5">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary font-bold text-sm ring-2 ring-primary/20">
          {{ userInitials }}
        </div>

        <div class="hidden flex-col text-left sm:flex">
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-slate-800">
              {{ authStore.user?.name || 'Aldio Sebastian' }}
            </span>
          </div>
          <span class="text-[11px] text-slate-500 font-mono">
            {{ authStore.user?.role || 'ADMIN' }}
          </span>
        </div>
      </div>

      <!-- Logout / Sign Out Button (Right of User Profile) -->
      <button v-if="authStore.isAuthenticated" type="button" title="Sign Out / Keluar" aria-label="Sign Out"
        class="group flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/80 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-all duration-200 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500/20 active:scale-95 sm:px-3"
        @click="handleLogout">
        <i class="pi pi-sign-out text-sm text-slate-500 transition-colors group-hover:text-rose-600" />
        <span class="hidden sm:inline font-semibold">Logout</span>
      </button>

      <!-- Re-login fallback button if user logged out -->
      <button v-else type="button"
        class="flex items-center gap-1.5 rounded-xl bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-primary-600 transition-colors"
        @click="authStore.login()">
        <i class="pi pi-sign-in text-sm" />
        <span>Login Kembali</span>
      </button>
    </div>

    <!-- LOGOUT CONFIRMATION MODAL -->
    <div v-if="isLogoutModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center px-4 py-24 sm:px-12 animate-fade-in"
      @click.self="isLogoutModalOpen = false">
      <div class="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl transition-all">
        <div class="flex items-start gap-3.5">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
            <i class="pi pi-sign-out text-lg" />
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">Konfirmasi Sign Out</h3>
            <p class="mt-1 text-xs text-slate-500 leading-relaxed">
              Apakah Anda yakin ingin keluar dari akun <b>{{ authStore.user?.name || 'admin' }}</b>?
            </p>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-2.5">
          <button type="button"
            class="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            @click="isLogoutModalOpen = false">
            Batal
          </button>
          <button type="button"
            class="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-rose-700 transition-colors"
            @click="confirmLogout">
            Ya, Keluar
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
