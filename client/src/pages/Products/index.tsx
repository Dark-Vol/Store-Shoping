import ProductCard from '../../components/ProductCard';

const Products: React.FC = () => {
  return (
    <section className=''>
      <ProductCard
        instrumentName="Acoustic Guitar"
        description="A high-quality acoustic guitar with a rich, warm sound. Perfect for beginners and professionals alike."
        price={299.99}
        rating={4.7}
        imageUrl="https://via.placeholder.com/250x150?text=Guitar"
      />
    </section>
  )
}

export default Products
