def print_numbers_divisible_by_three
  index = 1
  while index <= 1000
    if index % 3 == 0
      puts index
    end
    index += 1
  end
end

print_numbers_divisible_by_three







def print_every_other_item(strings)
  index = 0
  strings.each do |string|
    if index % 2 == 0
      puts string
    end
    index += 1
  end
end

print_every_other_item(["a", "b", "c", "d", "e"])


def compute_sum(numbers)
  sum = 0
  numbers.each do |number|
    sum += number
  end
  return sum
end

puts compute_sum([2, 4, 5])


city_populations = {chi: 27000000}
city_populations[:nyc] = 84000000
city_populations[:sf] = 560000
p city_populations