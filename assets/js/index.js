'use strict';

function CarCharacteristic (color, model, brand, engineVolumeInLiters, passengerAmount, speedInKPH, maxSpeedInKPH) {
  this.color =  color,
  this.model = model,
  this.brand = brand,
  this.engineVolumeInLiters = engineVolumeInLiters,
  this.passengerAmount = passengerAmount,
  this.speedInKPH = speedInKPH,
  this.maxSpeedInKPH = maxSpeedInKPH,
  this.accelerate = function() {
    this.speedInKPH += 10;
    if(this.speedInKPH > this.maxSpeedInKPH) {
      this.speedInKPH = this.maxSpeedInKPH;
    }
    return this.speedInKPH;
  },
  this.deaccelerate = function() {
    this.speedInKPH -= 10;
    if(this.speedInKPH < 0) {
      this.speedInKPH = 0;
    }
    return this.speedInKPH;
  },
  this.stop = function() {
    this.speedInKPH = 0;
    return this.speedInKPH;
    }
  }
const car1 = new CarCharacteristic('black', 'sedan', 'Toyota', 123, 5, 100, 160);
const car2 = new CarCharacteristic('blue', 'sedan', 'BMW', 1233, 4, 57, 3456);
const car3 = new CarCharacteristic('green', 'sedan', 'Mercedes', 1235, 3, 120, 654);
const car4 = new CarCharacteristic('red', 'sedan', 'Lanos', 123432, 2, 147, 6543);
const car5 = new CarCharacteristic('yellow', 'sedan', 'Jeep', 123432, 1, 150, 386);
