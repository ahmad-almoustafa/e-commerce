
##todo: if deployment fails the pm2 process keep using the port the next deploy we get error
#ps aux|grep pm2 => then kill the pm2 process
#sudo lsof -ti tcp:1337 | xargs kill
#sudo lsof -i tcp:1337 

cd /home/ec2-user/e-commerce/client
# pwd	
npm install

npm run build	

cd /home/ec2-user/e-commerce/server
npm install

pm2 restart ecosystem.config.js 