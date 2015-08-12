ArtisanStyle.Collections.Shops = Backbone.Collection.extend({

  model: ArtisanStyle.Models.Shop,
  url: '/api/shops',

  getOrFetch: function (id) {
    var shop = this.get(id);

    if (!shop) {
      shop = new ArtisanStyle.Models.Shop({ id: id });
      shop.fetch({
        success: function () {
          this.add(shop);
        }.bind(this)
      });
    } else {
      shop.fetch();
    }

    return shop;
  }

});