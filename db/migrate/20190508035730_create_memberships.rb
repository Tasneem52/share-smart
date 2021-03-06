class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.belongs_to :user, null: false
      t.belongs_to :group, null: false
      t.string :role, null: false, default: "member"

      t.timestamps null: false
    end
  end
end
