# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) BlogPost COntroller is a chlid class of the Application Controller. class is a blueprint for creating objects.
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is an instance variable it displays all blog posts upon page render. Techincally it is a variable that only holds objects from the database but rails magic does a lot of work for us. 
    @posts = BlogPost.all
  end

  # ---3) Show referes tot one of the restful routes thats responsible for showing one instance in the database. It's assocatied with the get HTTP verb. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Method named new is defined with an instance variable called @post. The responsibility of new is to display a text form for our uesers to input data .
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) an instance variable called post is created by calling on the Database and using the create method to make a new instance in the DB using the private method blog_post_params. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) finds an instance in the database using an id and stores it in the instance variable post. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) calls the update Active Record Method on the BlogPost Database at a single instance and updates with the params in the private method blog_post_params.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) redirect to home page
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private keyword makes this method only accessible tot he class it was defined in
  private
  def blog_post_params
    # ---10) This only allows a user to update title and content to the blogpost database
    params.require(:blog_post).permit(:title, :content)
  end
end
