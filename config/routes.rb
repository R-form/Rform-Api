# frozen_string_literal: true

Rails.application.routes.draw do
  resources :questionnaires do
    resources :responses
  end
  root "questionnaires#index"
end
