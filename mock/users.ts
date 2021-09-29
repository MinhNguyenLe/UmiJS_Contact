import { EnumStringMember } from '@babel/types';

const users = [
  {
    email: 'minh1@gmail.com',
    pass: '123456',
  },
  {
    email: 'minh2@gmail.com',
    pass: '123456',
  },
  {
    email: 'minh3@gmail.com',
    pass: '123456',
  },
];

export default {
  // support Object and Array as return data
  'GET /api/users/': { users: users },

  // GET can be omitted
  '/api/users/1': { id: 1 },

  // support customized functions，please refer to express@4 for more details of the API
  // 'POST /api/users/create': (req, res) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.end('ok');
  // },
};
