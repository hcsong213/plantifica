# Plantifica Databases

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