import java.util.scanner;

public class desafio {
    
    public static void main(String[] args) {

        Scanner entryReader = new Scanner(System.in);
        float  salaryValue = entryReader.nextfloat();
        float valueBenefits = entryReader.nextfloat();

        float feeValue = 0;
        if (salaryValue >= 0 && salaryValue <= 1100) {
            feeValue = 0.05F * salaryValue;
        
        } else if (salaryValue >= 1100.01 && salaryValue <= 2500.00) {
            feeValue = 0.10F * salaryValue;
        } else {
            salaryValue = 0.15F * salaryValue;
        }

        float output = salaryValue - feeValue + valueBenefits;
        system.out.printIn(String.format("%.2f". output));
    }

}