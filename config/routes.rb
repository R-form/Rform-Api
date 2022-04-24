Rails.application.routes.draw do
  resources :questionnaires do
    resources :responses
  end
  
end
