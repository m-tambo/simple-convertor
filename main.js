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


function simpleConv(x) {

    let set1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let set2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


    if (0 >= x < 20) {
        console.log(set1[x])
    } else
    if (20 <= x < 100) {
        console.log(set2[x])
    } else
    if (100 <= x < 1000) {
        console.log(x.toString().split())

        if (x % 100 === 0) {
            console.log (set1[x] + " hundred")
        }
    }




    if (x === 1000) {
        console.log("one thousand!")
    }
}
