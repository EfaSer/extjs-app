Ext.define("ExtjsApp.store.Products", {
  extend: "Ext.data.Store",
  alias: "store.products",
  model: "ExtjsApp.model.Product",

  data: [
    {
      id: 1,
      name: "Телефон",
      description: 'Смартфон 5.5"',
      price: 12000.5,
      quantity: 10,
    },
    {
      id: 2,
      name: "Ноутбук",
      description: "Игровой ноутбук",
      price: 55000.0,
      quantity: 0,
    },
    {
      id: 3,
      name: "Клавиатура",
      description: "Механическая клавиатура",
      price: 3500.0,
      quantity: 5,
    },
    {
      id: 4,
      name: "Монитор",
      description: '27" IPS',
      price: 18000.0,
      quantity: 2,
    },
    {
      id: 5,
      name: "Мышь",
      description: "Беспроводная мышь",
      price: 900.0,
      quantity: 0,
    },
  ],
});
