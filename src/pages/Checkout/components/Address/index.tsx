import { MapPinLine } from 'phosphor-react'
import {
  AddressContainer,
  CityInfo,
  FormContainer,
  Header,
  NumberInfo,
  SubTitle,
  Title,
  TitleContainer,
} from './style'

import { defaultTheme } from '../../../../styles/themes/default'
import { useContext, useEffect, useState } from 'react'
import {
  CoffeeContext,
  InfoDeliveryProps,
} from '../../../../context/CoffeeContext'

export function Address() {
  const { setDeliveryInformations } = useContext(CoffeeContext)
  const [informarionsDelivery, setInformationsDelivery] =
    useState<InfoDeliveryProps>({
      cep: '',
      address: '',
      number: 0,
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
    })

  function handleWithDeliveryInformations(
    title: string,
    info: string | number,
  ) {
    setInformationsDelivery({ ...informarionsDelivery, [title]: info })
  }

  useEffect(() => {
    setDeliveryInformations(informarionsDelivery)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [informarionsDelivery])

  return (
    <AddressContainer>
      <Header>
        <MapPinLine
          width={22}
          height={22}
          color={defaultTheme['yellow-dark']}
        />
        <TitleContainer>
          <Title>Endereço de Entrega</Title>
          <SubTitle>Informe o endereço onde deseja receber seu pedido</SubTitle>
        </TitleContainer>
      </Header>

      <FormContainer>
        <input
          type="text"
          placeholder="CEP"
          className="cep"
          onChange={(value) =>
            handleWithDeliveryInformations('cep', value.target.value)
          }
        />
        <input
          type="text"
          placeholder="Rua"
          className="rua"
          onChange={(value) =>
            handleWithDeliveryInformations('address', value.target.value)
          }
        />

        <NumberInfo>
          <input
            type="text"
            placeholder="Número"
            onChange={(value) =>
              handleWithDeliveryInformations('number', value.target.value)
            }
          />
          <input
            type="text"
            placeholder="Complemento"
            className="complemento"
            onChange={(value) =>
              handleWithDeliveryInformations('complement', value.target.value)
            }
          />
        </NumberInfo>

        <CityInfo>
          <input
            type="text"
            placeholder="Bairro"
            onChange={(value) =>
              handleWithDeliveryInformations('neighborhood', value.target.value)
            }
          />
          <input
            type="text"
            placeholder="Cidade"
            className="cidade"
            onChange={(value) =>
              handleWithDeliveryInformations('city', value.target.value)
            }
          />
          <input
            type="text"
            placeholder="UF"
            className="uf"
            onChange={(value) =>
              handleWithDeliveryInformations('uf', value.target.value)
            }
          />
        </CityInfo>
      </FormContainer>
    </AddressContainer>
  )
}
