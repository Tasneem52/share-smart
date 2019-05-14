class ProductsController < ApplicationController
   before_action :authorize_user

  def new
    @group = Group.find(params[:group_id])
    @product = Product.new
    @product.user = current_user
  end

  def show
    @product = Product.find(params[:id])
  end

  def create
    @group = Group.find(params[:group_id])
    @product = Product.new(product_params)
    @product.group = @group
    @product.user = current_user

    if @product.save
      flash[:notice] = "Product added successfully!"
      redirect_to @product
    else
      flash[:error] = @product.errors.full_messages.to_sentence
      render :new
    end
  end

  private

  def product_params
    params.require(:product).permit(:name,:description,:image,:purchase_date,:exp)
  end

  protected

  def authorize_user
   if !user_signed_in? || !current_user
     flash[:notice] = "You need to be sign in to add a product."
     redirect_to '/users/sign_in'
   end
  end
end
