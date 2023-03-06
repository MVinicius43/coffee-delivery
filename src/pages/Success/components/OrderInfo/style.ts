import styled from 'styled-components'

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 2rem;
  margin-top: 2.5rem;
  border: 1px solid;
  border-radius: 6px 36px !important;
  border-image: linear-gradient(rgba(219, 172, 44, 1), rgba(128, 71, 248, 1));
  border-image-slice: 1;
`

export const OrderItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  width: 100%;
`
const ICON_COLOR = {
  'yellow-dark': 'yellow-dark',
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
  background-color: ${(props) =>
    props.theme[ICON_COLOR[props.iconBackgroundColor]]};
  border-radius: 1000px;
  width: 2rem;
  height: 2rem;
`

export const Descriptions = styled.p`
  font-size: 1rem;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 1.3rem;
  color: ${(props) => props.theme['base-text']};

  @media (max-width: 1400px) {
    p {
      font-size: 0.9rem;
    }
  }
`
