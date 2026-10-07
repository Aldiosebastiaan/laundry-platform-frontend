<script setup lang="ts">
import { useBuilderStore } from '~/stores/builder'
import { useAuthStore } from '~/stores/auth'

const builderStore = useBuilderStore()
const authStore = useAuthStore()

// Sample operational metrics
const stats = ref([
  {
    id: 'stat-orders',
    title: 'Order Masuk Hari Ini',
    value: '48 Order',
    subtext: 'Total bobot 142.5 Kg',
    icon: 'pi-shopping-bag',
    trend: '+12% vs kemarin',
    trendPositive: true
  },
  {
    id: 'stat-revenue',
    title: 'Omset Hari Ini',
    value: 'Rp 1.845.000',
    subtext: '34 Lunas, 14 Belum Lunas',
    icon: 'pi-wallet',
    trend: '+18% vs kemarin',
    trendPositive: true
  },
  {
    id: 'stat-ready',
    title: 'Siap Diambil / Diantar',
    value: '12 Order',
    subtext: '8 paket menunggu serah terima',
    icon: 'pi-check-circle',
    trend: 'SLA Tepat Waktu 98%',
    trendPositive: true
  },
  {
    id: 'stat-active-wash',
    title: 'Sedang Dikerjakan',
    value: '13 Order',
    subtext: '8 Antrian Cuci, 5 Setrika',
    icon: 'pi-sync',
    trend: 'Kapasitas Mesin 80%',
    trendPositive: false
  }
])

// Sample active laundry orders
const recentOrders = ref([
  {
    id: 'LND-2026-1048',
    customer: 'Ibu Ratna Sari',
    service: 'Kiloan Reguler (Cuci + Setrika)',
    weight: '4.8 Kg',
    total: 'Rp 48.000',
    status: 'SEDANG_CUCI',
    statusLabel: 'Pencucian',
    statusColor: 'bg-sky-50 text-sky-700 border-sky-200',
    time: '15 menit lalu'
  },
  {
    id: 'LND-2026-1047',
    customer: 'Bpk. Hendra Gunawan',
    service: 'Express 3 Jam',
    weight: '3.2 Kg',
    total: 'Rp 64.000',
    status: 'SEDANG_SETRIKA',
    statusLabel: 'Penyetrikaan',
    statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
    time: '42 menit lalu'
  },
  {
    id: 'LND-2026-1046',
    customer: 'Sdr. Kevin Wijaya',
    service: 'Dry Clean Jas 2 Pcs',
    weight: '2 Pcs',
    total: 'Rp 90.000',
    status: 'SIAP_DIAMBIL',
    statusLabel: 'Siap Diambil',
    statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    time: '1 jam lalu'
  },
  {
    id: 'LND-2026-1045',
    customer: 'Ibu Maya Lestari',
    service: 'Bedcover King + Kiloan',
    weight: '7.5 Kg',
    total: 'Rp 85.000',
    status: 'MENUNGGU_CUCI',
    statusLabel: 'Antrian Cuci',
    statusColor: 'bg-slate-100 text-slate-700 border-slate-200',
    time: '1.5 jam lalu'
  }
])
</script>

