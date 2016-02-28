class AddMoneyToBlog < ActiveRecord::Migration
  def change
    add_column :blogs, :Money, :decimal, :precision => 8, :scale => 2
  end
end
