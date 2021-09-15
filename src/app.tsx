import styled from 'styled-components'

export function App () {
  return (
    <Title>Hello, world!</Title>
  )
}

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary}
`
