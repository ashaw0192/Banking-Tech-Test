--- BANKING APP ---

1. PLANNING

- My original planning consisted of mapping out models which would feed into a controller as follows:

  - (date model)
    [formats the date] >>>>>>>>>> (account controller)
    [takes user input and
    sends it to models,
    (transaction model) >>>>>>>>> dispaying return]
    [keeps track of
    transactions to feed
    to user]

- However in my building I realised I would also need a model to format the users statement upon its return to them

- I decided in planning not to vet for amounts that weren't integers, as I assumed this was beyond the scope of what I was building, I also decided to allow fractional pennies in case of currency conversion, but rounded it in the display

- In retrospect, I'm not sure whether the user would have wanted to input their own date for the transactions; what I have implemented is a program that formats a timestamp created when a transaction is fed to the program, which feels closer to how a banking app would actually work.

- Secondarily, the transaction model is maybe a little burdened with responsibilty, but I think it works as a model that "keeps track of transactions"

- Finally there is potentially some refactoring to combine the deposit/withdraw functions, but it would have involved rewriting all my tests so I opted for timely completion

- For reusability, I attempted to make the models completely self contained, not requiring colaborators, and fed the necessary input via the account controller, which itself doesn't attempt any logic

2. INSTALLATION

- Follow this checklist for Installation, testing, and using the program (the checklist assumes you have NVM installed):

  - setup

  1. clone the app repository onto your machine, and navigate to the bankingApp folder
  2. ~nvm use node //setup node environment
  3. ~npm install //installs dependencies including jest

  - testing

  1. ~jest //from bankingApp will run complete test suite
  2. ~jest --coverage //to view coverage stats
  3. navigate to different folders for unit tests, or call the path after the jest command

  - using the program

  1. ~node //from bankingApp folder
  2. > const Account = require(`./account`);
  3. > const account = new Account();
  4. > account.deposit(amount); // deposits an amount into your account
  5. > account.withdraw(amount); // withdraws an amount from your account
  6. > account.statement(); // view a printout of your statement

Have Fun!
