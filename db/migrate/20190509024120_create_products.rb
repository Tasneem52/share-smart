class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :image
      t.string :purchase_date
      t.string :expiration_date

      t.belongs_to :group, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
