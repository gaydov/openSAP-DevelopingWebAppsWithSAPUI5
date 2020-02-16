sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"opensap/myapp/model/formatter"
	],
	function (Controller, MessageToast, Filter, FilterOperator, formatter) {
		"use strict";

		return Controller.extend("opensap.myapp.controller.App", {

			formatter: formatter,

			onSayHelloBtnPress: function () {
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);

				MessageToast.show(sMsg);
			},

			onFilterProducts: function (oEvent) {
				var aFilter = [],
					sQuery = oEvent.getParameter("query"),
					oProductsList = this.getView().byId("productsList"),
					oProductListBinding = oProductsList.getBinding("items");

				if (sQuery !== "") {
					aFilter.push(new Filter({
						path: "ProductID",
						operator: FilterOperator.Contains,
						value1: sQuery
					}));

					oProductListBinding.filter(aFilter);
				}
			},

			onProductSelected: function (oEvent) {
				var oSelectedProduct = oEvent.getSource();
				var oContext = oSelectedProduct.getBindingContext();
				var sPath = oContext.getPath();

				var oProductDetailsPanel = this.byId("productDetailsPanel");
				oProductDetailsPanel.bindElement({
					path: sPath
				});
				oProductDetailsPanel.setVisible(true);
			}
		});
	});