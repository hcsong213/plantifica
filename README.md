# Plantifica

Plantifica is a web app that allows users to keep track of their plants and learn more about them! First, users can create an account and log in, then navigate to our plant search feature to find their plants. Once they find their desired plants, they can add them to their collection. These plants will be shown on their profile. Additionally, users will get achievements based on the plants they add to their collection. Plantifica's goal is to increase interest in growing plants at home!

## Setup

If you have the Github link, clone the repo with:

    git clone https://github.com/hcsong213/plantifica.git
    cd plantifica

Now that you're in the repository, run the following commands to download the required packages and start the server:

    yarn
    yarn start

After running `yarn start`, the server will serve the app at `localhost:3000`. From here, you can start using the app!

## Flow

Here, we'll be going into more detail on the user flow. When users first use the site, they'll be directed to the home page. On the home page, they'll find a quick description of the app and links to create a new account or log into their existing account. 

On the Create New Account Page, users enter a display name, email, and password, and we create an account for them. We use Firebase to store their account information, as well as their plant collection and achievements. Through Firebase, we also enforce a six character minimum for passwords and prevent two users from having identical emails. Account creation is where our users upload data to the server (their name, email, and password). Having accounts and being able to log in is one of our unique features. 

Once users create their account and log in, they are redirected to their profile, which shows their account info, their profile picture, their plants, and their achievements. At first their plants and achievements will be empty, but they can change that by searching for plants.

When the user clicks on `Find Plants` in the navbar, we route them to our plant search page where they can search for the plants they own. They can type in the exact name of a plant into the search bar and click submit to search for a specific plant. If the plant is in our database, we show the plant, an image, and some details about the plant. Examples of plant names include `Venus Fly Trap`, `Aloe Vera`, and `Croton`.  They can choose to add the plant to their collection or remove it if they already have it in their colleciton. More details about our plant database are in the database README

Once users add plants to their collection, the plants will show up on their profile page. They can check these out by clicking on `Your Profile` in the navbar. Once certain criteria are met, users will also obtain certain achievements.

## Plant Database

Our team was having trouble finding plant database APIs online that we could use that was in Python.
We found one called Trello that is now depreciated and no longer in use.

Instead, we decided to build our own database for the purposes of this small-scale project with about thirty-five entries of common houseplants
that the users could choose from.

I built the database from scratch by using common listings of houseplants from the following website:
(https://www.houseplantsexpert.com/a-z-list-of-house-plants.html)

I then consolidated information from the above website and the following database (https://garden.org/plants/) to create
common categories such as genus name, life cycle, etc. thus providing us with a dataset of plants we could us, with common information about them
that are relevant to the user.

To generate images for the plants so we can populate them in our site, I used images with Creative Commons (CC) licenses.

These entries were then uploaded to our Plantifica Firebase so they can be used and rendered in our app in the manner of an API.

## Achievement Badges

These icons are displayed when a user fulfills one of the following achievements:

    Achievement 1: Newbie (User joined Plantifica)
    Achievement 2: Rookie (User has uploaded their first plant)
    Achievement 3: Green Thumb (User has uploaded three plants)
    Achievement 4: Plant Master (User has uploaded five plants)
