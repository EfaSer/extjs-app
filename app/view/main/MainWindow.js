Ext.define("ExtjsApp.view.main.MainWindow", {
  extend: "Ext.container.Viewport",
  xtype: "main",
  requires: ["ExtjsApp.view.product.ProductTab"],
  layout: "border",

  items: [
    {
      region: "north",
      xtype: "container",
      cls: "main-header",
      height: 160,
      items: [
        {
          xtype: "container",
          items: {
            xtype: "component",
            html: "<h1>Главное окно</h1>",
            cls: "main-title",
          },
        },
        {
          xtype: "toolbar",
          cls: "header-bottom",
          height: 60,
          items: [
            {
              text: "Товары",
              flex: 1,
              handler: function (btn) {
                let tabs = btn.up("viewport").down("tabpanel");
                let newTab = tabs.add({ xtype: "producttab" });
                tabs.setActiveTab(newTab);
              },
            },
            {
              text: "Выход",
              flex: 1,
              handler: function () {
                Ext.ComponentQuery.query("viewport")[0].destroy();
                Ext.create("ExtjsApp.view.login.LoginWindow").show();
              },
            },
          ],
        },
      ],
    },
    {
      region: "center",
      xtype: "tabpanel",
    },
  ],
});
