import { Dispatch, MouseEvent, RefObject, SetStateAction } from 'react'
import { ReactComponent as FileIcon } from 'shared/assets/file-icon.svg'
import { ReactComponent as RemoveIcon } from './assets/remove-icon.svg'
import { ReactComponent as ToSaveIcon } from './assets/to-save-icon.svg'
import { ReactComponent as SavingIcon } from './assets/saving-icon.svg'
import { ReactComponent as SavedIcon } from './assets/saved-icon.svg'
import styled, { css, keyframes } from 'styled-components'
import { FileType } from 'files'

type ListItemProps = {
  active: boolean
}

type NavItemProps = {
  file: FileType
  setFiles: Dispatch<SetStateAction<FileType[]>>
  inputRef: RefObject<HTMLInputElement>
}

export function NavItem ({ file, setFiles, inputRef }: NavItemProps) {
  const handleItemClick = (e: MouseEvent<HTMLLIElement>, id: string) => {
    e.preventDefault()
    inputRef.current?.focus()

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

  const handleRemoveClick = (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation()
    setFiles(files => files.filter(file => file.id !== id))
  }

  return (
    <ListItem active={file.active} onClick={(e) => handleItemClick(e, file.id)}>
      <FileIcon />

      <ListLink href={file.id}>{file.name}</ListLink>

      {file.active && file.status === 'editing'
        ? (
          <ToSaveIcon />
          )
        : file.active && file.status === 'saving'
          ? (
            <SavingSpinner />
            )
          : file.active && file.status === 'saved'
            ? (
              <SavedIcon />
              )
            : (
              <RemoveButton onClick={(e) => handleRemoveClick(e, file.id)}>
                <RemoveIcon />
              </RemoveButton>
              )}
    </ListItem>
  )
}

const ListItem = styled.li<ListItemProps>`${({ active, theme }) => css`
  list-style-type: none;
  display: flex;
  gap: 12px;
  place-items: center;
  height: 37px;
  padding: 0 .7em;
  border-radius: 6px;

  background-color: ${active && theme.colors.lightBlack};

  a {
    color: ${active ? theme.colors.white : 'rgba(255, 255, 255, .65)'};
  }

  svg path {
    stroke: ${active ? theme.colors.primary : theme.colors.white};
    stroke-opacity: ${active && 'unset'};
  }

  &:hover {
    background-color: ${theme.colors.lightBlack};

    ${RemoveButton} {
      visibility: initial;
    }
  }

  *:last-child {
    margin-left: auto;
  }
`}`

const ListLink = styled.a`
  text-decoration: none;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.colors.white}
  }
`

const RemoveButton = styled.button`
  background-color: transparent;
  visibility: hidden;
  border: none;
  cursor: pointer;
  padding: 0;
`

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SavingSpinner = styled(SavingIcon)`
  animation: 2000ms ${spinning} infinite linear;
`
