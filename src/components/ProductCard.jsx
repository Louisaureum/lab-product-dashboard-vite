import PropTypes from 'prop-types';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div className={`${styles.productCard} ${!product.inStock ? 'outOfStockClass' : ''}`}>
      <img src={product.image} alt={product.name} width="100" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.inStock ? 'In stock' : 'Out of stock'}</p>
      <button onClick={() => removeProduct(product.id)}>Remove</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default ProductCard;
