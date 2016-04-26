class BlogsController < ApplicationController
before_action :authenticate_user!
  def index
    if params[:blog] and params[:blog][:user_id]
      @blogs = Blog.search(params[:blog][:user_id])
    else
      @blogs = Blog.all
    end
    
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
