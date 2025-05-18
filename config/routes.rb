Rails.application.routes.draw do
  root to: "pages#home"
  get '/test', to: 'pages#test'
  get '/notre_equipe', to: 'pages#notre_equipe'
  get '/nous_contacter', to: 'pages#nous_contacter'
  get '/nos_cours', to: 'pages#nos_cours'
  get '/pilates_reformer', to: 'pages#pilates_reformer'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  post '/contact', to: 'contacts#create', as: 'contact'

  # Defines the root path route ("/")
  # root "posts#index"
end
