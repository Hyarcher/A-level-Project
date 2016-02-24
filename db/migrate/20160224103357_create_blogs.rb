class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :bodyText
      t.integer :blogCount
      t.decimal :fee
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
