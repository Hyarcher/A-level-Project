class BlogsController < ApplicationController
  def index
    @blogs = Blog.all
  end

  def new
  end
end
