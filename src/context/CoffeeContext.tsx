import { createContext, ReactNode, useState } from 'react'

interface ShoppingCartProps {
  varieties: string
  title: string
  description: string
  price: number
  qtd: number
}

export interface InfoDeliveryProps {
  cep: string
  address: string
  number: number
  complement: string
  neighborhood: string
  city: string
  uf: string
}

interface CoffeeContextType {
  shoppingCartItems: ShoppingCartProps[]
  setShoppingCart: (coffee: ShoppingCartProps) => void
  setDeliveryInformations: (infoDelivery: InfoDeliveryProps) => void
  infoDelivery: InfoDeliveryProps
  setPayment: (type: string) => void
  paymentType: String
  removeCoffeeFromShoppingCart: (coffee: ShoppingCartProps[]) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [shoppingCartItems, setShoppingCartItem] = useState<
    ShoppingCartProps[] | []
  >([])

  const [infoDelivery, setInfoDelivery] = useState<InfoDeliveryProps>({
    cep: '',
    address: '',
    number: 0,
    complement: '',
    neighborhood: '',
    city: '',
    uf: '',
  })

  const [paymentType, setPaymentType] = useState<String>('')

  function setShoppingCart(coffee: ShoppingCartProps) {
    setShoppingCartItem([...shoppingCartItems, coffee])
  }

  function removeCoffeeFromShoppingCart(coffee: ShoppingCartProps[]) {
    setShoppingCartItem(coffee)
  }

  function setDeliveryInformations(informationsDelivery: InfoDeliveryProps) {
    setInfoDelivery(informationsDelivery)
  }

  function setPayment(type: String) {
    setPaymentType(type)
  }

  return (
    <CoffeeContext.Provider
      value={{
        shoppingCartItems,
        setShoppingCart,
        setDeliveryInformations,
        infoDelivery,
        setPayment,
        paymentType,
        removeCoffeeFromShoppingCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
