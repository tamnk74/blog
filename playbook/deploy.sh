cd ~/uhome-server
git reset --hard HEAD
git pull
npm i
npm run build
npx sequelize db:migrate
pm2 restart all