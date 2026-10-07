<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppSidebar from '~/components/layout/AppSidebar.vue'
import { useBuilderStore } from '~/stores/builder'

const builderStore = useBuilderStore()
const isDesktopSidebarOpen = ref(true)
const isMobileSidebarOpen = ref(false)
const isJsonModalOpen = ref(false)
const isCopied = ref(false)
const currentTheme = ref<'dark' | 'light' | 'dracula'>('dark')

function handleToggleSidebar() {
  if (import.meta.client && window.innerWidth >= 1024) {
    isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value
  } else {
    isMobileSidebarOpen.value = !isMobileSidebarOpen.value
  }
}

const formattedJson = computed(() => {
  return JSON.stringify(builderStore.currentSchema, null, 2)
})

const jsonLines = computed(() => {
  return formattedJson.value.split('\n')
})

function highlightLine(line: string, theme: 'dark' | 'light' | 'dracula'): string {
  // Escape HTML characters
  const escaped = line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Regex tokenization for JSON syntax highlighting
  return escaped.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
      let cls = ''
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          // JSON Object Key
          if (theme === 'dark') cls = 'text-sky-300 font-semibold'
          else if (theme === 'light') cls = 'text-indigo-600 font-semibold'
          else cls = 'text-pink-400 font-semibold' // dracula
        } else {
          // String Value
          if (theme === 'dark') cls = 'text-emerald-300'
          else if (theme === 'light') cls = 'text-emerald-600 font-medium'
          else cls = 'text-yellow-300' // dracula
        }
      } else if (/true|false/.test(match)) {
        // Boolean
        if (theme === 'dark') cls = 'text-amber-400 font-bold'
        else if (theme === 'light') cls = 'text-amber-600 font-bold'
        else cls = 'text-purple-400 font-bold'
      } else if (/null/.test(match)) {
        // Null
        if (theme === 'dark') cls = 'text-rose-400 italic'
        else if (theme === 'light') cls = 'text-rose-600 italic'
        else cls = 'text-red-400 italic'
      } else {
        // Numbers
        if (theme === 'dark') cls = 'text-purple-300 font-mono font-medium'
        else if (theme === 'light') cls = 'text-purple-600 font-mono font-medium'
        else cls = 'text-cyan-300 font-mono font-medium'
      }
      return `<span class="${cls}">${match}</span>`
    }
  )
}

function openJsonModal() {
  isJsonModalOpen.value = true
}

