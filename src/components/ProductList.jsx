import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

const ProductList = ({ products, removeProduct }) => {
  if (!products.length) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} removeProduct={removeProduct} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      inStock: PropTypes.bool.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default ProductList;
