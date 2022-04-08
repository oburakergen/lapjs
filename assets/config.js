window.lap_object = {
  'public:key': '', // if key is null, declare request path
  'api:path': 'example.com',
  'home:page': {
    type: 'selector', // Selector, Datalayer or window object
    data: '.home'
  },
  'product:page': {
    type: 'datalayer', // Selector, Datalayer or window object
    data: 'pageview'
  },
  'category:page': {
    type: 'datalayer', // Selector, Datalayer or window object
    data: 'pageview'
  },
  'login:check': {
    type: 'selector', // Selector, Datalayer or window object
    data: '.home'
  },
  'cart:page': {
    type: 'selector', // Selector, Datalayer or window object
    data: '.home'
  },
  'coupon:page': {
    type: 'selector', // Selector, Datalayer or window object
    data: '.home'
  },
  'coupon:code': {
    typeButton: ''
  },
  'checkout:page': {
    type: 'selector', // Selector, Datalayer or window object
    data: '.home'
  },
  'get:lang': {
    type: 'default', // Selector, Datalayer or window object, default
    data: 'en_US' // Check Country Iso Code
  },
  'get:currency': {
    type: 'default', // Selector, Datalayer or window object, default
    data: 'en_US' // Check Country Iso Code
  },
  'get:search': {
    type: 'default', // Selector, Datalayer or window object, default
    data: 'en_US' // Check Country Iso Code
  },
  'get:product': {
    type: 'default', // Selector, Datalayer or window object, default
    data: 'USD' // Check Country Iso Code
  }
}
