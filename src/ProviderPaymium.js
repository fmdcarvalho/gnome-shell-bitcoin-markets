const Lang = imports.lang;

const Local = imports.misc.extensionUtils.getCurrentExtension();
const BaseProvider = Local.imports.BaseProvider;


const Api = new Lang.Class({
  Name: 'ProviderPaymium.Api',
  Extends: BaseProvider.Api,

  apiName: "Paymium",

  currencies: ['EUR'],

  interval: 60, // unclear, should be safe

  attributes: {
    last: function (options) {
      let renderCurrency = BaseProvider.CurrencyRenderer(options);
      let renderChange = BaseProvider.ChangeRenderer();

      return {
        text: (data) => renderCurrency(data["price"]),
        change: (data) => renderChange(data["price"])
      };
    }
  },

  getLabel: function (options) {
    return "Paymium " + options.currency;
  },

  getUrl: function (options) {
    return "https://paymium.com/api/v1/data/eur/ticker";
  }
});
