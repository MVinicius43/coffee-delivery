import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 9.81rem;
  gap: 2rem;

  p:first-child {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    width: 100%;
    height: 0;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.25rem;
  width: 16rem;
  height: 19.375rem;
  margin-top: 3.375rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const CoffeeVarieties = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;
  margin-top: 0.75rem;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.8125rem;
`

export const CoffeeTitle = styled.p`
  margin-top: 1rem;
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
`

export const CoffeeDescription = styled.p`
  text-align: center;
  color: ${(props) => props.theme['base-label']};
  width: 13.5rem;
  height: 2.25rem;
  margin-top: 0.5rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.1375rem;
`

export const CoffeeValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2.0625rem;
  padding: 0 1.5rem;
`
export const QtdIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['base-text']};
  width: 5.15rem;

  small {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.1375rem;
  }

  p {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.95rem;
    margin-left: 0.15rem;
  }
`

export const Qtd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  width: 4.5rem;
  height: 2.375rem;

  button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  padding: 8px;
  width: 2.375rem;
  height: 2.375rem;
`
