# Node v8.11.2
FROM node:carbon

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src

# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_modules/.bin:$PATH

# install and cache app dependencies
ADD ./package.json /usr/src/package.json
RUN npm install

ADD ./ /usr/src/.

RUN ls /usr/src

# start app
CMD ["npm", "start"]
