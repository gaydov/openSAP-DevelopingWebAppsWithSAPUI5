sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("opensap.myapp.controller.App", {

			onSayHelloBtnPress: function () {
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);

				MessageToast.show(sMsg);
			}
		});
	});