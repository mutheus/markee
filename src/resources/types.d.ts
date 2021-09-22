declare module 'files' {
  import { MouseEvent } from 'react'

  export type StatusType = 'saved' | 'saving' | 'editing'

  export type FileType = {
    id: string
    name: string
    content: string
    active: boolean
    status: StatusType
  }

  export type SidebarType = {
    onRemoveFile: (id: string) => (e: MouseEvent) => void
    onSelectFile: (id: string) => (e: MouseEvent) => void
  }
}
