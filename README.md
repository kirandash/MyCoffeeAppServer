1. RESTful API

cd .., mkdir server, cd server, npm init, or npm init -y if it hangs

npm install express-nedb-rest --save(nedb is a db and uses express js)

npm install cors --save (cors is to render our API to third party server)

node index

And then open http://localhost:3000/ which will show the coffee object but with no data. So the API is up and running. Now it must link with mycoffeeapp