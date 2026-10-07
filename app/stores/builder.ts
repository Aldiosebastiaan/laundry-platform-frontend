import { defineStore } from 'pinia'

export interface CanvasBlock {
  id: string
  type: string
  title: string
  gridSpan?: string
  props: Record<string, any>
}

export interface CanvasPageSchema {
  id: string
  page: string
  title: string
  layout: string
  version: string
  lastUpdated: string
  blocks: CanvasBlock[]
}

export const useBuilderStore = defineStore('builder', () => {
  // Global toggle for Edit Mode (ON / OFF)
  const isEditMode = ref(false)

  // Selected block / menu in active edit
  const activeSelectedId = ref<string | null>(null)

  // Current canvas schema
  const currentSchema = ref<CanvasPageSchema>({
    id: 'page-dashboard-01',
    page: '/dashboard',
    title: 'Dashboard Operasional',
    layout: 'default-dashboard',
    version: '1.2.0',
    lastUpdated: new Date().toISOString(),
    blocks: [
      {
        id: 'block-kpi-grid',
        type: 'KpiStatGrid',
        title: 'KPI Stat Grid',
        gridSpan: 'col-span-12',
        props: {
          columns: 4,
          cards: [
            { id: 'stat-orders', title: 'Order Masuk Hari Ini', value: '48 Order', subtext: 'Total bobot 142.5 Kg', trend: '+12% vs kemarin', icon: 'pi-shopping-bag' },
            { id: 'stat-revenue', title: 'Omset Hari Ini', value: 'Rp 1.845.000', subtext: '34 Lunas, 14 Belum Lunas', trend: '+18% vs kemarin', icon: 'pi-wallet' },
            { id: 'stat-ready', title: 'Siap Diambil / Diantar', value: '12 Order', subtext: '8 paket menunggu serah terima', trend: 'SLA Tepat Waktu 98%', icon: 'pi-check-circle' },
            { id: 'stat-active-wash', title: 'Sedang Dikerjakan', value: '13 Order', subtext: '8 Antrian Cuci, 5 Setrika', trend: 'Kapasitas Mesin 80%', icon: 'pi-sync' }
          ]
        }
      },
      {
        id: 'block-workflow-table',
        type: 'WorkflowQueueTable',
        title: 'Tabel Antrian Cucian & Workflow',
        gridSpan: 'col-span-12',
        props: {
          showFilters: true,
          pagination: { pageSize: 10, currentPage: 1 },
          columns: ['No. Nota', 'Pelanggan', 'Layanan', 'Bobot', 'Total Biaya', 'Tahap Alur Kerja', 'Aksi']
        }
      }
    ]
  })

  function toggleEditMode() {
    isEditMode.value = !isEditMode.value
    if (!isEditMode.value) {
      activeSelectedId.value = null
    }
  }

  function setEditMode(state: boolean) {
    isEditMode.value = state
    if (!state) {
      activeSelectedId.value = null
    }
  }

  function setSelectedId(id: string | null) {
    activeSelectedId.value = id
  }

  function updateSchema(newSchema: Partial<CanvasPageSchema>) {
    currentSchema.value = {
      ...currentSchema.value,
      ...newSchema,
      lastUpdated: new Date().toISOString()
    }
  }

  return {
    isEditMode,
    activeSelectedId,
    currentSchema,
    toggleEditMode,
    setEditMode,
    setSelectedId,
    updateSchema
  }
})

