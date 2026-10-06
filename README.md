# Laundry Platform — Frontend (Nuxt 4)

Antarmuka web dinamis untuk platform bisnis pengelolaan laundry, dibangun menggunakan **Nuxt 4** dan **Vue 3** dengan arsitektur modular (*layers*) setara dengan InPension Remake.

---

## 🎯 Fokus & Karakteristik Frontend

- **Dynamic Layout & Edit Mode Toggle**: Header global menyediakan sakelar `isEditMode`. Saat aktif, admin (`admin1@yopmail.com`) dapat mengelola menu sidebar dan mengedit susunan blok halaman secara visual.
- **Catch-All Dynamic Routing (`[...slug].vue`)**: Semua rute halaman bisnis dilayani oleh satu entry router dinamis yang membaca konfigurasi layout JSON dari state/backend.
- **Node-Based Workflow Builder**: Kanvas visual berbasis `@vue-flow/core` untuk mendesain alur proses pencucian secara drag-and-drop.
- **JSON Schema Form Designer**: Perancang formulir dinamis dengan validasi *runtime* menggunakan VeeValidate & Zod.
- **Enterprise UI Components**: Integrasi PrimeVue 5 dengan tema **Aura** dan styling utilitas Tailwind CSS.

---

## 📦 Dependensi Utama

| Kategori | Paket / Library | Kegunaan |
| :--- | :--- | :--- |
| **Framework** | `nuxt` (v4.5.x), `vue` (v3.5.x) | SSR/SPA Framework dan Core Reactivity |
| **UI Components** | `@primevue/nuxt-module`, `primevue`, `@primeuix/themes` | Komponen enterprise (Dialog, Drawer, Input, DataTable) bertema Aura |
| **Styling & Ikon** | `@nuxtjs/tailwindcss`, `@nuxt/icon`, `primeicons` | Utility styling & kumpulan ikon lengkap |
| **State Management** | `@pinia/nuxt`, `pinia` | State terpusat (`builderStore`, `menuStore`, `authStore`) |
| **Workflow Engine** | `@vue-flow/core`, `@vue-flow/background`, `@vue-flow/controls` | Editor diagram alur node & edge |
| **Drag & Drop** | `vue-draggable-plus` | Reorder menu sidebar & kanvas blok |
| **Form & Validasi** | `vee-validate`, `@vee-validate/zod`, `zod` | Skema validasi formulir dinamis |
| **Visualisasi & Resi** | `chart.js`, `vue-chartjs`, `qrcode.vue` | Grafik omset dan barcode resi nota laundry |
| **Utilitas** | `@vueuse/core`, `nanoid`, `uuid` | Composable helper & generator identifier unik |

---

## 📁 Struktur Direktori Frontend

```text
frontend/
├── app/
│   ├── app.vue                   # Root application entry
│   ├── components/               # Komponen UI global (Header, Dynamic Sidebar, PageRenderer)
│   ├── layouts/                  # Layout utama (DefaultLayout dengan Header & Sidebar)
│   ├── pages/
│   │   ├── [...slug].vue         # Catch-all router dinamis
│   │   └── admin/                # Halaman master builder khusus admin
│   ├── stores/                   # Pinia stores (useBuilderStore, useMenuStore, useAuthStore)
│   └── types/                    # Definisi tipe TypeScript (Menu, PageLayout, Block, Workflow)
│
├── layers/                       # Arsitektur modular per kapabilitas
│   ├── builder/                  # Core canvas page builder & blok registry
│   ├── form-builder/             # Form schema designer & dynamic form renderer
│   └── workflow-builder/         # Vue Flow canvas & node inspector
│
├── public/                       # Berkas statis
├── nuxt.config.ts                # Konfigurasi Nuxt, PrimeVue Aura, Tailwind
└── package.json                  # Konfigurasi script dan dependensi
```

---

## 💻 Panduan Menjalankan

### 1. Instalasi Dependensi
```bash
pnpm install
```

### 2. Generate Tipe Nuxt
```bash
npx nuxi prepare
```

### 3. Mode Pengembangan
```bash
pnpm dev
```
Buka browser di `http://localhost:3000`.

### 4. Build Produksi
```bash
pnpm build
pnpm preview
```
