Ext.define("ExtjsApp.view.main.MainWindow", {
  extend: "Ext.container.Viewport",
  xtype: "main",
  requires: ["ExtjsApp.view.product.ProductTab"],
  layout: "border",

  items: [
    {
      region: "north",
      xtype: "toolbar",
      items: [
        {
          text: "Товары",
          handler: function (btn) {
            let tabs = btn.up("viewport").down("tabpanel");
            let newTab = tabs.add({ xtype: "producttab" });
            tabs.setActiveTab(newTab);
          },
        },
        {
          text: "Выход",
          handler: function () {
            Ext.ComponentQuery.query("viewport")[0].destroy();
            Ext.create("ExtjsApp.view.login.LoginWindow").show();
          },
        },
      ],
    },
    {
      region: "center",
      xtype: "tabpanel",
    },
  ],
});
