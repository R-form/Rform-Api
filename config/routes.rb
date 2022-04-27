# frozen_string_literal: true

Rails.application.routes.draw do
  resources :questionnaires do
    resources :responses
  end
<<<<<<< HEAD
  root "questionnaires#index"
=======
  get 'user_sessions/new'
  get 'user_sessions/create'
  get 'user_sessions/destroy'
  root to: 'users#index'
  resources :users
  get 'login' => 'user_sessions#new', :as => :login
  post 'login' => 'user_sessions#create'
  delete 'logout' => 'user_sessions#destroy', :as => :logout
>>>>>>> 4b98f4d (issues#22 add Robocop to new_form branch)
end
