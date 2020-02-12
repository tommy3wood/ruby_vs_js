# equality check
x = 10
if x == "10"
  puts "equal"
else
  puts "not equal"
end

# falsey values

x = 3
if nil
  x += 1
end

if false
  x += 1
end

if 0
  x += 1
end

if !!""
  x += 1
end

p x


# scope
x = 100

def add_one(num)
  x = 1
  return num + x
end

puts x
puts add_one(5)
puts x


# constructors

class Boat
  attr_reader :name, :color
  attr_writer :color

  def initialize(name, color, price)
    @name = name
    @color = color
    @price = price
  end

  def print_info
    puts "The boat #{@name} has a price of #{@price}"
  end
end

boat = Boat.new("SS Minnow", "white", 2000)
boat.print_info