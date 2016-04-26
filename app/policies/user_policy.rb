class UserPolicy
  attr_reader :current_user, :model

  def initialize(current_user, model)
    @current_user = current_user
    @user = model
  end

  def index
    @current_user.editor or @current_user.journalist
  end

  def new
    @current_user.editor
  end
end
