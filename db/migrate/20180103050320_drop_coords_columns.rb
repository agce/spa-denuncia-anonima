class DropCoordsColumns < ActiveRecord::Migration
  def change
    remove_column :reports, :coordlong
    remove_column :reports, :coordlat
  end
end
