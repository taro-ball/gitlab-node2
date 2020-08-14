
#!/bin/bash
sudo sh -c "echo shutdown -h now | at now + 5 minutes"; echo `date` > /tmp/01mydate.txt
