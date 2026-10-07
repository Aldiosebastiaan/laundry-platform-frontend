<script setup lang="ts">
import { useMenuStore } from '~/stores/menu'
import { useBuilderStore } from '~/stores/builder'
import type { MenuItem, CreateMenuDTO } from '~/types/menu'

const route = useRoute()
const menuStore = useMenuStore()
const builderStore = useBuilderStore()

// Initialize menus on mounted
onMounted(() => {
  if (!menuStore.isLoaded) {
    menuStore.initMenus()
  }
})

// Dialog state for adding/editing menu
const isMenuModalOpen = ref(false)
const isEditing = ref(false)
const editingMenuId = ref<string | null>(null)

const menuForm = reactive<CreateMenuDTO>({
  title: '',
  slug: '',
  icon: 'pi-circle',
  category: 'OPERASIONAL',
  description: ''
})

// Icon catalog for quick selection
const AVAILABLE_ICONS = [
  { label: 'Box / Stok', icon: 'pi-box' },
  { label: 'Tag / Promo', icon: 'pi-tag' },
  { label: 'Truck / Antar', icon: 'pi-truck' },
  { label: 'Pelanggan', icon: 'pi-users' },
  { label: 'Kalender', icon: 'pi-calendar' },
  { label: 'Uang / Kas', icon: 'pi-wallet' },
  { label: 'Mesin / Pengering', icon: 'pi-cog' },
  { label: 'Bintang / VIP', icon: 'pi-star' },
  { label: 'Checklist', icon: 'pi-check-square' }
]

function openAddMenuModal(category: MenuItem['category'] = 'OPERASIONAL') {
  isEditing.value = false
  editingMenuId.value = null
  menuForm.title = ''
  menuForm.slug = ''
  menuForm.icon = 'pi-box'
  menuForm.category = category
  menuForm.description = ''
  isMenuModalOpen.value = true
}

function openEditMenuModal(item: MenuItem) {
  isEditing.value = true
  editingMenuId.value = item.id
  menuForm.title = item.title
  menuForm.slug = item.slug
  menuForm.icon = item.icon
  menuForm.category = item.category
  menuForm.description = item.description || ''
  isMenuModalOpen.value = true
}

// Auto generate slug from title if user is creating
watch(() => menuForm.title, (newTitle) => {
  if (!isEditing.value && newTitle) {
    const clean = newTitle
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
    menuForm.slug = `/${clean}`
  }
})

function submitMenuForm() {
  if (!menuForm.title.trim()) return

  if (isEditing.value && editingMenuId.value) {
    menuStore.updateMenu(editingMenuId.value, {
      title: menuForm.title,
      slug: menuForm.slug.startsWith('/') ? menuForm.slug : `/${menuForm.slug}`,
      icon: menuForm.icon,
      category: menuForm.category,
      description: menuForm.description
    })
  } else {
    menuStore.addMenu({ ...menuForm })
  }
  isMenuModalOpen.value = false
}

function handleDeleteMenu(item: MenuItem) {
  if (item.isSystem) return
  if (confirm(`Hapus menu "${item.title}"?`)) {
    menuStore.deleteMenu(item.id)
  }
}

function isPathActive(slug: string): boolean {
  if (slug === '/dashboard' && route.path === '/') return true
  return route.path === slug || route.path.startsWith(`${slug}/`)
}
</script>

