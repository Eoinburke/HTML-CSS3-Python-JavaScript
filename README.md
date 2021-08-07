# Delicious- A Recipe App
## Python & Flask - Data Centric Development - Milestone Project 3

Delicious is a recipe app built on the Flask framework using MongoDB database. The purpose of this project is to "Create a web application that allows users to store and easily access cooking recipes", using the CRUD operations of Create, Read, Update, and Delete for their recipes.

The deployed site can be found [here](#).

# Table of Contents
## UX

## Table of Contents

1. **[UX](#UX)**

   * **[User Stories](#user-stories)**
   * **[Design](#design)**
     * **[Framework](#framework)**
     * **[Database](#database)**
     * **[Color Scheme](#color-scheme)**
     * **[Typography](#typography)**
     * **[Icon](#icon)**
   * **[Wireframes](#wireframes)**

2. **[Features](#features)**
   * **[Existing Features](#existing-features)**
   * **[Features Left to Implement](#features-left-to-implement)**

3. **[Technologies Used](#technologies-Used)**
   * **[Languages](#languages)**
   * **[Libraries](#libraries)**
   * **[Tools](#tools)**
   * **[Hosting](#hosting)**

4. **[Testing](#testing)**

5. **[Deployment](#deployment)**

6. **[Credits](#credits)**
    * **[Content](#content)**
    * **[Media](#media)**
    * **[Acknowledgements](#acknoledgements)**
    * **[Disclaimer](disclaimer)**


## UX

I have a huge interest in cooking and baking so I was delighted when I got the chance to make a website with some of my favourite dishes.
This website has been designed as a multi-page front end website with login possibility.


### User Stories

As a user, I want to be able to:

* View the recipes from any device (mobile, tablet, desktop).
* See recipes from other users to get new ideas.
* Easily navigate through the recipes.
* Search any specific recipe.
* Search recipes by different category.
* Login and add my recipes.[Creatre]
* Get the instruction to make a dish from this site.[Read]
* Edit the recipes I've added.[Edit]
* Delete the recipes I've submitted.[Delete]

### Design

#### Framework

* **[Materialize 1.0.0](https://materializecss.com/)**

I used materialize for my css layout
  
* **[jQuery 3.5.1](https://code.jquery.com/jquery/)**

  Used to manipulate the DOM, for example buttons, and showing / hiding elements

* **[Flask 1.0.2](https://palletsprojects.com/p/flask/)** 

  Flask is the framework that runs the application

#### Database

I used MongoDB for my database it was good to get experience using NoSQL database MongoDB.

The database is made up of the following collections

**tasks**

      id: <ObjectId>
      category_name: <string>
      task_name: <string>
      task_ingredients: <string>
      image_url:<string>
      task_prep: <string>

**users**

      id: <ObjectId()>
      
       username: <string>
      
      password: <string>

#### Typography

I used the following fonts i got from [Google fonts](https://fonts.google.com/)

* **Cursive** was used for all heading elements.

#### Icon

[Font Awesome](https://fontawesome.com/v4.7/get-started/) was used for all the icons in this project.

### Wireframes

I used [Balsamiq Wireframes](https://balsamiq.com/) for the planning process for this project.

You can go [here](#) to see my wireframes!
