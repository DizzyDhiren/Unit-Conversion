const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

const lengthRatio = 3.281;
const volumeRatio = 0.264;
const massRatio =  2.204;

convertBtn.addEventListener("click" , function(){
    //functions for converts go here
    const num = Number(inputEl.value)
    findLength(num)
    findVolume(num)
    findMass(num)
})

function findLength(num){
    const metersToFeet = (num * lengthRatio).toFixed(3)
    const feetToMeters = (num / lengthRatio).toFixed(3)
     
 lengthOutput.innerHTML = 
 `${num} Meters = ${metersToFeet} Feet | ${num} Feet = ${feetToMeters} Meters`
}

function findVolume(num){
    const litersToGallons= (num * volumeRatio).toFixed(3)
    const gallonsToLiters = (num / volumeRatio).toFixed(3)
     
 volumeOutput.innerHTML = 
 `${num} Liters = ${litersToGallons} Gallons | ${num} Gallons = ${gallonsToLiters} Liters`
}

function findMass(num){
    const kilosToPounds = (num * massRatio).toFixed(3)
    const poundsToKilos = (num / massRatio).toFixed(3)
     
 massOutput.innerHTML = 
 `${num} Kilos = ${kilosToPounds} Pounds | ${num} Pounds = ${poundsToKilos} Kilos`
}