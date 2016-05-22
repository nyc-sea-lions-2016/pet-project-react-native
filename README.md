# Next Best Friend

[Blog (with demo video)][blog]
[blog]: http://www.alyssaransbury.com/blog/nextbestfriend.html

[Rails Back End][rails]
[rails]: https://github.com/nyc-sea-lions-2016/pet-project-rails

Next Best Friend is a React Native app with a Ruby on Rails backend API. The app incorporates a "Tinder swipe" functionality and links into the Google Maps and PetFinder APIs. Users can "favorite" animals they'd like to look at later, set their preferred location, filter by animal type, call or email the organization linked to each animal, and see a map of nearby animal shelters.

##Technologies
Ruby on Rails, React Native, PostgreSQL, PetFinder API, Google Maps API, RSpec

##Background

Over 7.5 million dogs and cats enter shelters nationwide every year. Of these, approximately 30-40% are euthanized. We built Next Best Friend in April 2016 to better connect these pets with potential new owners.

##Features

### See adoptable pets nearby
Next Best Friend makes calls to the Pet Finder API to receive information about animals in shelters near the user's preferred location. Users can up to 5 images of the animal, the name, gender, rough age, breed, size, location, and a description. The user can also see if the animal has been spayed or neutered, and whether the animal has received its shots.

### Swipe left or right on adoptable pets
Users can swipe right to add an animal to their "Favorites" list, or left to see the another animal. A left swipe does not prevent a user from seeing that animal again in the future. This swipe card functionality was built to be similar to Tinder so that users could see one large image of an animal at a time. Each "card" has a large image, the name of the animal, and the breed / type.

### Filter by pet type and location
Users can set their preferred zip code and animal type on the User Preferences page. Users can choose to view only cats, dogs, reptiles, or small/furry animals.

### Contact shelters directly
From the animal details page, users can click to contact the person who currently has the animal they are interested in. Clicking the email icon will open the iPhone's native mail app with a pre-written email message inquiring about the animal. Clicking the phone icon will prompt the user to make a call to the phone number on record for the animal. If an email address or phone number is not available, these icons will not be visible to the user.

### Map of nearby shelters
If users are more interested in going directly to a shelter, Next Best Friend provides a map view of animal shelters near the user's current location.

### Facebook OmniAuth
Users initially login to the app via their Facebook account. The app grabs their profile image and name, which are displayed on the User Preferences page.

## Work in Progress / To Do

- [ ] Fix filtering bug where users see 2-3 of past filter selection before seeing the animals they want
- [ ] Fix Facebook login bug where user sometimes cannot navigate away from logout button
- [ ] Open Google Maps for directions from current location to animal shelter
- [ ] User can search shelter map for shelters in a specific area (not just their current location)
- [ ] Social media sharing
- [ ] User can click image of animal to go to details page
- [ ] Work with local shelters to digitize adoption paperwork
- [ ] Make app downloadable online
- [ ] Update UI colors
- [ ] Give user option to logout
- [ ] Create Android version


