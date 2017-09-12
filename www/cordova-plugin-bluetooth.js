var exec = require('cordova/exec');

var bluetooth = {
    bluetoothSearch:function(success,error){
        exec(success, error, "Bluetooth", "bluetoothSearch", []);
    },
    bluetoothSend:function(sendMessage,success,error){
        exec(success,error,"Bluetooth","bluetoothSend",[sendMessage.ssid,sendMessage.pwd,sendMessage.address,sendMessage.psn]);
    },
    bluetoothStop:function () {
      exec(null,null,"Bluetooth","bluetoothStop",[]);
    }
};
module.exports = bluetooth;
