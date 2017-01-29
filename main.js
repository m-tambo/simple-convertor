function TestCase1(){
    //Arrange
    var testNum = 3;
    //Act
    var result = ConvertToString(testNum);
    //Assert
    if(result == "three"){
        console.log("Test Passed");
    } else {
        console.log("Test Failed");
    }
}

function testConverter() {
    for (let i = 0; i <= 100; i++) {
        console.log(simpleConv(i))
    }
}

function simpleConv(num) {
    let x = Math.floor(num)
    let set1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let set2 = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

// restrict the number
    if ((x < 0) || (x > 1000)) {
        console.log ('enter an integer between 0-1000')
    }

// numbers 0-19
    if ((0 >= x) && (x < 20)) {
        console.log(set1[x])
    } else

// numbers 20-99
    if ((20 <= x) && (x < 100)) {
        if (x % 10 === 0) {
            let y = x / 10;
            console.log(set2[y])
        } else {
            let a = x.toString().split()[0];
            let b = x.toString().split()[1];

            console.log(set2[b] + '-' + set1[a])
        }
    }
// hundreds
    // if ((100 <= x) && (x < 1000)) {
    //     console.log(x.toString().split())

    //     if (x % 100 === 0) {
    //         console.log (set1[x] + " hundred")
    //     }
    // }




    if (x === 1000) {
        console.log("one thousand!")
    }
}
