class GroupsController < ApplicationController

  def index
    @groups = Group.all
    user = current_user
  end

  def show
    @group = Group.find(params[:id])
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      flash[:notice] = "Group added successfully!"
      redirect_to @group
    else
      flash[:error] = @group.errors.full_message.to_sentence
      render action: 'new'
    end
  end

  private

  def group_params
    params.require(:group).permit(:name,:description,:icon)
  end

protected

  def authorize_user
   if !user_signed_in? || !current_user
     flash[:notice] = "You need to be sign in."
     redirect_to '/users/sign_in'
   end
 end

end
