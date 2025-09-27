Ext.define("ExtjsApp.store.Products", {
  extend: "Ext.data.Store",
  model: "ExtjsApp.model.Product",
  data: [
    {
      id: 1,
      name: "Телефон",
      description: "Смартфон",
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
      description: "Механическая",
      price: 3500.0,
      quantity: 5,
    },
  ],
});
