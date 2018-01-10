class DropDenuncias < ActiveRecord::Migration
  def change
    drop_table :denuncias
  end
end
