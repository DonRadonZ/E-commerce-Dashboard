<div align="center">

<h2>Tea Time Shop</h2>

</div>

<div align="center">

<a href="">View Demo</a>
•
<a href="https://github.com/DonRadonZ/E-commerce-Dashboard/issues">Report Bug</a>
•
<a href="https://github.com/DonRadonZ/E-commerce-Dashboard/pulls">Request new feature</a>

</div>

<div align="center">
<img src="https://img.shields.io/badge/Status-InComplete-success%253Fstyle%253Dflat?style=flat&color=orange
">
<a href="https://www.facebook.com/supachai.sinkraseam/"><img src="https://img.shields.io/badge/Supachai-1877F2?style=for-the-badge&logo=facebook&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/supachai-s-40650a104/"><img src="https://img.shields.io/badge/Supachai_Sinkaseam-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
</div>



The Tea Time Store is a app full feature use ReactJS for create web for manager and employee use for manage about sales report inventory and customer. This app use Golang for backend and Mongodb for database and ReactQuery and implement with advance react component, such as Higher-Component, React Portal and more.


## Screenshots


## Key Features

 * User of this app are store employees. They need to be logged in to the application to perform task

 * New User can only signed up inside the application(to guaranteed only store employees can get account)

 * User should be able to update avatar, username and password

 * App needs to have table view with all sales report, showing date, product name, amount and price.

 * User should be able to search list of product name, product type and report from date.

 * App needs to have table view with all inventory, product name, type, remainder, product status (In Stock, Low Stock, Out of Stock)

 * Inventory table can be able to filter out In Stock, Low Stock, Out of Stock important data

 * User should be able to add, delete and remove product from table

 * App needs to have table view with all customer, name, email, register date, total purchase amount.

 * User should be able to search list of customer name, email, register date, total purchase amount.

 * The initial app screen should be dashboard, to display important information for the last 7, 30, 90 days:
    
    * a list of product that best seller of each day of the month

    * statistic of Total sale, Number of products sold, Number New Customer, Growth Rate

    * a chart of daily product total sale the most.

    * A chart of product most sale from each type. important metric for store.

 * User should be able to define few application wide settings: product name, type, remainder, product status
 
 * Dark mode



### Library

**Frontend**

* React
* Typescript
* React-Router-Dom
* styled-component
* ReactQuery
* Axios
* Context API
* React Hook Form
* Vite

**Backend**

* Golang
* GoFiber

**Database**
* Mongodb

## Installation

* Clone this repository:

```
git clone https://github.com/DonRadonZ/E-commerce-Dashboard.git
```

* Change Directory to Cilent:

```
cd Cilent
```

* Install dependencies:

```
npm install or yarn install
```

* Build command:

```
npm run build or yarn run build
```

* Live server:

```
npm run dev or yarn run dev
```


<!-- 
## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc. -->

## Roadmap
- [ ] Add Changelog
- [ ] Add tool that important for project.
- [ ] Create Sign-in page for employee to sign in to application
- [ ] Create screen app Overview, Sales Report, Inventory, Customer
- [ ] Create reusable table for use for Sales Report, Inventory, Customer
- [ ] Create Login and Sign Up page
- [ ] Implement filter for each page
- [ ] Create Component on Dashboard
    - [ ] Card of Total sale, Number of products sold, Number New Customer, Growth Rate
    - [ ] list of product that best seller of each day of the month
    - [ ] A chart of daily product total sale the most.
- [ ] Add data for Sales Report that contain date, product name, amount and price.
- [ ] Add data for Inventory that contain product name, type, remainder, product status.
- [ ] Add data for Customer that contain date, product name, amount and price.
- [ ] Implement Setting screen 
- [ ] Implement Darkmode
- [ ] Create Backend for Using on app
- [ ] Integrated Backend and Frontend
- [ ] Integrated route between app
    


<!-- ## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser. -->

## Authors
 **Supachai Sinkaseam**

* LinkedIn - [@supachai-s-40650a104](https://www.linkedin.com/in/supachai-s-40650a104/)
* Facebook - [@supachai.sinkraseam](https://www.facebook.com/supachai.sinkraseam)
* Github - [@DonRadonZ](https://github.com/DonRadonZ)

Feel free to contact me with any question or feedback

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.

## Acknowledgements

This part develop as part of DevInit#2 Project for Frontend Developer week 5. Special thank for borntodev team for great opportunity learning and use my skill for awesome project.

