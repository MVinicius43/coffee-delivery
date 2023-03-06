import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme['base-card']};
  width: 40rem;
  height: 23.25rem;
  border-radius: 6px;
  padding: 40px;
  gap: 2rem;
`

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const SubTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${(props) => props.theme['base-text']};
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 35rem;

  input {
    height: 2.625rem;
    border-radius: 4px;
    padding: 12px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};
  }

  .cep {
    width: 12.5rem;
  }

  .rua {
    width: 34.2rem;
  }
`

export const NumberInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  .complemento {
    width: 21.75rem;
  }
`

export const CityInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .uf {
    width: 3.75rem;
  }

  .cidade {
    width: 17.25rem;
  }
`
