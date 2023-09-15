using System;

public class Desafio
{
    public static void Main()
  { 

    float salaryValue = float.Parse(Console.Readline());
    float benefitsValue = float.Parse(Console.Readline());

    float feeValue = 0;
    if (salaryValue >= 0 && salaryValue <= 1100)
    {
        feeValue = 0.05F * salaryValue;
    }
    else if (salaryValue >= 1100.01 && salaryValue <= 2500.00)
    {
        feeValue = 0.10F * salaryValue;
    }
    else 
    {
        feeValue = 0.15F * salaryValue;
    }

    float output = salaryValue - feeValue + benefitsValue;
    Console.Writeline(output.Tostring("0.00"));

  } 
}