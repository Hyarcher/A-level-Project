class UsersController < ApplicationController
  def index
   @Users = User.all
  end

  def show
    @Users = User.find(params[:id])
  end

  def update
    @Users = User.find(params[:id])
    if @Users.update_attributes(secure_params)
       redirect_to users_path, :notice =>"Everything is okay"
    else
       redirect_to users_path, :alert =>"Didn't happen"
    end
  end
  private
  def secure_params
    params.require(:user).permit(:role)

  end
end
