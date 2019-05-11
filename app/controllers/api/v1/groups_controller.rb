class Api::V1::GroupsController < ApplicationController

  def index
    render json: Group.joins(:users).where(users:{id:current_user})
  end
  
end
