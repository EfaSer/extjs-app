Ext.define("ExtjsApp.view.main.MainWindow", {
  extend: "Ext.container.Viewport",
  xtype: "main",

  items: [
    {
      xtype: "grid",
      title: "Список товаров",
      store: {
        type: "products",
      },
      columns: [
        { text: "ID", dataIndex: "id", flex: 1 },
        { text: "Имя", dataIndex: "name", flex: 2 },
        { text: "Описание", dataIndex: "description", flex: 2 },
        { text: "Цена", dataIndex: "price", flex: 1 },
        { text: "Кол-во", dataIndex: "quantity", flex: 1 },
      ],
    },
  ],
});
