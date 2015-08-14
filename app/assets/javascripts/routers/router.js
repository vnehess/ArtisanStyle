ArtisanStyle.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes: {
    "": "shopsIndex",
    "shops/:id": "shopShow",
    "items/:id": "itemShow"
  },

  shopsIndex: function () {
    this.collection.fetch();
    var indexView = new ArtisanStyle.Views.ShopsIndex({ collection: this.collection });
    this._swapView(indexView);
  },

  shopShow: function (id) {
    var shop = this.collection.getOrFetch(id);
    var showView = new ArtisanStyle.Views.ShopShow({ model: shop });
    this._swapView(showView);
  },

  itemShow: function (id) {
    var items = new ArtisanStyle.Collections.Items();
    var item = items.getOrFetch(id);
    var showView = new ArtisanStyle.Views.ItemShow({
      model: item
    });
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
