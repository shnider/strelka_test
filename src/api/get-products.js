import dataSet from './dataset.json';

const getProducts = () =>
  new Promise(resolve => setTimeout(() => resolve(dataSet)), 100);

export default getProducts;
