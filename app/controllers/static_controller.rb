class StaticController < ApplicationController
    def index
    end
    def greetings
        @greetings = Greeting.all.last(5)
        render json: @greetings
    end
end
