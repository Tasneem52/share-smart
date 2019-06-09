require 'rails_helper'


describe Group do
  it { should have_valid(:name).when("Friends") }
  it { should_not have_valid(:name).when('', nil) }

  # it "should default status to 'active'" do
  #   expect(group.status).to eq('active')
  # end

end
