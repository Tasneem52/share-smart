class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :status, :icon, :created_at, :memberships, :invitations, :products, :users
end
