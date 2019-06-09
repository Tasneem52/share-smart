require 'rails_helper'


describe Group do
  it { should have_valid(:name).when("Friends") }
  it { should_not have_valid(:name).when('', nil) }
  # it { should have_valid(:status).when("active") }
  # it { should_not have_valid(:status).when("", nil) }
  #
  # it "should default status to 'active'" do
  #   expect(user.status).to eq('active')
  # end

end
