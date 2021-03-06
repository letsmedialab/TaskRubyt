Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:create, :show, :index, :destroy]
    resources :categories, only: [:index, :show]
  end

  root 'static_pages#root'
end
