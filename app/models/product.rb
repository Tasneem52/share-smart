class Product < ActiveRecord::Base
  validates :name, presence: true
  validates :description, presence: true

  belongs_to :user
  belongs_to :group
end
