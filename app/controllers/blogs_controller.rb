class BlogsController < ApplicationController
before_action :authenticate_user!
  def index
    @blogs = Blog.all
  end

  def new
    @blog = Blog.new
  end
  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      redirect_to :action => 'index'
    else
      render(:action => 'new')
    end
  end
  def blog_params
    params.require(:blog).permit(:bodyText, :Money, :fee)
  end
end
