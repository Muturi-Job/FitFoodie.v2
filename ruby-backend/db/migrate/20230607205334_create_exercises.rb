class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :muscle_group
      t.integer :weight
      t.integer :sets
      t.integer :reps
      t.string :rest
    end
  end
end
