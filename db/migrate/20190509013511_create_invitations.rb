class CreateInvitations < ActiveRecord::Migration[5.2]
  def change
    create_table :invitations do |t|
      t.string :email, null: false
      t.string :status, null: false

      t.belongs_to :group, null: false

      t.timestamps null: false
    end
  end
end
