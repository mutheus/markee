import { ReactComponent as FileIcon } from 'shared/assets/file-icon.svg'
import { ReactComponent as RemoveIcon } from 'shared/assets/remove-icon.svg'
import { ReactComponent as ToSaveIcon } from 'shared/assets/to-save-icon.svg'
import { ReactComponent as SavedIcon } from 'shared/assets/saved-icon.svg'
import { FileType, SidebarType } from 'files'
import * as S from './styles/nav-item-style'

type NavItemProps = {
  file: FileType
}

export function NavItem ({
  file,
  onRemoveFile,
  onSelectFile,
}: NavItemProps & SidebarType) {
  return (
    <S.ListItem active={file.active} onClick={onSelectFile(file.id)}>
      <FileIcon />

      <S.ListLink>{file.name}</S.ListLink>

      {file.active && file.status === 'editing'
        ? (
          <ToSaveIcon />
          )
        : file.active && file.status === 'saving'
          ? (
            <S.SavingSpinner />
            )
          : file.active && file.status === 'saved'
            ? (
              <SavedIcon />
              )
            : (
              <S.RemoveButton onClick={onRemoveFile(file.id)}>
                <RemoveIcon />
              </S.RemoveButton>
              )}
    </S.ListItem>
  )
}