async function copyJsonToClipboard() {
  try {
    await navigator.clipboard.writeText(formattedJson.value)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy JSON:', err)
  }
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
    <!-- 1. GLOBAL HEADER -->
    <AppHeader :is-sidebar-open="isDesktopSidebarOpen" @toggle-sidebar="handleToggleSidebar" />

    <!-- 2. MAIN LAYOUT SHELL (SIDEBAR + CONTENT) -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Desktop Sidebar -->
      <div v-show="isDesktopSidebarOpen" class="hidden lg:block transition-all duration-300">
        <AppSidebar />
      </div>

      <!-- Mobile Sidebar Drawer -->
      <div v-if="isMobileSidebarOpen" class="fixed inset-0 z-50 flex lg:hidden">
        <div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
          @click="isMobileSidebarOpen = false" />
        <div class="relative z-10 flex w-72 flex-col bg-white">
          <AppSidebar />
        </div>
      </div>

      <!-- Main Canvas Area -->
      <main class="flex-1 overflow-y-auto">
        <!-- Edit Mode Top Sticky Banner -->
        <div v-if="builderStore.isEditMode"
          class="sticky top-0 z-20 flex items-center justify-between border-b border-primary/20 bg-primary/10 px-6 py-2.5 backdrop-blur-sm animate-fade-in">
          <div class="flex items-center gap-2.5">
            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
              <i class="pi pi-palette text-xs" />
            </span>
            <div>
              <p class="text-xs font-bold text-primary">
                Canvas Page Builder Aktif
              </p>
              <p class="text-[11px] text-primary/80">
                Anda dapat menambahkan blok baru, mengubah teks, atau mengubah tata letak halaman ini secara langsung.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <!-- View JSON Button (Left of Simpan Perubahan) -->
            <button type="button"
              class="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-white px-3 py-1.5 text-xs font-bold text-primary shadow-sm hover:bg-primary-50 hover:border-primary transition-all active:scale-95"
              @click="openJsonModal">
              <i class="pi pi-code text-xs" />
              <span>View JSON</span>
            </button>

            <!-- Simpan Perubahan Button -->
            <button type="button"
              class="rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white shadow hover:bg-primary-600 transition-colors"
              @click="builderStore.setEditMode(false)">
              <i class="pi pi-save mr-1 text-[10px]" />
              Simpan Perubahan
            </button>
          </div>
        </div>

        <!-- Page Content View -->
        <div class="p-4 sm:p-6 lg:p-8">
          <slot />
        </div>
      </main>
    </div>

    <!-- JSON SCHEMA VIEWER MODAL WITH THEME SELECTION -->
    <div v-if="isJsonModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md animate-fade-in"
      @click.self="isJsonModalOpen = false">
      <div
        class="flex w-full max-w-4xl flex-col max-h-[88vh] rounded-2xl bg-white shadow-2xl border border-slate-200/80 overflow-hidden transition-all">
        <!-- Modal Header -->
        <div
          class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200/80 px-6 py-4 bg-slate-50/80">
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm shadow-primary/20">
              <i class="pi pi-code text-base" />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base font-bold text-slate-900">Canvas Schema JSON</h3>
                <span
                  class="rounded-md bg-primary-50 border border-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
                  {{ builderStore.currentSchema.page }}
                </span>
              </div>
              <p class="text-xs text-slate-500">
                Skema struktur blok canvas dalam format JSON standar.
              </p>
            </div>
          </div>

          <!-- Theme Switcher & Close -->
          <div class="flex items-center gap-2.5">
            <!-- Theme Buttons -->
            <div class="flex items-center rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
              <button type="button"
                class="flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all"
                :class="currentTheme === 'dark' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'"
                @click="currentTheme = 'dark'">
                <i class="pi pi-moon text-[11px]" />
                <span>Dark Pro</span>
              </button>
              <button type="button"
                class="flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all"
                :class="currentTheme === 'dracula' ? 'bg-purple-900 text-purple-100 shadow-sm' : 'text-slate-600 hover:text-slate-900'"
                @click="currentTheme = 'dracula'">
                <i class="pi pi-bolt text-[11px] text-pink-400" />
                <span>Dracula</span>
              </button>
              <button type="button"
                class="flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all"
                :class="currentTheme === 'light' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'"
                @click="currentTheme = 'light'">
                <i class="pi pi-sun text-[11px]" />
                <span>Light</span>
              </button>
            </div>

            <!-- Close Button -->
            <button type="button"
              class="rounded-xl border border-slate-200 p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              @click="isJsonModalOpen = false">
              <i class="pi pi-times text-sm" />
            </button>
          </div>
        </div>

        <!-- Modal Code Body with Syntax Highlighting & Line Numbers -->
        <div class="flex-1 overflow-y-auto p-4 transition-colors font-mono text-xs leading-relaxed" :class="[
          currentTheme === 'dark' ? 'bg-[#0f172a] text-slate-200' :
            currentTheme === 'dracula' ? 'bg-[#1e1e2e] text-[#cdd6f4]' :
              'bg-[#f8fafc] text-slate-800'
        ]">
          <div class="overflow-x-auto rounded-xl p-2">
            <div v-for="(line, idx) in jsonLines" :key="idx"
              class="flex items-start hover:bg-white/5 px-2 py-0.5 rounded transition-colors group">
              <!-- Line Number -->
              <span class="w-8 shrink-0 select-none text-right pr-4 font-mono text-[11px] transition-colors" :class="[
                currentTheme === 'dark' ? 'text-slate-600 group-hover:text-slate-400' :
                  currentTheme === 'dracula' ? 'text-purple-400/50 group-hover:text-purple-300' :
                    'text-slate-400 group-hover:text-slate-600'
              ]">
                {{ idx + 1 }}
              </span>

              <!-- Code Content with Syntax Tokens -->
              <span class="flex-1 font-mono whitespace-pre" v-html="highlightLine(line, currentTheme)" />
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="flex items-center justify-between border-t border-slate-200/80 px-6 py-3.5 bg-slate-50/80">
          <div class="flex items-center gap-1.5 text-[11px] text-slate-500">
            <i class="pi pi-align-left text-[10px] text-slate-400" />
            <span>Total Baris: <b class="text-slate-800 font-semibold">{{ jsonLines.length }}</b></span>
          </div>

          <div class="flex items-center gap-2">
            <button type="button"
              class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95"
              @click="copyJsonToClipboard">
              <i :class="isCopied ? 'pi pi-check text-emerald-600 font-bold' : 'pi pi-copy text-slate-500'"
                class="text-xs" />
              <span :class="isCopied ? 'text-emerald-700 font-bold' : ''">{{ isCopied ? 'Tersalin ke Clipboard!' : 'Copy JSON' }}</span>
            </button>
            <button type="button"
              class="rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-600 transition-colors"
              @click="isJsonModalOpen = false">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
