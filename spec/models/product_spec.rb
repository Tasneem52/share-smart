require 'rails_helper'

describe Product do
  it { should have_valid(:name).when("Cap") }
  it { should_not have_valid(:name).when('', nil) }
  it { should have_valid(:description).when("It's a really good cap")}
  it { should_not have_valid(:description).when("", nil) }
end
