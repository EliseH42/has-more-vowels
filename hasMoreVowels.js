function hasMoreVowels (word) {
    let regex = /[aeiouAEIOU]/g
    vowelLength = word.match(regex).length
    //console.log("vowellen "+vowelLength)
    otherLength = word.length - vowelLength
    //console.log("otherlen "+otherLength)

    if(vowelLength>otherLength){
        console.log(true)
    }else{
        console.log(false)
    }
    
}


hasMoreVowels('mice')
hasMoreVowels('moose')
hasMoreVowels('Aal')