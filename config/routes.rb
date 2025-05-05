Rails.application.routes.draw do
  root to: "pages#home"
  get '/test', to: 'pages#test'
  get '/about', to: 'pages#about'
  get '/contacts', to: 'pages#contact'
  get '/classes', to: 'pages#classes'
  get '/pilates_reformer', to: 'pages#pilates_reformer'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  post '/contact', to: 'contacts#create', as: 'contact'

  # Defines the root path route ("/")
  # root "posts#index"
end
