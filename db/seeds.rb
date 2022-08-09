# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#  here I am gonna create 5 greeting different massasges
@counter = 1
15.times do 
   Greeting.create(text: "Hello this is greeting number #{@counter}") 
   @counter +=1
end