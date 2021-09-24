import { ReactComponent as PlusIcon } from 'shared/assets/plus-icon.svg'
import { ReactComponent as Logo } from 'shared/assets/logo.svg'
import { FileType, SidebarType } from 'files'
import { NavItem } from 'nav-item'
import * as S from './styles/sidebar-style'
import { MouseEvent } from 'react'

type SidebarProps = {
  files: FileType[]
  onAddFile: () => void
  isMenuOpen: boolean
  toggleMenu: () => void
}

export function Sidebar ({
  files,
  onAddFile,
  onRemoveFile,
  onSelectFile,
  isMenuOpen,
  toggleMenu,
}: SidebarProps & SidebarType) {
  const closeMenu = (e: MouseEvent) => {
    if (e.currentTarget === e.target) {
      toggleMenu()
    }
  }

  return (
    <S.Overlay isMenuOpen={isMenuOpen} onClick={(e) => closeMenu(e)}>
      <S.AsideContainer>
        <S.LogoWrapper>
          <a href='/'>
            <Logo />
          </a>
        </S.LogoWrapper>

        <S.TitleWrapper>
          <S.HorizontalLine />

          <S.Title>Archives</S.Title>

          <S.HorizontalLine />
        </S.TitleWrapper>

        <S.AddButton onClick={onAddFile}>
          <PlusIcon /> Add a new file
        </S.AddButton>

        <nav>
          <S.List>
            {files.map((file) => (
              <NavItem key={file.id} file={file} onRemoveFile={onRemoveFile} onSelectFile={onSelectFile} />
            ))}
          </S.List>
        </nav>
      </S.AsideContainer>
    </S.Overlay>
  )
}
