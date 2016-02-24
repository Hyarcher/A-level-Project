class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :bodyText
      t.integer :blogCount, default: 0
      t.decimal :fee, default: 0
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
