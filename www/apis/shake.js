// The watch id references the current `watchAcceleration`

            var watchID = null;
             
            //wait for PhoneGap to load
            document.addEventListener("deviceready", loaded, false);
             
            // PhoneGap is ready
            function loaded() {
                startW();
            }
             
            // Start watching the acceleration
             
            function startW() {
                 
                var previousReading = {
                    x: null,
                    y: null,
                    z: null
                }
                 
                navigator.accelerometer.watchAcceleration(function (acceleration) {
                  var changes = {},
                  bound = 1.3;
                  if (previousReading.x !== null) {
                      changes.x = Math.abs(previousReading.x, acceleration.x);
                      changes.y = Math.abs(previousReading.y, acceleration.y);
                      changes.z = Math.abs(previousReading.z, acceleration.z);
                  }
                   
                  if (changes.x > bound && changes.y > bound && changes.z > bound) {
                    shaken();
                  }
                   
                  previousReading = {
                  x: acceleration.x,
                  y: acceleration.y,
                  z: acceleration.z
                  }
                   
                  }, onError, { frequency: 2000 });
            }
             
            