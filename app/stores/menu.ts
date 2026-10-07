import { defineStore } from 'pinia'
import type { MenuItem, CreateMenuDTO } from '~/types/menu'
import { nanoid } from 'nanoid'

const INITIAL_MENUS: MenuItem[] = [
  // 1. Operasional
  {
    id: 'menu-dashboard',
    title: 'Dashboard',
    slug: '/dashboard',
    icon: 'pi-th-large',
    order: 1,
    category: 'OPERASIONAL',
    isSystem: true,
    description: 'Ringkasan performa & aktivitas laundry'
  },
  {
    id: 'menu-kasir',
    title: 'Kasir / Order Baru',
    slug: '/kasir',
    icon: 'pi-shopping-bag',
    order: 2,
    category: 'OPERASIONAL',
    badge: 'POS',
    badgeSeverity: 'info',
    isSystem: true,
    description: 'Penerimaan pakaian & cetak nota transaksi'
  },
  {
    id: 'menu-daily-activity',
    title: 'Daily Activity',
    slug: '/daily-activity',
    icon: 'pi-calendar-clock',
    order: 3,
    category: 'OPERASIONAL',
    isSystem: false,
    description: 'Pencatatan tugas & aktivitas harian staf'
  },

  // 2. Antrian Alur Cucian (Workflow Queues)
  {
    id: 'menu-queue-wash',
    title: 'Antrian Cuci',
    slug: '/antrian-cuci',
    icon: 'pi-sync',
    order: 4,
    category: 'WORKFLOW_QUEUE',
    badge: 8,
    badgeSeverity: 'info',
    description: 'Daftar pakaian yang sedang menunggu & dicuci'
  },
  {
    id: 'menu-queue-iron',
    title: 'Antrian Setrika',
    slug: '/antrian-setrika',
    icon: 'pi-sparkles',
    order: 5,
    category: 'WORKFLOW_QUEUE',
    badge: 5,
    badgeSeverity: 'warn',
    description: 'Daftar cucian kering yang siap disetrika'
  },
  {
    id: 'menu-queue-ready',
    title: 'Siap Diambil',
    slug: '/siap-diambil',
    icon: 'pi-check-circle',
    order: 6,
    category: 'WORKFLOW_QUEUE',
    badge: 12,
    badgeSeverity: 'success',
    description: 'Cucian selesai yang menunggu serah terima / kirim'
  },

  // 3. Laporan
  {
    id: 'menu-daily-report',
    title: 'Daily Report',
    slug: '/daily-report',
    icon: 'pi-chart-line',
    order: 7,
    category: 'LAPORAN',
    description: 'Rekap omset, kas masuk, & performa harian'
  },

  // 4. Admin Masters & Builders
  {
    id: 'menu-master-menu',
    title: 'Master Menu',
    slug: '/admin/menus',
    icon: 'pi-list',
    order: 8,
    category: 'BUILDER_MASTER',
    isSystem: true,
    roles: ['ADMIN', 'SUPERADMIN'],
    description: 'Kelola navigasi sidebar & role permissions'
  },
  {
    id: 'menu-master-page',
    title: 'Master Page',
    slug: '/admin/pages',
    icon: 'pi-file-edit',
    order: 9,
    category: 'BUILDER_MASTER',
    isSystem: true,
    roles: ['ADMIN', 'SUPERADMIN'],
    description: 'Kelola & rancang kanvas halaman visual'
  },
  {
    id: 'menu-master-form',
    title: 'Master Form',
    slug: '/admin/forms',
    icon: 'pi-file',
    order: 10,
    category: 'BUILDER_MASTER',
    isSystem: true,
    roles: ['ADMIN', 'SUPERADMIN'],
    description: 'Perancang formulir dinamis & validasi'
  },
  {
    id: 'menu-master-workflow',
    title: 'Master Workflow',
    slug: '/admin/workflows',
    icon: 'pi-sitemap',
    order: 11,
    category: 'BUILDER_MASTER',
    isSystem: true,
    roles: ['ADMIN', 'SUPERADMIN'],
    description: 'Perancang SOP alur kerja (Vue Flow) & FSM'
  }
]

export const useMenuStore = defineStore('menu', () => {
  const menus = ref<MenuItem[]>([])
  const isLoaded = ref(false)

  // Load from localStorage if available, or fallback to initial
  function initMenus() {
    if (import.meta.client) {
      const saved = localStorage.getItem('washwise_menus')
      if (saved) {
        try {
          menus.value = JSON.parse(saved)
          isLoaded.value = true
          return
        } catch {
          // ignore error, fallback to initial
        }
      }
    }
    menus.value = [...INITIAL_MENUS]
    isLoaded.value = true
  }

  function persist() {
    if (import.meta.client) {
      localStorage.setItem('washwise_menus', JSON.stringify(menus.value))
    }
  }

  // Get menus by category
  const operationalMenus = computed(() =>
    menus.value.filter(m => m.category === 'OPERASIONAL').sort((a, b) => a.order - b.order)
  )

  const queueMenus = computed(() =>
    menus.value.filter(m => m.category === 'WORKFLOW_QUEUE').sort((a, b) => a.order - b.order)
  )

  const reportMenus = computed(() =>
    menus.value.filter(m => m.category === 'LAPORAN').sort((a, b) => a.order - b.order)
  )

  const masterMenus = computed(() =>
    menus.value.filter(m => m.category === 'BUILDER_MASTER').sort((a, b) => a.order - b.order)
  )

  function addMenu(dto: CreateMenuDTO): MenuItem {
    const nextOrder = menus.value.length + 1
    const newMenu: MenuItem = {
      id: `menu-${nanoid(8)}`,
      title: dto.title,
      slug: dto.slug.startsWith('/') ? dto.slug : `/${dto.slug}`,
      icon: dto.icon || 'pi-circle',
      order: nextOrder,
      category: dto.category || 'OPERASIONAL',
      roles: dto.roles || ['ADMIN'],
      isSystem: false,
      description: dto.description || ''
    }
    menus.value.push(newMenu)
    persist()
    return newMenu
  }

  function updateMenu(id: string, updates: Partial<MenuItem>) {
    const idx = menus.value.findIndex(m => m.id === id)
    if (idx !== -1) {
      menus.value[idx] = { ...menus.value[idx], ...updates }
      persist()
    }
  }

  function deleteMenu(id: string) {
    const target = menus.value.find(m => m.id === id)
    if (target?.isSystem) {
      return false // Cannot delete protected system menus
    }
    menus.value = menus.value.filter(m => m.id !== id)
    persist()
    return true
  }

  function reorderCategory(category: MenuItem['category'], reorderedItems: MenuItem[]) {
    // update order numbers
    const updated = reorderedItems.map((item, index) => ({
      ...item,
      order: index + 1
    }))

    // replace items in that category
    menus.value = [
      ...menus.value.filter(m => m.category !== category),
      ...updated
    ]
    persist()
  }

  function resetToDefaults() {
    menus.value = [...INITIAL_MENUS]
    persist()
  }

  return {
    menus,
    isLoaded,
    operationalMenus,
    queueMenus,
    reportMenus,
    masterMenus,
    initMenus,
    addMenu,
    updateMenu,
    deleteMenu,
    reorderCategory,
    resetToDefaults
  }
})
