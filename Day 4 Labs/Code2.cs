using System;

class Account
{
    // Define properties
    // Complete Step 1:............
    public string AccountNumber { get; set; }
    public string OwnerName { get; private set; }
    public decimal Balance { get; private set; }

    // Define methods
    // Complete Step 2:............
    public Account(string accountNumber, string ownername)
    {
        AccountNumber = accountNumber;
        OwnerName = ownername;
        Balance = 0;
    }

    public void Deposit(decimal amount)
    {
        if (amount > 0)
        {
            Balance += amount;
            Console.WriteLine("Deposited: $" + amount.ToString("F2"));
            Console.WriteLine("Account Balance: $" + Balance.ToString("F2"));
        }
    }

    public void Withdraw(decimal amount)
    {
        Balance -= amount;
        Console.WriteLine("Withdrew: $" + amount.ToString("F2"));
        Console.WriteLine("Account Balance: $" + Balance.ToString("F2"));
    }
}
class Program
{
    static void Main(string[] args)
    {
        // Prompt the user to enter account details
        Console.WriteLine("Enter account number:");
        // Complete Step 3:............
        string accNumber = Console.ReadLine();

        Console.WriteLine("Enter owner name:");
        // Complete Step 4:............
        string ownerName = Console.ReadLine();

        // Create an instance of the Account class
        // Complete Step 5:............
        Account account = new Account(accNumber, ownerName);

        // Perform transactions
        // Complete Step 6:............
        account.Deposit(100.00m);
        account.Withdraw(50.00m);
    }
}