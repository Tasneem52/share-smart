class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at, :memberships, :invitations, :products
end
