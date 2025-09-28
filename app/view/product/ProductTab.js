Ext.define("ExtjsApp.view.product.ProductTab", {
  extend: "Ext.panel.Panel",
  xtype: "producttab",
  requires: ["ExtjsApp.view.product.ProductGrid"],
  layout: "fit",
  title: "Товары",
  closable: true,
  items: [
    {
      xtype: "productgrid",
    },
  ],
});
