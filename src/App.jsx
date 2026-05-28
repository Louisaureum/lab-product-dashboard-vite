import { useState } from 'react';
import ProductList from './components/ProductList';

const initialProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Phone', price: '$699', inStock: false, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Tablet', price: '$499', inStock: true, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=300&q=80' },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter((product) => {
    if (filter === 'in-stock') return product.inStock;
    if (filter === 'out-of-stock') return !product.inStock;
    return true;
  });

  const removeProduct = (productId) => {
    setProducts((currentProducts) => currentProducts.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('in-stock')}>In Stock</button>
        <button onClick={() => setFilter('out-of-stock')}>Out of Stock</button>
      </div>

      <ProductList products={filteredProducts} removeProduct={removeProduct} />
    </div>
  );
};

export default App;
