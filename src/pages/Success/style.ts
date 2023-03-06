import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  padding: 0 10rem;
  gap: 6.375rem;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 11.25rem;
  }
`

export const ConfirmedOrder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  .title {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 2.6rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 1400px) {
    h4 {
      font-size: 0.9rem;
    }
  }
`
