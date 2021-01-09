function vowelsAndConsonants(s) {
    let vowels = '';
    let consonants = '';

    // For each letter in string s
    for (const letter of s) {
        // Separate vowels and consonants
        if (letter == 'a' ||
            letter == 'e' ||
            letter == 'i' ||
            letter == 'o' ||
            letter == 'u'
           ) {
            // Append vowel to vowel string
            vowels += letter;
        } else {
            // Append consonant to consonant string
            consonants += letter;
        }
    }
    
    // Print each vowel
    // This loop iterates over each character in the vowels string in order
    for (let i = 0; i < vowels.length; i++) {
        console.log(vowels.charAt(i));
    }
    
    // Print each consonant
    // This loop iterates over each letter in an array consisting of the consonants
    for (const letter of consonants.split('')) {
        console.log(letter);
    }
}







function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    // const PI = Math.PI
    // var r = readLine()

    const PI = Math.PI
    var r = 2.6

        
    // Print the area of the circle:
    console.log(PI * r * r)
    // Print the perimeter of the circle:
    console.log(2 * PI * r)
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

main()