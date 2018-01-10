class AddCoordColumn < ActiveRecord::Migration
  def change
    add_column :reports, :coords, :text
  end
end
