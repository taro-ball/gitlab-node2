
#!/bin/bash
sudo sh -c "echo shutdown -h now | at now + 10 minutes" > /tmp/01sh_output.txt 2>&1
#sudo atq > /tmp/02atq.txt
#echo `date` > /tmp/03mydate.txt
sudo yum -y install docker
sudo service docker start
