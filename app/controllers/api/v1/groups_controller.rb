class Api::V1::GroupsController < ApplicationController

  def index
    render json: Group.joins(:users).where(users:{id:current_user}, status:"active")
  end

  def destroy
   group = Group.find(params[:id])
   Group.where(id: group.id).update_all(status: "deleted")
   flash[:notice] = "Group deleted successfully!"
   render json: group
 end

end
