sap.ui.define([
	"opensap/myapp/constants"
], function (constants) {
	"use strict";

	return {
		deliveryMethod: function (fWeight, sMeasure) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var sResult = "";
			var fProductWeight = fWeight;

			if (sMeasure === constants.GRAM_WEIGHT_UNIT) {
				fProductWeight = fProductWeight / 1000;
			}

			if (fProductWeight < constants.MAIL_DELIVERY_WEIGHT) {
				sResult = oResourceBundle.getText("formatterMailDelivery");
			} else if (fProductWeight < constants.PARCEL_DELIVERY_WEIGHT) {
				sResult = oResourceBundle.getText("formatterParcelDelivery");
			} else {
				sResult = oResourceBundle.getText("formatterCarrierDelivery");
			}

			return sResult;
		}
	};
});