react-scripts build && scp -r ./build/* root@143.198.59.245:/var/www/austinwiley.dev
# REMEMBER TO: chown www-data:www-data -R (your folder) so web server owns files
echo "REMEMBER TO: chown www-data:www-data -R /var/www/austinwiley.dev so web server owns files"
ssh root@143.198.59.245
read -n 1 -s -r -p "Press any key to exit script and visit site"
start chrome austinwiley.dev
exit