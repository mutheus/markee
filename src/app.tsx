import { useState, useRef, useEffect, ChangeEvent, MouseEvent } from 'react'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { FileType } from 'files'
import { v4 as uuidv4 } from 'uuid'
import localforage from 'localforage'

export function App () {
  const [files, setFiles] = useState<FileType[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const file = files.find(file => file.active === true)
    let timer: globalThis.NodeJS.Timeout

    if (!file) {
      return
    }

    if (file.status === 'editing') {
      timer = setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }

          return file
        }))
      }, 300)
    }

    if (file.status === 'saving') {
      setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saved',
            }
          }

          return file
        }))
      }, 300)
    }

    return () => clearTimeout(timer)
  }, [files])

  useEffect(() => {
    async function setItem () {
      return await localforage.setItem('files', files)
    }

    setItem()
  }, [files])

  useEffect(() => {
    async function getItem () {
      const result = await localforage.getItem<FileType[]>('files')

      setFiles((): FileType[] => {
        if (result) {
          return result
        }

        window.history.replaceState(null, '', '/file/default.md')

        return [
          {
            id: 'default.md',
            name: 'default.md',
            content: '',
            active: true,
            status: 'saved',
          },
        ]
      })
    }

    getItem()
  }, [])

  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files => files
      .map(file => {
        if (file.active) {
          return {
            ...file,
            content: e.target.value,
            status: 'editing',
          }
        }

        return file
      }))
  }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files
      .map(file => {
        if (file.active) {
          return {
            ...file,
            name: e.target.value,
            status: 'editing',
          }
        }

        return file
      }))
  }

  const onAddFile = () => {
    inputRef.current?.focus()
    const id = uuidv4()

    window.history.replaceState(null, '', `/file/${id}`)

    const newFile: FileType = {
      id,
      name: 'Empty title',
      content: '',
      active: true,
      status: 'saved',
    }

    const activeFalse = files.map(file => ({
      ...file,
      active: false,
    }))

    const newFilesArr: FileType[] = [newFile, ...activeFalse]

    setFiles(newFilesArr)
  }

  const onSelectFile = (id: string) => (e: MouseEvent) => {
    e.preventDefault()
    inputRef.current?.focus()

    window.history.replaceState(null, '', `/file/${id}`)

    setFiles(files => files
      .map(file => {
        if (file.id === id) {
          return {
            ...file,
            active: true,
          }
        }

        return {
          ...file,
          active: false,
        }
      }))
  }

  const onRemoveFile = (id: string) => (e: MouseEvent) => {
    e.stopPropagation()
    setFiles(files => files.filter(file => file.id !== id))
  }

  return (
    <Wrapper>
      <Sidebar
        files={files}
        onSelectFile={onSelectFile}
        onAddFile={onAddFile}
        onRemoveFile={onRemoveFile}
      />

      <Content
        onNameChange={onNameChange}
        onContentChange={onContentChange}
        file={files.find(file => file.active === true)}
        inputRef={inputRef}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20.750em 1fr;
`
