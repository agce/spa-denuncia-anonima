class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.string :email, :calle, :colonia, :municipio
      t.integer :cp
      t.decimal :coordlong, :coordlat
      t.text :hechos, :referencias
      t.timestamps
    end
  end
end
