json.array! @items do |item|
  json.extract! item, :id, :name, :description, :price_string, :shop_id, :created_at, :updated_at
  favorite = item.favorites.find_by(user_id: current_user.id)
  if favorite
    json.favorite do
      json.extract! favorite, :id
    end
  end
  json.images item.image_urls
  json.shop_name item.shop.name
  json.shop_id item.shop.id
end
