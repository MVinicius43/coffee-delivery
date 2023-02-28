import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`
export const IntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.9rem;
  gap: 1rem;
  color: ${(props) => props.theme['base-title']};

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`
export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`
export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.25rem;
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme['base-text']};
`
const ICON_COLOR = {
  'yellow-dark': 'yellow-dark',
  'base-text': 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface iconProps {
  iconBackgroundColor: keyof typeof ICON_COLOR
}

export const Icon = styled.div<iconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  color: ${(props) => props.theme.background};
  background-color: ${(props) =>
    props.theme[ICON_COLOR[props.iconBackgroundColor]]};
`
