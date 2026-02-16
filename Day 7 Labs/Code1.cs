using System;

// Define delegate type
// Complete Step 1:............
delegate int Operation(int a, int b);

class Program
{
    // Implement delegate methods
    // Complete Step 2:............
    static int Add(int a, int b) => a + b;
    static int Subtract(int a, int b) => a - b;
    static int Multiply(int a, int b) => a * b;
    static int Divide(int a, int b) => a / b;

    // Implement callback mechanism
    // Complete Step 3:............
    static int PerformOperation(int a, int b, Operation op)
    {
        return op(a, b);
    }

    static void Main(string[] args)
    {
        // Input handling
        // Complete Step 4:............
        Console.WriteLine("Enter first number:");
        int num1 = int.Parse(Console.ReadLine());

        Console.WriteLine("Enter second number:");
        int num2 = int.Parse(Console.ReadLine());

        Console.WriteLine("Enter operation (add, subtract, multiply, divide):");
        string choice = Console.ReadLine().ToLower();

        Operation operation = null;

        switch (choice)
        {
            case "add":
                operation = Add;
                break;
            case "subtract":
                operation = Subtract;
                break;
            case "multiply":
                operation = Multiply;
                break;
            case "divide":
                operation = Divide;
                break;
            default:
                Console.WriteLine("Invalid operation");
                return;
        }

        // Output handling
        // Complete Step 5:............
        int result = PerformOperation(num1, num2, operation);
        Console.WriteLine("Result: " + result);
    }
}