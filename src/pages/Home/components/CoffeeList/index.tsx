import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import {
  CoffeeCard,
  CoffeeDescription,
  CoffeeListContainer,
  CoffeeTitle,
  CoffeeValues,
  CoffeeVarieties,
  IconButton,
  Price,
  Qtd,
  QtdIconContainer,
} from './style'

import expresso from '../../../../assets/Expresso.png'

import coffeeListData from '../../../../../CoffeeList.json'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <p>Nossos Cafés</p>

      {coffeeListData.map((coffee) => {
        return (
          <CoffeeCard key={coffee.title}>
            <img src={expresso} alt="" />

            <CoffeeVarieties>{coffee.varieties}</CoffeeVarieties>

            <CoffeeTitle>{coffee.title}</CoffeeTitle>

            <CoffeeDescription>{coffee.description}</CoffeeDescription>

            <CoffeeValues>
              <Price>
                <small>R$</small>
                <p>{coffee.price}</p>
              </Price>
              <QtdIconContainer>
                <Qtd>
                  <button>
                    <Minus width={14} height={14} weight="bold" />
                  </button>
                  <p>0</p>
                  <button>
                    <Plus width={14} height={14} weight="bold" />
                  </button>
                </Qtd>
                <IconButton>
                  <ShoppingCartSimple width={22} height={22} weight="fill" />
                </IconButton>
              </QtdIconContainer>
            </CoffeeValues>
          </CoffeeCard>
        )
      })}
    </CoffeeListContainer>
  )
}
