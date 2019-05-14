class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :icon, :created_at, :memberships, :invitations, :products
end
