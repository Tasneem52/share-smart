Rails.application.routes.draw do
  root 'groups#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :groups, only: [:index, :new, :create, :show] do
    resources :products, only: [:new, :show, :create]
  end
end
