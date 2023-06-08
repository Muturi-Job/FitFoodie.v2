class AddEmailAndPhone < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :email, :string
    add_column :users, :phone, :integer
  end
end
