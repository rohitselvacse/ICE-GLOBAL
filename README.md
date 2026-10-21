## Expo Legacy Archive


http://192.168.1.72:8080/gallery?tag=vip

sudo nginx -t
sudo systemctl reload nginx
curl -I -H "Host: iceglobal.in" http://127.0.0.1/


sudo mkdir -p /var/www/iceglobal.in/dist
sudo rsync -a --delete /root/app/dist/ /var/www/iceglobal.in/dist/
sudo chown -R www-data:www-data /var/www/iceglobal.in
ls -la /var/www/iceglobal.in/dist | head