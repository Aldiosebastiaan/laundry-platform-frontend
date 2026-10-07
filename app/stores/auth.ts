import { defineStore } from 'pinia'

export interface UserProfile {
  id: string
  name: string
  role: 'SUPERADMIN' | 'ADMIN' | 'KASIR' | 'OPERATOR' | 'KURIR'
  outletName: string
  avatarUrl?: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserProfile | null>({
    id: 'usr-admin-01',
    name: 'Admin Laundry',
    role: 'ADMIN',
    outletName: 'Laundry Express Pusat'
  })

  const isAuthenticated = computed(() => !!user.value)
  const isAdmin = computed(() => user.value?.role === 'ADMIN' || user.value?.role === 'SUPERADMIN')

  function updateUser(updated: Partial<UserProfile>) {
    if (user.value) {
      user.value = { ...user.value, ...updated }
    }
  }

  function logout() {
    user.value = null
  }

  function login(userData?: UserProfile) {
    user.value = userData || {
      id: 'usr-admin-01',

      name: 'Admin Laundry',
      role: 'ADMIN',
      outletName: 'Laundry Express Pusat'
    }
  }

  return {
    user,
    isAuthenticated,
    isAdmin,
    updateUser,
    logout,
    login
  }
})
