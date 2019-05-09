class Invitation < ActiveRecord::Base
  validates :email, presence: true
  validates :status, presence: true
  
  belongs_to :group
end
