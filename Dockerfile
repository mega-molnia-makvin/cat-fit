FROM node
COPY . /server
WORKDIR /server
RUN npm start
CMD [ "node", "server" ]

# version: "2"
# services:
#   node:
#     image: "node:8"
#     user: "node"
#     working_dir: /home/node/app
#     environment:
#       - NODE_ENV=production
#     volumes:
#       - ./:/home/node/app
#     expose:
#       - "8081"
#     command: "npm start"