<template>
  <div class="space-y-6">
    <!-- Top Greeting & Header Bar -->
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center gap-2">
          <h1 class="text-2xl font-bold tracking-tight text-slate-900 font-sans">
            Dashboard Operasional
          </h1>
          <span class="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary">
            Hari Ini
          </span>
        </div>
        <p class="text-sm text-slate-500 mt-1">
          Pantau volume cucian, pergerakan antrian SOP, dan pendapatan harian outlet laundry.
        </p>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex items-center gap-2.5">
        <NuxtLink to="/kasir"
          class="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-600 transition-colors">
          <i class="pi pi-plus" />
          <span>Order Baru (Kasir)</span>
        </NuxtLink>
        <NuxtLink to="/daily-activity"
          class="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
          <i class="pi pi-calendar text-slate-500" />
          <span>Daily Activity</span>
        </NuxtLink>
      </div>
    </div>

    <!-- 1. STATS CARDS SECTION (EDITABLE BLOCK) -->
    <div class="relative transition-all" :class="[
      builderStore.isEditMode
        ? 'rounded-2xl border-2 border-dashed border-primary/40 bg-primary-50/20 p-3'
        : ''
    ]">
      <!-- Block Edit Toolbar (Shown in Edit Mode) -->
      <div v-if="builderStore.isEditMode"
        class="mb-3 flex items-center justify-between rounded-lg bg-white px-3 py-1.5 shadow-sm border border-slate-200">
        <div class="flex items-center gap-2">
          <i class="pi pi-th-large text-primary text-xs" />
          <span class="text-xs font-bold text-slate-700">Blok: KPI Stat Grid</span>
        </div>
        <div class="flex items-center gap-1.5">
          <button type="button" class="rounded px-2 py-0.5 text-[11px] font-semibold text-slate-600 hover:bg-slate-100">
            <i class="pi pi-sliders-h mr-1" />
            Konfigurasi Grid
          </button>
          <button type="button" class="rounded px-2 py-0.5 text-[11px] font-semibold text-primary hover:bg-primary-50">
            + Tambah Kartu
          </button>
        </div>
      </div>

      <!-- 4 Stat Cards -->
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.id"
          class="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:shadow-md">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {{ stat.title }}
            </span>
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
              <i class="pi text-base" :class="stat.icon" />
            </div>
          </div>

          <div class="mt-3">
            <div class="text-2xl font-bold tracking-tight text-slate-900 font-sans">
              {{ stat.value }}
            </div>
            <p class="mt-0.5 text-xs text-slate-500">
              {{ stat.subtext }}
            </p>
          </div>

          <div class="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-3 text-[11px]">
            <span class="font-semibold" :class="stat.trendPositive ? 'text-emerald-600' : 'text-slate-600'">
              {{ stat.trend }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. RECENT ORDERS & WORKFLOW PROGRESS (EDITABLE BLOCK) -->
    <div class="relative transition-all" :class="[
      builderStore.isEditMode
        ? 'rounded-2xl border-2 border-dashed border-primary/40 bg-primary-50/20 p-3'
        : ''
    ]">
      <div v-if="builderStore.isEditMode"
        class="mb-3 flex items-center justify-between rounded-lg bg-white px-3 py-1.5 shadow-sm border border-slate-200">
        <div class="flex items-center gap-2">
          <i class="pi pi-table text-primary text-xs" />
          <span class="text-xs font-bold text-slate-700">Blok: Tabel Antrian Cucian & Workflow</span>
        </div>
        <div class="flex items-center gap-1.5">
          <button type="button" class="rounded px-2 py-0.5 text-[11px] font-semibold text-slate-600 hover:bg-slate-100">
            <i class="pi pi-filter mr-1" />
            Filter Status
          </button>
        </div>
      </div>

      <div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div class="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h2 class="text-base font-bold text-slate-900 font-sans">
              Antrian Pengerjaan & Alur Cucian Terkini
            </h2>
            <p class="text-xs text-slate-500">
              Status real-time setiap nota cucian yang sedang diproses staf.
            </p>
          </div>
          <NuxtLink to="/antrian-cuci"
            class="text-xs font-bold text-primary hover:text-primary-700 flex items-center gap-1">
            <span>Semua Antrian</span>
            <i class="pi pi-arrow-right text-[10px]" />
          </NuxtLink>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead
              class="border-b border-slate-100 bg-slate-50/80 font-bold uppercase tracking-wider text-slate-500 text-[11px]">
              <tr>
                <th class="px-6 py-3.5">No. Nota</th>
                <th class="px-6 py-3.5">Pelanggan</th>
                <th class="px-6 py-3.5">Layanan</th>
                <th class="px-6 py-3.5">Bobot</th>
                <th class="px-6 py-3.5">Total Biaya</th>
                <th class="px-6 py-3.5">Tahap Alur Kerja</th>
                <th class="px-6 py-3.5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              <tr v-for="order in recentOrders" :key="order.id" class="hover:bg-slate-50/60 transition-colors">
                <td class="px-6 py-4 font-mono font-bold text-primary">
                  {{ order.id }}
                </td>
                <td class="px-6 py-4 font-medium text-slate-900">
                  {{ order.customer }}
                </td>
                <td class="px-6 py-4 text-slate-600">
                  {{ order.service }}
                </td>
                <td class="px-6 py-4 font-semibold text-slate-800">
                  {{ order.weight }}
                </td>
                <td class="px-6 py-4 font-bold text-slate-900">
                  {{ order.total }}
                </td>
                <td class="px-6 py-4">
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                    :class="order.statusColor">
                    <span class="h-1.5 w-1.5 rounded-full bg-current" />
                    {{ order.statusLabel }}
                  </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <button type="button"
                    class="rounded-lg border border-slate-200 px-3 py-1 font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors text-[11px]">
                    Detail Alur
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
