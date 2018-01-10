class AddTimestampsDenuncias < ActiveRecord::Migration
  def change
    change_table(:denuncias) { |t| t.timestamps }
  end
end
