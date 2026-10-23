#!/bash/bin

echo  "What is the message"

read message

sleep 3

git add .
git commit -m message
git push origin main