<template>
  <aside
    class="flex h-[calc(100vh-4rem)] w-64 flex-col border-r border-slate-200 bg-white transition-all duration-300"
    :class="[builderStore.isEditMode ? 'ring-2 ring-primary/20 bg-slate-50/30' : '']"
  >
    <!-- Edit Mode Indicator Banner on Sidebar -->
    <div
      v-if="builderStore.isEditMode"
      class="border-b border-primary-200 bg-primary/10 px-4 py-2.5"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="pi pi-sliders-h text-xs text-primary" />
          <span class="text-xs font-bold text-primary">Mode Edit Menu</span>
        </div>
        <button
          type="button"
          class="flex items-center gap-1 rounded bg-primary px-2 py-0.5 text-[11px] font-semibold text-white shadow hover:bg-primary-600"
          @click="openAddMenuModal('OPERASIONAL')"
        >
          <i class="pi pi-plus text-[9px]" />
          <span>Tambah</span>
        </button>
      </div>
      <p class="mt-1 text-[10px] text-primary-700">
        Klik pensil untuk edit nama/ikon menu, atau tombol tambah untuk menu baru.
      </p>
    </div>

    <!-- Navigation Scroll Container -->
    <div class="flex-1 overflow-y-auto px-3 py-4 space-y-6">
      <!-- 1. GRUP OPERASIONAL -->
      <div>
        <div class="mb-2 flex items-center justify-between px-2">
          <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-sans">
            Operasional
          </span>
          <button
            v-if="builderStore.isEditMode"
            type="button"
            class="text-primary hover:text-primary-700 text-xs font-semibold"
            title="Tambah Menu Operasional"
            @click="openAddMenuModal('OPERASIONAL')"
          >
            <i class="pi pi-plus-circle" />
          </button>
        </div>

        <nav class="space-y-1">
          <div
            v-for="item in menuStore.operationalMenus"
            :key="item.id"
            class="group relative flex items-center rounded-lg transition-colors"
            :class="[
              isPathActive(item.slug)
                ? 'bg-primary-50 text-primary font-bold'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            ]"
          >
            <!-- Regular Link -->
            <NuxtLink
              :to="item.slug"
              class="flex flex-1 items-center gap-3 px-3 py-2 text-sm"
            >
              <i
                class="pi text-base transition-colors"
                :class="[
                  item.icon,
                  isPathActive(item.slug) ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'
                ]"
              />
              <span class="truncate">{{ item.title }}</span>

              <span
                v-if="item.badge"
                class="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary"
              >
                {{ item.badge }}
              </span>
            </NuxtLink>

            <!-- Inline Edit Controls (Shown when Edit Mode is ON) -->
            <div
              v-if="builderStore.isEditMode"
              class="flex items-center gap-1 pr-2 opacity-90 transition-opacity"
            >
              <button
                type="button"
                class="flex h-6 w-6 items-center justify-center rounded text-slate-400 hover:bg-white hover:text-primary"
                title="Edit Menu"
                @click.stop.prevent="openEditMenuModal(item)"
              >
                <i class="pi pi-pencil text-[11px]" />
              </button>
              <button
                v-if="!item.isSystem"
                type="button"
                class="flex h-6 w-6 items-center justify-center rounded text-slate-400 hover:bg-white hover:text-rose-600"
                title="Hapus Menu"
                @click.stop.prevent="handleDeleteMenu(item)"
              >
                <i class="pi pi-trash text-[11px]" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <!-- 2. GRUP STATUS WORKFLOW / ANTRIAN -->
      <div>
        <div class="mb-2 flex items-center justify-between px-2">
          <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-sans">
            Antrian Cucian
          </span>
          <button
            v-if="builderStore.isEditMode"
            type="button"
            class="text-primary hover:text-primary-700 text-xs font-semibold"
            title="Tambah Antrian"
            @click="openAddMenuModal('WORKFLOW_QUEUE')"
          >
            <i class="pi pi-plus-circle" />
          </button>
        </div>

        <nav class="space-y-1">
          <div
            v-for="item in menuStore.queueMenus"
            :key="item.id"
            class="group relative flex items-center rounded-lg transition-colors"
            :class="[
              isPathActive(item.slug)
                ? 'bg-primary-50 text-primary font-bold'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            ]"
          >
            <NuxtLink
              :to="item.slug"
              class="flex flex-1 items-center gap-3 px-3 py-2 text-sm"
            >
              <i
                class="pi text-base"
                :class="[
                  item.icon,
                  isPathActive(item.slug) ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'
                ]"
              />
              <span class="truncate">{{ item.title }}</span>

              <span
                v-if="item.badge !== undefined"
                class="ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                :class="[
                  item.badgeSeverity === 'warn' ? 'bg-amber-500' :
                  item.badgeSeverity === 'success' ? 'bg-emerald-500' : 'bg-primary'
                ]"
              >
                {{ item.badge }}
              </span>
            </NuxtLink>

            <div
              v-if="builderStore.isEditMode"
              class="flex items-center gap-1 pr-2"
            >
              <button
                type="button"
                class="flex h-6 w-6 items-center justify-center rounded text-slate-400 hover:bg-white hover:text-primary"
                @click.stop.prevent="openEditMenuModal(item)"
              >
                <i class="pi pi-pencil text-[11px]" />
              </button>
              <button
                v-if="!item.isSystem"
                type="button"
                class="flex h-6 w-6 items-center justify-center rounded text-slate-400 hover:bg-white hover:text-rose-600"
                @click.stop.prevent="handleDeleteMenu(item)"
              >
                <i class="pi pi-trash text-[11px]" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <!-- 3. GRUP LAPORAN -->
      <div>
        <div class="mb-2 flex items-center justify-between px-2">
          <span class="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-sans">
            Laporan
          </span>
          <button
            v-if="builderStore.isEditMode"
            type="button"
            class="text-primary hover:text-primary-700 text-xs font-semibold"
            @click="openAddMenuModal('LAPORAN')"
          >
            <i class="pi pi-plus-circle" />
          </button>
        </div>

        <nav class="space-y-1">
          <div
            v-for="item in menuStore.reportMenus"
            :key="item.id"
            class="group relative flex items-center rounded-lg transition-colors"
            :class="[
              isPathActive(item.slug)
                ? 'bg-primary-50 text-primary font-bold'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            ]"
          >
            <NuxtLink
              :to="item.slug"
              class="flex flex-1 items-center gap-3 px-3 py-2 text-sm"
            >
              <i
                class="pi text-base"
                :class="[
                  item.icon,
                  isPathActive(item.slug) ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'
                ]"
              />
              <span class="truncate">{{ item.title }}</span>
            </NuxtLink>

            <div
              v-if="builderStore.isEditMode"
              class="flex items-center gap-1 pr-2"
            >
              <button
                type="button"
                class="flex h-6 w-6 items-center justify-center rounded text-slate-400 hover:bg-white hover:text-primary"
                @click.stop.prevent="openEditMenuModal(item)"
              >
                <i class="pi pi-pencil text-[11px]" />
              </button>
              <button
                v-if="!item.isSystem"
                type="button"
                class="flex h-6 w-6 items-center justify-center rounded text-slate-400 hover:bg-white hover:text-rose-600"
                @click.stop.prevent="handleDeleteMenu(item)"
              >
                <i class="pi pi-trash text-[11px]" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <!-- 4. GRUP MASTER BUILDER (KHUSUS ADMIN) -->
      <div class="border-t border-slate-200/80 pt-4">
        <div class="mb-2 px-2">
          <span class="text-[11px] font-bold tracking-wider text-primary uppercase font-sans flex items-center gap-1.5">
            <i class="pi pi-cog text-xs" />
            <span>Master Builder</span>
          </span>
        </div>

        <nav class="space-y-1">
          <NuxtLink
            v-for="item in menuStore.masterMenus"
            :key="item.id"
            :to="item.slug"
            class="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            :class="[
              isPathActive(item.slug)
                ? 'bg-primary-50 text-primary font-bold'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            ]"
          >
            <i
              class="pi text-base"
              :class="[
                item.icon,
                isPathActive(item.slug) ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'
              ]"
            />
            <span class="truncate">{{ item.title }}</span>
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- Quick Add Menu Button at Bottom of Sidebar when Edit Mode is ON -->
    <div
      v-if="builderStore.isEditMode"
      class="border-t border-slate-200 p-3 bg-white"
    >
      <button
        type="button"
        class="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-primary/40 bg-primary-50/50 py-2.5 text-xs font-bold text-primary transition-colors hover:border-primary hover:bg-primary-50"
        @click="openAddMenuModal('OPERASIONAL')"
      >
        <i class="pi pi-plus-circle text-sm" />
        <span>+ Tambah Menu Baru</span>
      </button>
    </div>

    <!-- DIALOG MODAL: TAMBAH / EDIT MENU -->
    <div
      v-if="isMenuModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm animate-fade-in"
      @click.self="isMenuModalOpen = false"
    >
      <div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all">
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary">
              <i class="pi text-sm" :class="isEditing ? 'pi-pencil' : 'pi-plus'" />
            </div>
            <h3 class="text-base font-bold text-slate-900">
              {{ isEditing ? 'Edit Menu Sidebar' : 'Tambah Menu Baru' }}
            </h3>
          </div>
          <button
            type="button"
            class="text-slate-400 hover:text-slate-600"
            @click="isMenuModalOpen = false"
          >
            <i class="pi pi-times" />
          </button>
        </div>

        <form class="mt-4 space-y-4" @submit.prevent="submitMenuForm">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">
              Judul Menu
            </label>
            <input
              v-model="menuForm.title"
              type="text"
              placeholder="Contoh: Daily Stock, Customer VIP"
              class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">
              URL / Path Slug
            </label>
            <div class="flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500">
              <span>https://laundry.app</span>
              <input
                v-model="menuForm.slug"
                type="text"
                placeholder="/daily-stock"
                class="flex-1 bg-transparent px-2 py-2 text-slate-800 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">
              Kategori Menu
            </label>
            <select
              v-model="menuForm.category"
              class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="OPERASIONAL">Operasional</option>
              <option value="WORKFLOW_QUEUE">Antrian Cucian</option>
              <option value="LAPORAN">Laporan</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">
              Pilih Ikon Menu
            </label>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="ic in AVAILABLE_ICONS"
                :key="ic.icon"
                type="button"
                class="flex items-center gap-2 rounded-lg border p-2 text-left text-xs transition-colors"
                :class="[
                  menuForm.icon === ic.icon
                    ? 'border-primary bg-primary-50 text-primary font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                ]"
                @click="menuForm.icon = ic.icon"
              >
                <i class="pi text-sm" :class="ic.icon" />
                <span class="truncate">{{ ic.label }}</span>
              </button>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">
              Deskripsi Singkat (Opsional)
            </label>
            <textarea
              v-model="menuForm.description"
              rows="2"
              placeholder="Deskripsi tujuan halaman menu ini..."
              class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div class="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              class="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              @click="isMenuModalOpen = false"
            >
              Batal
            </button>
            <button
              type="submit"
              class="rounded-lg bg-primary px-5 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-600 transition-colors"
            >
              {{ isEditing ? 'Simpan Perubahan' : 'Tambahkan Menu' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </aside>
</template>
