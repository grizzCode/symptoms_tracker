class CreateSymptoms < ActiveRecord::Migration[6.0]
  def change
    create_table :symptoms do |t|
      t.boolean :ill
      t.integer :pain
      t.string :breathing_function
      t.float :temperature
      t.boolean :contact
      t.boolean :breathing
      t.boolean :facility
      t.boolean :location
      t.boolean :existing_dieseases
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
