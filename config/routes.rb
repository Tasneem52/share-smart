Rails.application.routes.draw do
  root 'groups#index'
  #get 'new_group_path', to: 'groups#new'
  devise_for :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :products, only: [:show]
  resources :groups, only: [:index, :new, :create, :show, :destroy] do
    resources :products, only: [:new,:create]
  end

  namespace:api do
    namespace:v1 do
      resources:groups,only:[:index, :show, :destroy]
      resources:products,only:[:show]
    end
  end
end
