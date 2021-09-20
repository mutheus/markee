import { ReactComponent as PlusIcon } from './assets/plus-icon.svg'
import { ReactComponent as Logo } from 'shared/assets/logo.svg'
import { ComponentType } from 'files'
import { NavItem } from 'nav-item'
import { v4 as uuidv4 } from 'uuid'

import * as S from './styles/sidebar-style'

export function Sidebar ({ files, setFiles, inputRef }: ComponentType) {
  const handleAddClick = () => {
    setFiles(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat({
        id: uuidv4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  return (
    <S.AsideContainer>
      <S.LogoWrapper>
        <a href='/'>
          <Logo />
        </a>
      </S.LogoWrapper>

      <S.TitleWrapper>
        <S.HorizontalLine />

        <S.Title>Arquivos</S.Title>

        <S.HorizontalLine />
      </S.TitleWrapper>

      <S.Button onClick={handleAddClick}>
        <PlusIcon /> Adicionar arquivo
      </S.Button>

      <nav>
        <S.List>
          {files.map((file) => (
            <NavItem key={file.id} file={file} setFiles={setFiles} inputRef={inputRef} />
          ))}
        </S.List>
      </nav>
    </S.AsideContainer>
  )
}
