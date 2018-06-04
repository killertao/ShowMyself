export default {
    mockData:IS_DEV,
    hostName:'http://litao.com',
    apiUrl(realtivePath){
        return   this.hostName.concat(realtivePath);
    }
}