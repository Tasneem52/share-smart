class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :purchase_date, :expiration_date, :group, :user
end
