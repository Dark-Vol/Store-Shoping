import React from 'react'
import ProductCard from '../../components/CardsItem'

const Products: React.FC = () => {
  return (
    <section className=''>
      <ProductCard
        path="/product/1"
        image="/assets/react.svg"
        title="Музыкальный инструмент"
        price={3500}
        rating={5}
        onAddToCart={() => console.log("Добавлено в корзину")}
        imageLink="/assets/Guitars.png"
      />
    </section>
  )
}

export default Products
