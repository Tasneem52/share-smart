class Membership < ActiveRecord::Base
  validates :role, presence: true

  belongs_to :user
  belongs_to :group
end
