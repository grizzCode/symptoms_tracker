class CreateTestingFacilities < ActiveRecord::Migration[6.0]
  def change
    create_table :testing_facilities do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :zip
      t.string :county
      t.string :hours

      t.timestamps
    end
  end
end
