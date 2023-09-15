def calculate_fee(salary):
    aliquot = 0.00
    if (salary >= 0 and salary <= 1100):
        aliquot = 0.05 
    elif (salary >= 1100.01 and salary <= 2500.00):
        aliquot = 0.10
    else:
        aliquot = 0.15 
    return aliquot * salary

salary_value = float(input())
benefits_value = float(input())

fee_value = calculate_fee(salary_value)

output = salary_value - fee_value + benefits_value
print(f'{output:.2f}')