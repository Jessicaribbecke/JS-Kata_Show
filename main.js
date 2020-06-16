// let MainElement = document.querySelector("main")

// const kata1Heading = document.createElement('h1')
// mainElement.append(kata1Heading)
// kata1Heading.append('Kata 1')




let mainElement = document.querySelector("main")

let kata1Heading = document.createElement("h1")
let kata1Info = document.createElement("div1")

let kata2Heading = document.createElement("h1")
let kata2Info = document.createElement("div2")

let kata3Heading = document.createElement("h1")
let kata3Info = document.createElement("div3")

let kata4Heading = document.createElement("h1")
let kata4Info = document.createElement("div4")

let kata5Heading = document.createElement("h1")
let kata5Info = document.createElement("div5")

let kata6Heading = document.createElement("h1")
let kata6Info = document.createElement("div6")

let kata7Heading = document.createElement("h1")
let kata7Info = document.createElement("div7")

let kata8Heading = document.createElement("h1")
let kata8Info = document.createElement("div8")

let kata9Heading = document.createElement("h1")
let kata9Info = document.createElement("div9")

let kata10Heading = document.createElement("h1")
let kata10Info = document.createElement("div10")

let kata11Heading = document.createElement("h1")
let kata11Info = document.createElement("div11")

let kata12Heading = document.createElement("h1")
let kata12Info = document.createElement("div12")

let kata13Heading = document.createElement("h1")
let kata13Info = document.createElement("div13")

let kata14Heading = document.createElement("h1")
let kata14Info = document.createElement("div14")

let kata15Heading = document.createElement("h1")
let kata15Info = document.createElement("div15")

let kata16Heading = document.createElement("h1")
let kata16Info = document.createElement("div")

let kata17Heading = document.createElement("h1")
let kata17Info = document.createElement("div")

let kata18Heading = document.createElement("h1")
let kata18Info = document.createElement("div")





mainElement.append(kata1Heading)
kata1Heading.append("Kata 1")
mainElement.append(kata1Info)


let counter = 1
while (counter < 21) {
    kata1Info.append(counter + ", ")
    counter += 1
}



mainElement.append(kata2Heading)
kata2Heading.append("Kata 2")
mainElement.append(kata2Info)

counter = 2
while (counter < 21) {
    kata2Info.append(counter + ", ")
    counter += 2
}



mainElement.append(kata3Heading)
kata3Heading.append("Kata 3")
mainElement.append(kata3Info)

let counter3 = 1
while (counter3 <= 20) {
    kata3Info.append(counter3 + ", ")
    counter3 += 2
}



mainElement.append(kata4Heading)
kata4Heading.append("Kata 4")
mainElement.append(kata4Info)

let counter4 = 5
while (counter4 <= 100) {
    kata4Info.append(counter4 + ", ")
    counter4 += 5
}



mainElement.append(kata5Heading)
kata5Heading.append("Kata 5")
mainElement.append(kata5Info)

for (counter5 = 1; counter5 <= 10; counter5 += 1) {
    kata5Info.append(counter5 * counter5 + ", ")
}





mainElement.append(kata6Heading)
kata6Heading.append("Kata 6")
mainElement.append(kata6Info)

let counter6 = 20
while (counter6 >= 1) {
    kata6Info.append(counter6 + ", ")
    counter6 -= 1
}



mainElement.append(kata7Heading)
kata7Heading.append("Kata 7")
mainElement.append(kata7Info)

let counter7 = 20
while (counter7 >= 2) {
    kata7Info.append(counter7 + ", ")
    counter7 -= 2
}




mainElement.append(kata8Heading)
kata8Heading.append("Kata 8")
mainElement.append(kata8Info)

let counter8 = 19
while (counter8 >= 1) {
    kata8Info.append(counter8 + ", ")
    counter8 -= 2
}




mainElement.append(kata9Heading)
kata9Heading.append("Kata 9")
mainElement.append(kata9Info)

let counter9 = 100
while (counter9 >= 5) {
    kata9Info.append(counter9 + ", ")
    counter9 -= 5
}




mainElement.append(kata10Heading)
kata10Heading.append("Kata 10")
mainElement.append(kata10Info)

let counter10 = 10
while (counter10 >= 1) {
    const isSquare = counter10 * counter10;
    counter10 -= 1;
    mainElement.append(isSquare + ", ")
}



mainElement.append(kata11Heading)
kata11Heading.append("Kata 11")
mainElement.append(kata11Info)

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

mainElement.append(sampleArray)



mainElement.append(kata12Heading)
kata12Heading.append("Kata 12")
mainElement.append(kata12Info)

function getEvenNumbers() {

    for (counter12 = 0; counter12 < sampleArray.length; counter12 += 1) {
        if (sampleArray[counter12] % 2 === 0) {
            mainElement.append(sampleArray[counter12] + ", ")
        }
    }
}
getEvenNumbers()



mainElement.append(kata13Heading)
kata13Heading.append("Kata13")
mainElement.append(kata13Info)

for (counter13 = 0; counter13 < sampleArray.length; counter13 += 1) {
    if (sampleArray[counter13] % 2 === 1) {
        mainElement.append(sampleArray[counter13] + ", ")

    }
}



mainElement.append(kata14Heading)
kata14Heading.append("Kata14")
mainElement.append(kata14Info)

for (let counter14 = 0; counter14 < sampleArray.length; counter14 += 1) {
    mainElement.append(sampleArray[counter14] * sampleArray[counter14] + " , ")
}



mainElement.append(kata15Heading)
kata15Heading.append("Kata15")
mainElement.append(kata15Info)

let total = 0;
for (let i = 1; i <= 20; i += 1) {
    total += i;    
}
mainElement.append(total)



mainElement.append(kata16Heading)
kata16Heading.append("Kata16")
mainElement.append(kata16Info)

total = 0
for( let counter= 0; counter < sampleArray.length; counter += 1){
    total += sampleArray[counter]    
}
console.log(total)
mainElement.append(total)




mainElement.append(kata17Heading)
kata17Heading.append("Kata17")
mainElement.append(kata17Info)

let min = sampleArray[0];
for(let i = 0; i < sampleArray.length; i += 1){
if (sampleArray[i] <= min) {
    min = sampleArray[i];
}
}
mainElement.append(min)
console.log(min)



mainElement.append(kata18Heading)
kata18Heading.append("Kata18")
mainElement.append(kata18Info)

let max = sampleArray[0];
for(let i = 0; i < sampleArray.length; i += 1){
if (sampleArray[i] >= max) {
    max = sampleArray[i];
}
}
mainElement.append(max)









