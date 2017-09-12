var exec = require('cordova/exec');

var bluetooth = {
    getWifiName:function(success){
      exec(success, null, "Bluetooth", "getWifiName", []);
    },
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
