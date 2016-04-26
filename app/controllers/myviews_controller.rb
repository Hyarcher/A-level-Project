class MyviewsController < ApplicationController
  def index
    @myblog = Blog.search(current_user.id)
  end
end
