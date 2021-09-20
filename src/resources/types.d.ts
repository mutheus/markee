declare module 'files' {
  import { Dispatch, SetStateAction, RefObject } from 'react'

  export type StatusType = 'saved' | 'saving' | 'editing'

  export type FileType = {
    id: string
    name: string
    content: string
    active: boolean
    status: StatusType
  }

  export type ComponentType = {
    files: FileType[]
    setFiles: Dispatch<SetStateAction<FileType[]>>
    inputRef: RefObject<HTMLInputElement>
  }
}
