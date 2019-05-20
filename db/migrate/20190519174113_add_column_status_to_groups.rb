class AddColumnStatusToGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :status, :string, null: false, default: "active"
  end
end
