class StaticController < ApplicationController
    def index
        @greetings = Greeting.all.last(5)
        render json: @greetings
    end
end
