
#!/bin/bash
sudo sh -c "echo shutdown -h now | at now + 5 minutes" > /tmp/01sh_output.txt 2>&1
sudo atq > /tmp/02atq.txt
echo `date` > /tmp/03mydate.txt
