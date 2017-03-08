angular.module('myApp')
       .controller('HomeController', HomeController);

function HomeController(){
  var vm = this;
  vm.planets = [
    {name: 'Sun', gravity: 27.9},
    {name: 'Mercury', gravity: 0.377},
    {name: 'Venus', gravity: 0.9032},
    {name: 'Earth', gravity: 1},
    {name: 'Moon', gravity: 0.1655},
    {name: 'Mars', gravity: 0.3895},
    {name: 'Jupiter', gravity: 2.640},
    {name: 'Saturn', gravity: 1.139},
    {name: 'Uranus', gravity: 0.917},
    {name: 'Neptune', gravity: 1.148},
    {name: 'Pluto', gravity: 0.06}
  ];
  vm.selectedGravity = vm.planets[0].gravity;


  vm.calculate = function calculate(){
vm.resultText = "hola";
    // vm.weight = vm.weightInput * vm.selectedGravity;
    // vm.resultText = "Your weight on planet "
    //               + ", would be " + vm.weight + "!";
  }
}
