	watchID = null;
	countMe = 0;
	
	$(document).ready(function(){  onDeviceReady();




 });
     
	function onDeviceReady() {
     	startWatch();
        
    }
	
	function startWatch() {
		
        var options = { frequency: 100 };
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }

    function stopWatch() {
        if (watchID) {  
            navigator.accelerometer.clearWatch(watchID);
	 		countMe = 0;
            watchID = null;
        }
    }

    function onSuccess(acceleration) {
			
			_x = roundNumber(acceleration.x,3);
			_y = roundNumber(acceleration.y,3);
			_z = roundNumber(acceleration.z,3);
			
		 
			$('#x').text(_x);
			$('#y').text(_y);
			$('#z').text(_z);
			$('#t').text(countMe++);					
			
			var left 	= 	100  + (_y * 100)
			var top 	=  	100  + (_x * 100);
			
			$("#footBall").css({'top': top, 'left' : left })
			
			 
	}
	//rounds number to number of decimal places 
	function roundNumber (number, decimalplaces) {
		return  Math.round(number * Math.pow(10,decimalplaces)) / Math.pow(10,decimalplaces);
	}

    // onError: Failed to get the acceleration
    //
    function onError() {
       $('#messages').text('OnError has happened...').css('color','red');
    }

function ClickImage(){

navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
}

	
	