declare module 'files' {
  import { Dispatch, SetStateAction } from 'react'

  export type FileProps = {
    id: number
    name: string
    content: string
    active: boolean
    status: string
  }

  export type FilesProps = {
    files: FileProps[]
    setFiles: Dispatch<SetStateAction>
  }
}
