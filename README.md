# Paws

Paws is a photo-sharing social networking service on which users can interact with each other by following other users and commenting on or liking their posts. This app is aimed at dog owners, and users are encouraged to share dog-related content. 

![responsive-design](../paws/src/readme/images/responsivedesign.png)

## Quick links

[Deployed app](https://paws-frontend.herokuapp.com/)

[Backend repository](https://github.com/axelzwaans/paws-backend)

[Backend deployed](https://paws-backend-api.herokuapp.com/)

# UX

## User stories

Before starting this project, I thought about how this software application might provide value to a user. Using agile methodology, I identified a set of user stories and used GitHub projects to document them. I tagged them either as 'must have' (this is functionality which my app has) or 'could have' (functionality which my app doesn't have, but would be a good feature.)

![userstories](../paws/src/readme/images/userstories.png)

You can view the user stories in Github project [here](https://github.com/axelzwaans/paws/issues)

### General, colour, font

This app has been styled using React Bootstrap. The colour scheme was inspired by a cool color pallete I found which matched the type of style I wanted for this project. I kept the design very simple, focusing on functionality and user-friendliness. I used 'Roboto' as the main font in the app because of its simple and elegant style. I chose 'Sans-Serif' as a backup in case the primary font is unable to load.

### Wireframes

I created a low-fidelity wireframe using Balsamiq to help me design my app. I created a mock-up of each page;

**Sign in page**

![balsamiq-signin](src/readme/images/balsamiq-signin.png)

**Home page**

![balsamiq-mainpage](src/readme/images/balsamiq-mainpage.png)

**Post detail**

![balsamiq-postdetail](src/readme/images/balsamiq-postdetail.png)

**Profile page**

![balsamiq-profilepage](src/readme/images/balsamiq-profilepage.png)

**Create post**

![balsamiq-createpost](src/readme/images/balsamiq-createpost.png)

### Entity Relationship Model

I added a graphical representation in the form of an entity-relationship model to depict the relationship between entities within my models. I used Lucidchart to design it.

![erd](src/readme/images/erd.png)

## Features

I set out to create a simple app that anyone can engage in, providing an easy way for people with dogs to share pictures of their pets. I wanted this app to be a little more than just a platform for uploading pictures so I included functionality which allows users to interact with each other on a basic level, similar to a social media app.

### Existing features

- **Nav bar** - My app has a responsive nav bar which allows the user to seamlesly navigate between pages. The nav bar will show appropriate navigation options depending on whether the user is authenticated. It also includes a logo which links the user back to the landing page from any page. Going by Bootstrap's 'mobile first' approach, the navbar menu automatically renders as collapsed on smaller screen sizes, and can be toggled by a hamburger button.

![navbar](src/readme/images/navbar.png)

- **Home page** - The home page can also be refered to as the posts list page, as it will display posts to both logged in and logged out users. This page has several components; A search bar, the posts list, and popular profiles list.

![homepage](src/readme/images/homepage.png)

- **Post detail page** - When a user clicks on a post from the posts list page, they will be brought to that post's detail page where the user can inspect it in further detail and leave a comment. If the user is the post owner, they can edit or delete their post.

![postdetail](src/readme/images/postdetail.png)

- **Post edit page** - This page allows the user to update an existing post. 

![postedit](src/readme/images/postedit.png)

- **Profile page** - The profile page displays more information about the profile, including their number of posts, followers and followings. From here, the profile owner has access to links to edit their profile, change their username and change their password. All of the profile's posts are also listed.

![profilepage](src/readme/images/profilepage.png)

- **Profile edit page** - From here the profile owner can update their profile image and bio. 

![editprofile](src/readme/images/editprofile.png)

- **Feed page** - The feed page is very similar to the posts lists page except that it only includes posts of profiles which the user follows. 

- **Liked page** - This page is also similar in that in contains all posts which the user has liked.

## Testing

### Lighthouse testing

I ran Lighthouse tests on Chrome to check the performance, quality and correctness of this web app. I generated reports for mobile and desktop devices which gave the following results;

**Desktop**

![lighthouse-desktop](src/readme/images/lighthouse-desktop.png)

**Mobile**

![lighthouse-mobile](src/readme/images/lighthouse-mobile.png)

### HTML testing



### CSS testing

I used the W3C CSS validation service to check for errors and warnings and received the following report;

![cssvalidator](src/readme/images/cssvalidator.png)

### JavaScript testing

I ran all Javascript files included in this project through ESLint; a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. After making a few minor changes in some files there were no errors. 

### Manual testing

| Function| Test case | Result |                                                          
|---------|-----------|--------|
| Navigation | Form checks if email exists | Pass

