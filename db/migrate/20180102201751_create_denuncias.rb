class CreateDenuncias < ActiveRecord::Migration
  def change
    create_table :denuncias do |t|
      t.string :email, :calle, :colonia, :municipio
      t.integer :cp
      t.decimal :coordlong, :coordlat
      t.text :hechos, :referencias
    end
  end
end
