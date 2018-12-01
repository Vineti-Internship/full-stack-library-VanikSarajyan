Rails.application.routes.draw do
  resources :books
  resources :authors
  get 'books/search/:input_title', to:'books#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
