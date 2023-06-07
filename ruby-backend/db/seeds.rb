puts "🌱 Seeding spices..."

# Seed your database here
User.create(name: "Barret", id:1)
User.create(name: "Cloud", id:2)
User.create(name: "Aerith", id:3)
User.create(name: "Red XIII", id:4)

Exercise.create(name: "bicep curl", muscle_group: "bicep", weight: 35,  sets: 3,  reps: 6, rest: "3 minutes", user_id: 1)
Exercise.create(name: "rope extension", muscle_group: "tricep", weight: 45,  sets: 4,  reps: 6, rest: "1.5 minutes", user_id: 1)
Exercise.create(name: "chest press", muscle_group: "chest", weight: 120,  sets: 4,  reps: 6, rest: "3 minutes", user_id: 1)
Exercise.create(name: "seated row", muscle_group: "back", weight: 60,  sets: 4,  reps: 6, rest: "2 minutes", user_id: 2)
Exercise.create(name: "shrug", muscle_group: "shoulders", weight: 80,  sets: 3,  reps: 5, rest: "3 minutes", user_id: 2)
Exercise.create(name: "squat", muscle_group: "legs", weight: 140,  sets: 4,  reps: 5, rest: "3 minutes", user_id: 2)
Exercise.create(name: "preacher curl", muscle_group: "bicep", weight: 60,  sets: 4,  reps: 6, rest: "2 minutes", user_id: 3)
Exercise.create(name: "nosebreaker", muscle_group: "tricep", weight: 35,  sets: 5,  reps: 5, rest: "2 minutes", user_id: 3)
Exercise.create(name: "chest fly", muscle_group: "chest", weight: 60,  sets: 3,  reps: 7, rest: "2 minutes", user_id: 3)
Exercise.create(name: "rear fly", muscle_group: "back", weight: 80,  sets: 5,  reps: 5, rest: "2 minutes", user_id: 4)
Exercise.create(name: "lateral raise", muscle_group: "shoulders", weight: 30,  sets: 3,  reps: 6, rest: "2 minutes", user_id: 4)
Exercise.create(name: "bulgarian squat", muscle_group: "legs", weight: 60,  sets: 4,  reps: 5, rest: "3 minutes", user_id: 4)

puts "✅ Done seeding!"
