import Osiris from "./index.js"
import readlineSync from 'readline-sync';
const input = `
# Example 1: Basic sep
print("Hello", "World", sep="-")

# Example 2: Basic end
print("Hello", end="!")

# Example 3: Both sep and end
print(1, 2, 3, sep=":", end="END")

# Example 4: Empty sep
print("A", "B", "C", sep="")

# Example 5: Empty end
print("No newline", end="")

# Example 6: sep with variables
name = "Alice"
age = 30
print("Name:", name, "Age:", age, sep=" | ")

# Example 8: sep and end with expressions
print("a", "b", sep=(", " * 2), end="!")

# Example 9: Multiple data types
print(10, "apples", 3.14, sep=" + ", end=" total")

# Example 10: No positional arguments
print(end="CustomEnd")

# Example 11: sep with one argument
print("Single", sep="ignored")


# Example 13: Mixing variables and literals
x, y = 5, 10
print(x, "+", y, "=", x+y, sep="", end="?")

# Example 14: Complex end
print("Start", end="...Middle...")
print("End")

# Example 15: sep and end as variables
separator = "|"
ending = "EOF"
print("A", "B", "C", sep=separator, end=ending)

# Example 16: All keyword arguments
print(sep="X", end="Y")

`




const transpilerPython = new Osiris("python");
const transpiledCode = transpilerPython.passCode(input);
//console.log(transpiledCode)
console.log(transpiledCode.code); 
eval(transpiledCode.code);
