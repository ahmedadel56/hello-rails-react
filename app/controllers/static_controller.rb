class StaticController < ApplicationController
  def index; end

  def greetings
    @greetings = Greeting.order(Arel.sql('RANDOM()')).limit(5)
    render json: @greetings
  end
end
