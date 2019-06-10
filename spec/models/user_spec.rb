require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

describe User do
  it { should have_valid(:name).when("Tin") }
  it { should_not have_valid(:name).when('', nil) }
  it { should have_valid(:location).when("Boston")}
  it { should_not have_valid(:location).when("", nil) }
end
