import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../../context/CoffeeContext'
import { Minus, Plus, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  CoffeeSelected,
  ConfirmOrder,
  Delivery,
  Descriptions,
  Divider,
  IncrementOrRemoveCoffeeContainer,
  Qtd,
  SelectedCoffeesContainer,
  Title,
  Total,
  TotalItems,
  TotalItemsContainer,
  TotalValue,
} from './style'

import expresso from '../../../../assets/Expresso.png'
import { NavLink } from 'react-router-dom'

export function SelectedCoffees() {
  const {
    shoppingCartItems,
    removeCoffeeFromShoppingCart,
    paymentType,
    infoDelivery,
  } = useContext(CoffeeContext)

  const [coffeeList, setcoffeeList] = useState([...shoppingCartItems])
  const [totalItems, setTotalItems] = useState(0)

  function handleWithCoffeeList(coffeeSelected: string, type: string) {
    const alterCoffeeList = [...coffeeList]

    alterCoffeeList.map((alterCoffee) => {
      if (alterCoffee.title === coffeeSelected && type === 'plus') {
        alterCoffee.qtd = alterCoffee.qtd + 1
      } else if (alterCoffee.title === coffeeSelected && type === 'minus') {
        alterCoffee.qtd = alterCoffee.qtd - 1

        if (alterCoffee.qtd < 0) {
          return (alterCoffee.qtd = 0)
        }
      }
      return alterCoffee
    })
    setcoffeeList(alterCoffeeList)
  }

  function handleWithRemoveItem(coffee: string) {
    removeCoffeeFromShoppingCart(
      shoppingCartItems.filter((item) => item.title !== coffee),
    )
  }

  useEffect(() => {
    let price = 0
    coffeeList.map((coffee) => {
      price = price + coffee.price * coffee.qtd
      return null
    })
    setTotalItems(price)
  }, [coffeeList])

  useEffect(() => {
    setcoffeeList(shoppingCartItems)
  }, [shoppingCartItems])

  return (
    <SelectedCoffeesContainer>
      {shoppingCartItems?.map((coffeeSelected) => {
        return (
          <>
            <CoffeeSelected key={coffeeSelected.title}>
              <img src={expresso} alt="" />
              <Descriptions>
                <Title>{coffeeSelected.title}</Title>
                <IncrementOrRemoveCoffeeContainer>
                  <Qtd>
                    <button
                      onClick={() =>
                        handleWithCoffeeList(coffeeSelected.title, 'minus')
                      }
                    >
                      <Minus width={14} height={14} weight="bold" />
                    </button>
                    <p>{coffeeSelected.qtd}</p>
                    <button
                      onClick={() =>
                        handleWithCoffeeList(coffeeSelected.title, 'plus')
                      }
                    >
                      <Plus width={14} height={14} weight="bold" />
                    </button>
                  </Qtd>

                  <button
                    className="trash"
                    onClick={() => {
                      handleWithRemoveItem(coffeeSelected.title)
                    }}
                  >
                    <Trash width={16} height={16} color={defaultTheme.purple} />
                    <p>REMOVER</p>
                  </button>
                </IncrementOrRemoveCoffeeContainer>
              </Descriptions>

              <TotalValue>
                R$ {(coffeeSelected.qtd * coffeeSelected.price).toFixed(2)}
              </TotalValue>
            </CoffeeSelected>
            <Divider />
          </>
        )
      })}

      <TotalItemsContainer>
        <TotalItems>
          <p>Total de itens</p>
          <p>R$ {totalItems.toFixed(2)}</p>
        </TotalItems>

        <Delivery>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </Delivery>

        <Total>
          <p>Total</p>
          <p>R$ {(totalItems + 3.5).toFixed(2)}</p>
        </Total>
      </TotalItemsContainer>

      <NavLink to={'/success'}>
        <ConfirmOrder
          disabled={
            paymentType === '' ||
            infoDelivery.cep === '' ||
            infoDelivery.address === '' ||
            infoDelivery.number === 0 ||
            infoDelivery.city === '' ||
            infoDelivery.uf === ''
          }
        >
          CONFIRMAR PEDIDO
        </ConfirmOrder>
      </NavLink>
    </SelectedCoffeesContainer>
  )
}
