var os = require('os')
const sysinfo = {}; 
sysinfo.get = () => [{"hostname":os.hostname(),"OS type":os.type()}];
sysinfo.resources = () => [{"free mem":os.freemem(),"load avg":os.loadavg()}];
sysinfo.cpus = () => os.cpus();
module.exports = sysinfo;
