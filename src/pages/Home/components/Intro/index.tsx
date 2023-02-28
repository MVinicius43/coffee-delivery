import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  Icon,
  IntroContainer,
  IntroInfo,
  Item,
  Items,
  ItemsContainer,
  Title,
} from './style'

import coffeeDelivery from '../../../../assets/CoffeeDelivery.png'

export function Intro() {
  return (
    <IntroContainer>
      <IntroInfo>
        <Title>
          Encontre o café perfeito <br /> para qualquer hora do dia
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
            qualquer hora
          </p>
        </Title>

        <ItemsContainer>
          <Items>
            <Item>
              <Icon iconBackgroundColor="yellow-dark">
                <ShoppingCart width={13.5} height={13} weight="fill" />
              </Icon>
              Compra simples e segura
            </Item>

            <Item>
              <Icon iconBackgroundColor="yellow">
                <Timer width={13.5} height={13} weight="fill" />
              </Icon>
              Entrega rápida e rastreada
            </Item>
          </Items>

          <Items>
            <Item>
              <Icon iconBackgroundColor="base-text">
                <Package width={13.5} height={13} weight="fill" />
              </Icon>
              Embalagem mantém o café intacto
            </Item>

            <Item>
              <Icon iconBackgroundColor="purple">
                <Coffee width={13.5} height={13} weight="fill" />
              </Icon>
              O café chega fresquinho até você
            </Item>
          </Items>
        </ItemsContainer>
      </IntroInfo>

      <img src={coffeeDelivery} alt="CoffeDelivery" />
    </IntroContainer>
  )
}
