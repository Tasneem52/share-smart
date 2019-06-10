require "rails_helper"

RSpec.describe Api::V1::ProductsController, type: :controller do
  let!(:first_product) { Product.create(
    name: "ski glasses",
    description: "Love to share it!",
  ) }

  describe "GET#show" do
    it "should show us information on a product" do

      get :show, params: {id: first_product}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["train"]["name"]).to eq first_product[:name]
      expect(returned_json["train"]["description"]).to eq first_product[:description]
    end
  end
end
