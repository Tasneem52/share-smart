class Api::V1::GroupsController < ApplicationController

  include Geokit::Geocoders

  def index
    if !current_user.latitude || !current_user.longitude
      geo_loc = GoogleGeocoder.geocode(current_user.location)
      if geo_loc.success
        current_user.update_attributes({latitude: geo_loc.lat, longitude: geo_loc.lng})
      end
    end
    render json: Group.joins(:users).where(users:{id:current_user}, status:"active")
  end

  def destroy
   group = Group.find(params[:id])
   Group.where(id: group.id).update_all(status: "deleted")
   flash[:notice] = "Group deleted successfully!"
   render json: group
 end

end
