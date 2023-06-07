class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  get '/exercises' do
    exercises = Exercise.all
    exercises.to_json(include: [:user])
  end

  get '/exercises/:id' do
    exercise = Exercise.find(params[:id])
    exercise.to_json(include: [:user])
  end

  post '/exercises' do
    exercise = Exercise.create(
      name: params[:name],
      muscle_group: params[:muscle_group],
      weight: params[:weight],
      sets: params[:sets],
      reps: params[:reps],
      rest: params[:rest],
      user_id: params[:user_id]
    )
    exercise.to_json(include: [:user])
  end

  # build DELETE route - DELETE specific route, (.find, .destroy)
  delete '/exercises/:id' do
    exercise = Exercise.find(params[:id])
    exercise.destroy
    exercise.to_json
  end

  patch '/exercises/:id' do
    exercise = Exercise.find(params[:id])
    
    exercise.update(
      name: params[:name],
      muscle_group: params[:muscle_group],
      weight: params[:weight],
      sets: params[:sets],
      reps: params[:reps],
      rest: params[:rest],
      user_id: params[:user_id]
    )
    exercise.to_json(include: [:user])
    
  end
#Routes for the users
get '/users' do
  users = User.all
  users.to_json(include: [:exercises])
end

get '/users/:id' do
  user = User.find(params[:id])
  user.to_json(include: [:exercises])
end

post '/users' do
  user = User.create(params)
  user.to_json(include: [:exercises])
end

delete '/users/:id' do
  user = User.find(params[:id])
  user.destroy
  user.to_json
end

patch '/users/:id' do
  user = User.find(params[:id])
  user.update(
    name: params[:name]
  )
end

end
