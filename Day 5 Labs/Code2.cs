using System;

// Define PropertyDemo class
public class PropertyDemo
{
    // Define properties
    // Complete Step 1:............
    public int Number { get; set; }

    private string message = "Private Value";

    public string GetMessage()
    {
        return message;
    }
}

// Define StaticDemo class
public class StaticDemo
{
    // Define static members
    // Complete Step 2:............
    public static int value;

    static StaticDemo()
    {
        value = 10;
        Console.WriteLine("Static Constructor");
    }

    public static void ShowValue()
    {
        Console.WriteLine(value);
    }
}

// Define MathHelper static class
public static class MathHelper
{
    // Define static methods
    // Complete Step 3:............
    public static void ShowMessage()
    {
        Console.WriteLine("Static Method");
    }
    public static int Add(int a, int b)
    {
        return a + b;
    }
}

public class Program
{
    public static void Main()
    {
        // Demonstrate usage
        // Complete Step 4:............
        PropertyDemo obj = new PropertyDemo();
        obj.Number = 5;

        Console.WriteLine(obj.Number);
        Console.WriteLine(obj.GetMessage());

        StaticDemo.ShowValue();

        MathHelper.ShowMessage();
        Console.WriteLine(MathHelper.Add(10, 5));
        Console.WriteLine(obj.Number);
    }
}