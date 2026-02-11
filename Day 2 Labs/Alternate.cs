using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    internal class Alternate
    {
        static void Main()
        {
            Console.WriteLine("Enter a sentence:");
            string sentence = Console.ReadLine();

            string[] words = sentence.Split(' ');

            for (int i = 0; i < words.Length; i++)
            {
                if (i % 2 == 1)
                {
                    char[] arr = words[i].ToCharArray();
                    Array.Reverse(arr);
                    Console.Write(arr);
                }
                else
                {
                    Console.Write(words[i]);
                }

                Console.Write(" ");
            }
        }
    }
}
