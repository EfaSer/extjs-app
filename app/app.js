Ext.onReady(function () {
  const store = Ext.create("ExtjsApp.store.Products");

  console.log("Store загружен:", store);
  console.log(
    "Все товары:",
    store.getRange().map((r) => r.getData())
  );

  Ext.create("Ext.grid.Panel", {
    renderTo: Ext.getBody(),
    title: "Проверка стора",
    store: store,
    width: 600,
    height: 300,
    columns: [
      { text: "ID", dataIndex: "id", flex: 1 },
      { text: "Имя", dataIndex: "name", flex: 2 },
      { text: "Цена", dataIndex: "price", flex: 1 },
    ],
  });
});
