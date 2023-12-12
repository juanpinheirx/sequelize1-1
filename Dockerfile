# next line defines what kind of image I want
FROM alpine
# then we set our working directory as /app
WORKDIR /app
# it copies all .jsons to our image
COPY package*.json ./ 
# it runs a command that installs our dependencies into our image
RUN ["npm", "install"]
# it copies our files into our image
COPY . .
# just an exposure to the preferred port
EXPOSE 3000
# commands able to run inside the image
CMD ["npm", "run", "dev"]
