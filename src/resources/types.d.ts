declare module 'files' {
  import { RefObject } from 'react'

  export type StatusType = 'saved' | 'saving' | 'editing'

  export type FileType = {
    id: string
    name: string
    content: string
    active: boolean
    status: StatusType
  }

  export type FilesType = {
    files: FileType[]
  }

  export type StaticType = {
    inputRef: RefObject<HTMLInputElement>
  }
}
