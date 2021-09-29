const products = {
  BCS: [
    {
      name: 'Sieu mong',
      price: 200000,
      img: '',
      information: 'Phe Phe Phe nha',
    },
  ],
  quan: [
    {
      name: 'Short',
      price: 300000,
      img: '',
      information: 'Mac quan short nhu quan dai`',
    },
  ],
  ao: [
    {
      name: 'Thun',
      price: 100000,
      img: '',
      information: 'mac nhu khong mac',
    },
  ],
};

export default {
  // support Object and Array as return data
  'GET /api/products/BCS': { products: products.BCS },

  'GET /api/products/ao': { products: products.ao },

  'GET /api/products/quan': { products: products.quan },

  // GET can be omitted
  '/api/products/1': { id: 1 },

  // support customized functions，please refer to express@4 for more details of the API
  // 'POST /api/users/create': (req, res) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.end('ok');
  // },
};
