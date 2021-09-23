import { ReactComponent as PlusIcon } from './assets/plus-icon.svg'
import { ReactComponent as Logo } from 'shared/assets/logo.svg'
import { FileType, SidebarType } from 'files'
import { NavItem } from 'nav-item'
import * as S from './styles/sidebar-style'

type SidebarProps = {
  files: FileType[]
  onAddFile: () => void
}

export function Sidebar ({
  files,
  onAddFile,
  onRemoveFile,
  onSelectFile,
}: SidebarProps & SidebarType) {
  return (
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

      <S.Button onClick={onAddFile}>
        <PlusIcon /> Add a new file
      </S.Button>

      <nav>
        <S.List>
          {files.map((file) => (
            <NavItem key={file.id} file={file} onRemoveFile={onRemoveFile} onSelectFile={onSelectFile} />
          ))}
        </S.List>
      </nav>
    </S.AsideContainer>
  )
}
