#!/bin/bash
cd /home/ubuntu/app
pm2 restart server || pm2 start server.js --name server