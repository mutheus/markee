declare module 'app-types' {
  export type FileProps = {
    id: number
    name: string
    content: string
    active: boolean
    status: string
  }

  export type FilesProps = {
    files: FileProps[]
  }
}
