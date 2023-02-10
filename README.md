![Four in a Line logo](assets/images/four_in_a_line.png)

# Four in a Line

### This is the website for a Four in a Line Game. It is designed to be responsive and accessible on a range of devices, making it easy to navigate for potential users.

[View the live project here.](https://nigelfell.github.io/CI_MS2_FourInALine/)

#

### A screenshot of the responsive website:
![A screenshot of the responsive website](assets/docs/responsive.png)

#

## Project Scope

    To build a website for two users to play a Four in a Line game, taking turns to drop counters and so competing against each other to line up four counters in a column, row or diagonal arrangement.

    The website will indicate which players turn it is next, check and display if there has been a winner, display the players score in games won, allow the players to reset the board so starting a new game and display the rules and objective of the game.

#

## Future Enhancements

    1. Allow one user to compete against the website at different levels of skill.

    2. Allow two users to compete against each other but on different devices in different locations.

#

## User Experience (UX)

-    ### User stories

    -   First Time Visitor Goals:
        1. As a First Time Visitor, I want to easily understand the main purpose of the site.
        2. As a First Time Visitor, I want to be able to easily play the Four in a Line game in a  
           clear presentation that is responsive on different devices.
        3. As a First Time Visitor, I want to be able to view how to play and the objective of the 
           game.
        4. As a First Time Visitor, I want to be able to view current scores.
        5. As a First Time Visitor, I want to be able to see who's turn it is next.
        6. As a First Time Visitor, I want to be able to see see the winner.
        7. As a First Time Visitor, I want to be able to reset the game and start a new one.
        
    -   Returning & Frequent Visitor Goals:
        1. As a Returning Visitor, I want to quickly access the site and play the Four in a Line game as per the first time visitor.

-   ### Design

    -   #### Colour Scheme
        To create a modern look and feel that is clear to new users and familiar to a user who has played the physical version of the Four in a Line game.

    -   #### Typography
        Raleway is the font used on the site. Sans Serif is the fallback font in case for any reason the font isn't being imported into the site correctly. The Raleway font is an elegant sans-serif typeface.

    -   #### Imagery
        Imagery is important but has been kept to a minimum to improve the sites upload time.

    -   #### Sound
        Sound effects enhance the user experience with extra feedback on their actions.
  
    -   #### A screenshot of the visual design elements:
        ![A screenshot of the visual design elements](assets/docs/user-experience-design.png)

-   ### Wireframes

    -   #### The wireframe for a standard computer screen:
        ![View of the standard wireframe](assets/docs/wireframe.png)

    -   #### The wireframe for a mobile device:
        ![View of the mobile wireframe](assets/docs/wireframe-mobile.png)

-   ### Initial Coding

    -   The site was coded in Gitpod alongside the "Love Maths" project and therefore takes some of    
        the features and code from this resource.

-   ### Responsiveness

    -   The site was initially checked with Google Chrome's Dev Tools using the Device Toolbar to 
        check different device sizes, [screenshots below in test section.](#TestResp)

    -   The site was then run on a Nokia 3.1 mobile phone running Andriod version 10 with good results

#

## Features

-   Responsive on all device sizes
-   Interactive elements
-   Interactive front-end that responds to the users' actions, allowing users to actively engage with 
    data, alter the way the site displays the information to achieve their preferred goals.

#

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [W3 Schools:](https://www.w3schools.com/)
    - W3 Schools was used as a HTML and CSS reference.
2. [Code Institute](https://learn.codeinstitute.net/ci_program/diplomainwebappdevelopment)
    - The "Love Maths" project was used as the basis of the Four in a Line website.
3. [Stack Overflow](https://stackoverflow.com/)
    - Stack Overflow was used to search for solutions to specific requirements.
4. [Paint]
    - Paint for Windows was used to crop and resize the images/icons where required.
5. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Raleway' font into the style.css file which is used in the project.
6. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
7. [GitHub:](https://github.com/)
    - GitHub is used to store the project code after being pushed from Git.
8. [Figma:](https://figma.com/)
    - Figma was used to create the [wireframes](https://github.com/) during the design process.
9. [Material Design:](https://material.io/resources/color/)
    - Material Design was used to create and test the colour scheme for the website.
10. [Free Sounds Library](https://www.freesoundslibrary.com/)
    - Sound effects were downloaded from the Free Sounds Library.
11. [Google Chrome]
    - The Device Toolbar in Dev Tools was used to check the responsiveness of the site.

## Testing

### HTML and CSS Validation

    The W3C Markup Validator, W3C CSS Validator and JSHint JavaScript Validator services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/) - [View results](assets/docs/html-validation-results.png)

-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - [View results](assets/docs/css-validation-results.png)

-   [JSHint JavaScript Validator](https://jshint.com/) - [View results](assets/docs/js-validation-results.png)

### <a id="TestResp"></a>Responsiveness
    
    The site was initially checked with Google Chrome's Dev Tools using the Device Toolbar to check different device sizes, screenshots below:

-   [View a screenshot of the standard computer](assets/docs/gc-resp-standard.png)
-   [View a screenshot of the Samsung Galaxy S8](assets/docs/gc-resp-samsunggs8.png)
-   [View a screenshot of the iPhone SE](assets/docs/gc-resp-iphonese.png)
-   [View a screenshot of the iPhone 5](assets/docs/gc-resp-iphone5.png)
-   [View a screenshot of the iPad Air](assets/docs/gc-resp-ipadair.png)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals
  
    1. As a First Time Visitor, I want to easily understand the main purpose of the site.
        1. Upon entering the site, users can easily see what the purpose of the site is whether or not they are familiar with the Four in a Line game.
        2. The heading a logo clearly communicate what the site is about.
        3. The page is unclutterred with minimal elements to navigate so the user can concentrate on the game.
        4. The user can easily see who's turn it is next, if there has been a winner, the current scores and can restart the game.
        5. There are tooltips on the who's turn it is textbox and new game button to assist the user.
        6. The user can easily see instructions on how to play and the rules of the game.
        7. The user is alerted with a popup if they click a column that is full, if they carry on playing after a winner has been declared or if they click the new game button when the game is still in play.

    2. As a First Time Visitor, I want to be able to easily play the Four in a Line game in a clear 
       presentation that is responsive on different devices.
        1. The site has been designed to be easy to use and allow the user to concentrate on the game 
           using different devices such as a standard computer, laptop, tablet or mobile phone.
        2. The user can position a counter over a column with the cursor and "drop" the counter with a click. If the column is full the user is alerted with a popup.
        3. If the counter dropped is a winner the user is notified in the highlighted text box above the game table. 
    
    3. As a First Time Visitor, I want to be able to view how to play and the objective of the game.
        1. The user can easily find a description of the rules and objective of the game in a rules 
           section.

    4. As a First Time Visitor, I want to be able to view current scores.
        1. The user can easily see current scores under the game table.

    5. As a First Time Visitor, I want to be able to see who's turn it is next.
        1. The user can easily see who's turn it is next in a highlighted text box above the game table.

    6. As a First Time Visitor, I want to be able to see if the game has been won.
        1. The user can see the winner in a highlighted text box above the game table.

    7. As a First Time Visitor, I want to be able to reset the game and start a new one.
        1. The user can easily start a new game by pressing the New Game button above the game table.
        2. If the game is still in play a confirm popup is shown to the user.

-   #### Returning & Frequent Visitor Goals

    1. As a Returning Visitor, I want to quickly access the site and play the Four in a Line game as per 
       the first time visitor.
        1. The user can access the site quickly and start playing a new game as they are familiar with the rules and intuitive game design.

### Testing The Check For A Winner Algorithm

-   #### Algorithm Design

    The algorithm design follows a methodical approach, checking for a winner in the just dropped counters column, then row, then diagonal going right and finally diagonal going left. The testing followed this same approach with test scenarios to cover each eventuality.

-   #### Test Scenarios Performed

    1. Tests for win in column:
        1. Test for win in first column from bottom row up four counters, top row down four counters and then the middle four rows.
        2. Test for win in last column from bottom row up four counters, top row down four counters and then the middle four rows.
        3. Test for win in a middle column from bottom row up four counters, top row down four counters and then the middle four rows.

    2. Tests for win in row:
        1. Test for win in bottom row from first column across four counters, last column back across four counters and then in the middle columns across four counters.
        2. Test for win in top row from first column across four counters, last column back across four counters and then in the middle columns across four counters.
        3. Test for win in a middle row from first column across four counters, last column back across four counters and then in the middle columns across four counters.

    3. Tests for win diagonal going left to right:
        1. Test for win from bottom row first column diagonally across and then a middle column diagonally across.
        2. Test for win from top row diagonally back from the last column and then diagonally back from a middle column.
        3. Test for win from a middle row first column diagonally across and then a middle column diagonally across.
        4. Test for win from a middle row diagonally back from the last column and then diagonally back from a middle column.

    4. Tests for win diagonal going right to left:
        1. Test for win from bottom row last column diagonally back across and then a middle column diagonally back across.
        2. Test for win from top row diagonally across from the first column and then diagonally back from a middle column.
        3. Test for win from a middle row first column diagonally back across and then a middle column diagonally back across.
        4. Test for win from a middle row diagonally back from the last column and then diagonally back from a middle column.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Opera browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone 6 and various Window 
    phones.
-   Friends and family members were asked to review the site on as many devices as they had available, 
    play the game and to point out any bugs and/or user experience issues.

### Known Bugs

-   No known bugs at this time!

#

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "Pages" Section on the left hand side of the screen.
4. Under "Source", click the dropdown and select "Deploy from a branch".
5. Under "Branch", click the first dropdown and select "main", "/ (root)" on the next dropdown, then "Save".
5. The page will automatically refresh.
6. Scroll back to the top of the page to locate the now published site next to "Your site is live at".

#

## Credits

### Code

-   The project was initailly coded alongside the "Love Maths" project and therefore takes some of the 
    features and source code from this resource.

### Content

-   All the site content was written by the developer.

### Media

-   

### Acknowledgements

-   Pasquale for his help and encouragement.

-   My Mentor for support and helpful feedback.

-   Slack group members for their help.