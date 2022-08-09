class StaticController < ApplicationController
  def index; end

  def greetings
    greeting = Greeting.order(Arel.sql('RANDOM()')).first
    render json: { message: greeting.text }
  end
end
