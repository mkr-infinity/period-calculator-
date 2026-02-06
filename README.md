## A simple CLI based python period date calculator made by Me😉-- <Actually AI>
## JUST PASTE THIS CODE IN ANY PYTHON COMPILER OR BROWSER BASED COMPILER <br>


### CODE
```bash
import datetime

def period_tracker():
    last_period = input("Enter the date of the first day of your last period (YYYY-MM-DD): ")
    cycle_length = int(input("Enter the length of your menstrual cycle (in days): "))
    period_length = int(input("Enter the length of your period (in days): "))
    
    last_period_date = datetime.datetime.strptime(last_period, "%Y-%m-%d")
    next_period_date = last_period_date + datetime.timedelta(days=cycle_length)
    
    print(f"\nNext period is expected on {next_period_date.date()}.")
    
    # Calculating ovulation period
    ovulation_start = last_period_date + datetime.timedelta(days=cycle_length - 14)
    ovulation_end = last_period_date + datetime.timedelta(days=cycle_length - 10)
    print(f"\nYour ovulation period is from {ovulation_start.date()} to {ovulation_end.date()}.")
    
    # Predicting fertile window
    fertile_window_start = last_period_date + datetime.timedelta(days=cycle_length - 18)
    fertile_window_end = last_period_date + datetime.timedelta(days=cycle_length - 11)
    print(f"\nYour fertile window is from {fertile_window_start.date()} to {fertile_window_end.date()}.")
    
    # Calculating next 3 period dates
    for i in range(3):
        next_period_date = next_period_date + datetime.timedelta(days=cycle_length)
        print(f"\nThe period after the next one is expected on {next_period_date.date()}.")
        
period_tracker()

# MADE BY KAIF
```
