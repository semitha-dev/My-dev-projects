import random

randomNum = random.randint(1,100)


guess = 0

command = ""

while command != randomNum and guess != 3:

    

    try:
     command = float(input("Guess the Number  =  "))
        
     if command > randomNum:
        print("You number is too high")
        guess += 1
        print(guess)
     elif command < randomNum :
        print("You number is too low")
        guess += 1
     elif command == randomNum:
        print("You Won. Congrats")
        
    
    except:
       print("Please enter a valid input")

    
    

    







