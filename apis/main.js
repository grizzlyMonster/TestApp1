	watchID = null;
	countMe = 0;
	
	$(document).ready(function(){  onDeviceReady();




 });
     
	function onDeviceReady() {
     	startWatch();
		var element = document.getElementById('deviceIsReady');
		element.innerHTML = 'Watching shake movement...';

		shake.startWatch(onDetected);
        
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
           var xpos = 100 + (_x *100);
           var ypos = 100 + (_y*100);
           var zpos = 100 + (_z*100);		   
			

	
			$("#footBall").css({'top': ypos, 'left' : xpos })
			

			
			 
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

	function onDetected() {
		var element = document.getElementById('shakeData');
		element.innerHTML = 'It\'s happening! <p><button type="button" onclick="clearShakeData();">Clear</button></p>'
	}

	function clearShakeData(){
		document.getElementById('shakeData').innerHTML = '';
	}


	
	 '';
	}


	
	