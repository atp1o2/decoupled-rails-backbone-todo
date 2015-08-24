class TasksController < ApplicationController
  # respond_to(json)
  def index
    @tasks = Task.all
    # respond_with(@tasks)
    render json: @tasks
  end

end
