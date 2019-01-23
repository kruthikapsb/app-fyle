@echo off
git add .
git commit -m "test"
git push https://github.com/kruthikapsb/app-fyle.git master -u
git push heroku master