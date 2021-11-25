# Pixal Art

Draw your favorite Retro Pixal Art.

## Draw at [https://pixal-art.herokuapp.com/](https://pixal-art.herokuapp.com/)

## About Pixal Art

![Drawing A Pokeball Gif](public/gifs/ezgif.com-gif-maker_4.gif)

This is a pixel art drawing app. Choose from 5 different canvas sizes to draw wonderful pixel art. Each canvas is a square and the larger the canvas size the smaller the pixels will appear to be. You can choose from one of ten basic colors to start drawing or add a new color to your paint pallette. You can click a single pixel to color it or click and drag to color several in a row.

There are also some overall actions you can take like filling all the empty pixels with your choosen color, filling all the cells a single color.

To start over simply click clear cells or choose a new canvas size.

Besides drawing your can view artwork created and saved in the Public Gallery. Or log in to see past artwork that you created and saved in your gallery.

Currently saving is restricted to logged in users only. And the images will be saved to your Gallery. When saving you will be given the options to make your artwork viewable by the public or private to you.

![Screen Shot of Gallery](public/images/Screen%20Shot%202021-11-25%20at%2012.03.54%20AM.png)

## Meet the Engineer - Kelsey Schroeder

|                                        ![Kelsey's Portrait](public/images/kelsey.png)                                        |         [![My Portfolio Website](public/images/myPorttolio.png)](https://kelsey-schroeder.herokuapp.com) [https://kelsey-schroeder.herokuapp.com](https://kelsey-schroeder.herokuapp.com)          |
| :--------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Github](public/images/github-logo.png)](https://github.com/Ka9kdc) [https://github.com/Ka9kdc](https://github.com/Ka9kdc) | [![Linkedin](public/images/linkedin-logo.png)](https://www.linkedin.com/in/kelsey-m-schroeder/) [https://www.linkedin.com/in/kelsey-m-schroeder/](https://www.linkedin.com/in/kelsey-m-schroeder/) |

### Technologies Used

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Postgress](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## To View Locally

Clone Repo.

Then, run `npm install` to install all node modules.

Create a database named "pixalArt" by running `createdb` from your command line so it exists (and can be connected to).

Finally you can run `npm run server:dev` to start the web server.

In a second terminal navigate back to the local repo and run `npm run client:dev` to start the react server.

The express server is setup to run as a proxy on localhost: 5000, while react-scripts servers up the fontend code on localhost:3000. Both need to be up and running for the app to work.

In addition to `client:dev` and `server:dev`, you have access to `db:build` which (you will write to) rebuilds the database, all the tables, and ensures that there is meaningful data present. There is initial seeding data that can be added to your database by running `npm run db:build`.
