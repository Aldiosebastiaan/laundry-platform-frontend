export interface MenuItem {
  id: string
  title: string
  slug: string
  icon: string
  order: number
  badge?: string | number
  badgeSeverity?: 'success' | 'info' | 'warn' | 'danger' | 'secondary'
  category: 'OPERASIONAL' | 'WORKFLOW_QUEUE' | 'LAPORAN' | 'BUILDER_MASTER'
  roles?: string[]
  isSystem?: boolean
  description?: string
}

export interface CreateMenuDTO {
  title: string
  slug: string
  icon: string
  category: 'OPERASIONAL' | 'WORKFLOW_QUEUE' | 'LAPORAN' | 'BUILDER_MASTER'
  roles?: string[]
  description?: string
}
