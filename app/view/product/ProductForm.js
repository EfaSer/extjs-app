Ext.define("ExtjsApp.view.product.ProductForm", {
  extend: "Ext.window.Window",
  xtype: "productform",
  title: "Карточка товара",
  modal: true,
  width: 400,
  layout: "fit",

  initComponent: function () {
    if (this.record && this.record.get("name")) {
      this.title = "Карточка товара: " + this.record.get("name");
    }
    this.callParent(arguments);
  },

  items: [
    {
      xtype: "form",
      bodyPadding: 10,
      defaults: {
        anchor: "100%",
        allowBlank: false,
      },
      items: [
        {
          xtype: "displayfield",
          name: "id",
          fieldLabel: "ID",
        },
        {
          xtype: "displayfield",
          name: "name",
          fieldLabel: "Наименование",
        },
        {
          xtype: "textfield",
          name: "description",
          fieldLabel: "Описание",
        },
        {
          xtype: "numberfield",
          name: "price",
          fieldLabel: "Цена",
          minValue: 0,
          decimalPrecision: 2,
        },
        {
          xtype: "numberfield",
          name: "quantity",
          fieldLabel: "Кол-во",
          minValue: 0,
          allowDecimals: false,
        },
      ],
    },
  ],

  bbar: [
    "->",
    {
      text: "Отмена",
      handler: function (btn) {
        btn.up("window").close();
      },
    },
    {
      text: "Сохранить",
      handler: function (btn) {
        let win = btn.up("window");
        let form = win.down("form");
        let record = win.record;

        if (form.isValid()) {
          let values = form.getValues();
          let changed = false;

          if (record.get("description") != values.description) {
            record.set("description", values.description);
            changed = true;
          }

          if (record.get("price") != values.price) {
            record.set("price", values.price);
            changed = true;
          }
          if (record.get("quantity") != values.quantity) {
            record.set("quantity", values.quantity);
            changed = true;
          }

          if (changed) {
            Ext.Msg.alert("Сохранение", "Данные были изменены и сохранены.");
          }
          win.close();
        }
      },
    },
  ],

  listeners: {
    afterrender: function (win) {
      win.down("form").loadRecord(win.record);
    },
  },
});
