var os = require('os')
const sysinfo = {}; 
sysinfo.get = () => [{"hostname":os.hostname(),"OS type":os.type()}];
module.exports = sysinfo;
