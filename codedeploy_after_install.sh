# run React front end app
cd /home/ec2-user/e-commerce/client
npm install
npm run build	

# run nodejs server
cd /home/ec2-user/e-commerce/server
npm install
pm2 restart ecosystem.config.js 