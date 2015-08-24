# ArtisanStyle

[Link][heroku]

[heroku]: https://artisanstyle.xyz/

## Minimum Viable Product
ArtisanStyle is a clone of Etsy built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Have a personalized feed of shops from subscriptions
- [x] View shops
- [x] View items in shops
- [x] Favorite shops and items and view those favorites
- [x] Add items to a shopping cart
- [x] Checkout
- [x] Search for shops and items by title and category

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Viewing Shops and Items (~2-3 days)
I will implement user authentication in Rails. Users will be able to view shops
and items via API routes for shop and item data as JSON. I will generate my
Backbone structure and create models and collections for both. I will push the
app to Heroku and ensure that everything works before moving on to phase 2.

[Details][phase-one]

### Phase 2: Favorites and the Landing page (~2 days)
I will add an `index` route that shows all shops in the database, represented
by a shop thumb. I'll add `favorites` to bridge items and users as well as shops
and users. Clicking the favorites will show the `current_user`'s `favorites`
association to create a list of shops for that particular user. In Backbone,
I will make a `ShopsIndex` view whose `shops` collection fetches from the route.

[Details][phase-two]

### Phase 3: Adding Items to the Shopping Cart and Checkout (~2 days)
Instead of creating a route in rails, I'll be tracking the `current_user`'s
shopping cart using a cookie that exists only in the browser. In Backbone,
I'll make a `ShoppingCartShow` view whose `items` collection fetches from this
cookie. Clicking the Checkout button for a particular item will reset the cookie
and display a message that their item will be sent to them.

[Details][phase-three]

### Phase 4: Searching for Shops and Items, Categories (~2 days)
I'll need to add `search` routes to both the Shops and Items controllers. On the
Backbone side, there will be a `SearchResults` composite view has `ItemsIndex`
subviews. These views will use plain old `shops` and `items` collections, but
they will fetch from the new `search` routes. I"ll add a column `category:`
to each item, and the user will be able to browse all items by category, as well
as browse items by category within a search query.

[Details][phase-four]


### Bonus Features (TBD)
- [x] Pagination/infinite scroll
- [x] Cart Icon to show number of items in the cart
- [x] Dynamic Search
- [x] CSS Animations on load
- [ ] Association between users and shops
- [ ] Users can leave reviews on items they bought


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
