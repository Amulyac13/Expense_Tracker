Deploy link:->  https://expense-tracker-blush-tau.vercel.app/login

I have created the frontend part using react and i have call the api(endpoints) using the fetch and i have used the jsonwebtoken for ensuring that the registered user can access my website.
For the backend i have created a model that contains user information and categories of expense that are used likely to store in it.And middleware are used.
For the backend part i have used the express,mongodb,nodejs. and used dependencies ->mongoose,bcrypt,cors,dotenv,jsonwebtoken,cookie-parser.

routes:->
router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);
router.get('/', getAllTransactions);
router.post('/', addTransaction);
router.delete('/:expenseId', deleteTransaction);

mongodb queries:-> findByIdAndUpdate , findById , findOne.

Api usage:->
![image](https://github.com/user-attachments/assets/06105e1b-3374-4ded-bb07-ae6577a4897d)
if the api already registered and we are trying to register the user and it will give the error.

first I deploy the backend and the deployed link of backend are used in frontend and then the frontend part is deployed.

Functionality:->
login/logout
add expense 
delete expense 
notication when you get successfully registered/ login and add/delete the expense
dashboard:-> on that we get the expense detail on the search filter.

frontend part run:->npm start
backend part run:->npm run dev.

