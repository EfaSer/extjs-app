Ext.define("ExtjsApp.view.product.ProductGrid", {
  extend: "Ext.grid.Panel",
  xtype: "productgrid",
  requires: ["ExtjsApp.store.Products"],
  title: "Список товаров",
  store: {
    type: "products",
  },

  tbar: [
    {
      xtype: "textfield",
      emptyText: "Фильтр по ID",
      enableKeyEvents: true,
      listeners: {
        specialkey: function (field, e) {
          if (e.getKey() === e.ENTER) {
            let grid = field.up("grid");
            let store = grid.getStore();
            store.clearFilter();
            if (field.getValue()) {
              store.addFilter({
                property: "id",
                value: field.getValue(),
                exactMatch: true,
              });
            }
          }
        },
      },
    },
    {
      xtype: "textfield",
      emptyText: "Фильтр по описанию",
      enableKeyEvents: true,
      listeners: {
        specialkey: function (field, e) {
          if (e.getKey() === e.ENTER) {
            let grid = field.up("grid");
            let store = grid.getStore();
            store.clearFilter();
            if (field.getValue()) {
              store.addFilter({
                filterFn: function (rec) {
                  return rec
                    .get("description")
                    .toLowerCase()
                    .includes(field.getValue().toLowerCase());
                },
              });
            }
          }
        },
      },
    },
  ],

  columns: [
    { text: "ID", dataIndex: "id", flex: 1 },
    {
      text: "Имя",
      dataIndex: "name",
      flex: 2,
      renderer: function (value) {
        return `<a href="#" class="product-link">${value}</a>`;
      },
    },
    { text: "Описание", dataIndex: "description", flex: 3 },
    { text: "Цена", dataIndex: "price", flex: 1 },
    {
      text: "Кол-во",
      dataIndex: "quantity",
      flex: 1,
      renderer: function (value, meta) {
        if (value === 0) {
          meta.tdCls = "sold-out";
        }
        return value;
      },
    },
  ],

  listeners: {
    cellclick: function (_, _, cellIndex, record) {
      if (cellIndex === 1) {
        Ext.create("ExtjsApp.view.product.ProductForm", {
          record: record,
        }).show();
      }
    },
  },
});
