const products = [
  {
    id: '1',
    title: 'Bag',
    price: 75.0
  },
  {
    id: '2',
    title: 'Shoes',
    price: 49.99
  },
  {
    id: '1',
    title: 'Bag',
    price: 50.0
  }
];

const getProductData = (id) => {
  let productData = products.find((p) => p.id === id);

  if (productData === undefined) {
    console.log(`Product data does not exist for the that ${id}`);
  }

  return productData;
};

export { products, getProductData };
