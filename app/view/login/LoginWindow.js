Ext.define("ExtjsApp.view.login.LoginWindow", {
  extend: "Ext.window.Window",
  xtype: "loginwindow",
  title: "Вход в систему",
  modal: true,
  closable: false,
  autoShow: true,
  width: 380,

  items: [
    {
      xtype: "form",
      reference: "loginForm",
      bodyPadding: 10,
      defaults: {
        anchor: "100%",
        labelWidth: 80,
      },
      defaultType: "textfield",
      items: [
        { name: "username", fieldLabel: "Логин", allowBlank: false },
        {
          name: "password",
          fieldLabel: "Пароль",
          inputType: "password",
          allowBlank: false,
        },
      ],
      buttons: [
        {
          text: "Вход",
          formBind: true,
          handler: function (btn) {
            let form = btn.up("form").getForm();
            let { username, password } = form.getValues();

            if (username === "admin" && password === "padmin") {
              btn.up("window").close();
              Ext.create("ExtjsApp.view.main.MainWindow").show();
            } else {
              Ext.Msg.alert("Ошибка", "Неверный логин или пароль");
            }
          },
        },
      ],
    },
  ],
});
