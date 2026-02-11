using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    internal class Palindrome
    {
        static void Main()
        {
            Console.WriteLine("Enter a sentence:");
            string sentence = Console.ReadLine();

            string[] words = sentence.Split(' ');
            int count = 0;

            for (int i = 0; i < words.Length; i++)
            {
                string word = words[i];
                char[] arr = word.ToCharArray();
                Array.Reverse(arr);
                string reversed = new string(arr);

                if (word.Equals(reversed, StringComparison.OrdinalIgnoreCase))
                {
                    count++;
                }
            }

            Console.WriteLine("Total Count of Palindrome Words : " + count);
        }
    }
}
