class GroupsController < ApplicationController

  before_action :authorize_user

  def index
    @groups = Group.joins(:users).where(users: {id: current_user})
    user = current_user
  end

  def show
    @group = Group.find(params[:id])
    @members = Membership.where(group_id: @group.id)
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    @group.users = User.where(id: current_user)

    members=["abc@gmail.com", "hey@hey.com", "foo@foo.com"]

    if @group.save
      Membership.where(group_id: @group.id).update_all(role: "admin")
      members.each do |member|
        Invitation.create!(email: member, group_id: @group.id, status: "invited")
      end
      Membership.where(user_id: 4).update_all(user_id: "7")
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
