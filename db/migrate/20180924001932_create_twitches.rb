class CreateTwitches < ActiveRecord::Migration[5.2]
  def change
    create_table :twitches do |t|
      t.text :post
      t.boolean :liked

      t.timestamps
    end
  end
end
