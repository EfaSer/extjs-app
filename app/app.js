Ext.application({
  name: "ExtjsApp",

  launch: function () {
    Ext.create("ExtjsApp.view.login.LoginWindow").show();
  },
});
