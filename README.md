# Node Express Handlebars

This app is all about eating burgers, yes, that's right! You'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.
* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
```

* Whenever a user submits a burger's name, your app will display the burger on the
 left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user
 clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.

* [Check out this video of the app for a run-through of how it works](burger_demo.mp4).

```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This app requires a number of programs:
* [Node.js](https://nodejs.org/en/)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)
* NPM Packages: 
	* [Express](https://www.npmjs.com/package/express)
	* [Express-Handlers](https://www.npmjs.com/package/express-handlebars)
	* [Body-Parser](https://www.npmjs.com/package/body-parser)
	* [MySQL](https://www.npmjs.com/package/mysql)
	* [dotenv](https://www.npmjs.com/package/dotenv)


#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
Eat-Da-Burger
│
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│ 
├──.env
│
├── public
│   ├── assets
│   │	├── css
│   │   │   └── burger_style.css
│   │   ├── img
│   │   │   └── burger.png
│   │   └── js
│   │   	 └── burgers.js
│   │
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    │
    ├── layouts
    │   └── main.handlebars
    │
    └── partials
    	└── burgers
		└── burgers.js
```

## Instructions on setting up and running this app on your computer

#### App Setup

1. Fork a copy to your Github repo and clone it to your computer.

1. Got to your Git Bash and got to into the folder called Eat-Da-Burger.

1. To get all the npm packages required to run this app type into the command line `npm install`

1. Create a server.js file.


#### Database Setup

1. On your computer, open MySQL Workbench and login to a local server you have set up. 

__One option for executing the database code required to run the app is:__

1. Open a new SQL tab for executing queries.

1. Then go back to your chosen text editor (I suggest either Visual Studio or Sublime Text) and open your `Eat-Da-Burger` folder.

1. Inside the `Eat-Da-Burger` folder you will find a folder named `db`.

1. In the `db` folder, open the file named `schema.sql`. Copy the code in the file and paste it to the new SQL tab you opened in MySQL Workbench.

1. Go back to the `db` folder in you text editor and open the `seeds.sql` file and copy the code and paste it into the open tab in MySQL Workbench and execute the code.

__The other option for running the MySQL code is to:__

1. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

1. Now you're going to run these SQL files.

1. Make sure you're in the `db` folder of your app.

1. Start MySQL command line tool and login: `mysql -u root -p`.

1. With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

1. Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

1. Close out of the MySQL command line tool: `exit`.


#### .env file Setup

1. In the command line of the main folder of `Eat-Da-Burger` type `touch .env` 

1. In your text editor, open the `.env` file and type `MYSQL_PASSWORD = "enter your MySQL password here"`

1. Save the file


#### Database Setup

1. In the command line go into main folder of `Eat-Da-Burger`

1. Type `node server.js` end hit enter

------------------------put image of command line and what it will show here-------------------

1. Go to your browser and open a new tab and type `localhost:3000` then hit enter

-------------------------have images here of the app and what they will see---------------------

	* How to Devour a burger

	* How to Compost a burger

	* How to Add a burger


----------------------STILL NEED TO DO-----------------------------------------

End with an example of getting some data out of the system or using it for a little demo

?????
## Running the tests

Explain how to run the automated tests for this system

?????
### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

?????
### And coding style tests

Explain what these tests test and why

```
Give an example
```

??????
## Deployment

Add additional notes about how to deploy this on a live system

????????????????????How is Built with different from Prerequisits???????????????????????
## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Sara Bracewell** - *Initial work* - [2crazyflowers](https://github.com/2crazyflowers)

## Acknowledgments

* A big thanks to Sunday coding crew, especially Phil Stubbs who is always, without even trying to, pushes me to do more and better.
* Background Photo by Andrew Walton @w_andrew_j (instagram) on Unsplash
* etc


### Important

Be sure to utilize the [MYSQL Heroku Deployment Guide](../Supplemental/MySQLHerokuDeploymentProcess.pdf) in order to deploy your assignment.




#### Config Setup

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

- - -

--------------------------------STILL NEED TO------------------------------------------------------------

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

-------------------------------STILL NEED TO DO---------------------------------------------------
### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
_________________________________________________________________________________________________