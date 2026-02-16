using System;
using System.IO;

public class Program
{
    public static void Main(string[] args)
    {
        try
        {
            if (args.Length > 0)
            {
                switch (args[0])
                {
                    case "IndexOutOfRangeException":
                        int[] arr = new int[2];
                        Console.WriteLine(arr[5]); // trigger
                        break;

                    case "DivideByZeroException":
                        int a = 10;
                        int b = 0;
                        Console.WriteLine(a / b);
                        break;

                    case "FileNotFoundException":
                        File.Open("nonexistent.txt", FileMode.Open);
                        break;
                }
            }
        }
        catch (IndexOutOfRangeException)
        {
            Console.WriteLine(
                "Index out of range error: Index was outside the bounds of the array."
            );
        }
        catch (DivideByZeroException)
        {
            Console.WriteLine("Divide by zero exception: Caught");
        }
        catch (FileNotFoundException)
        {
            Console.WriteLine("FileNotFoundException Caught");
        }
        catch (Exception)
        {
            Console.WriteLine("Exception Caught");
        }
    }
}