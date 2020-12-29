plainText = document.getElementById('plainText')
codeText = document.getElementById('codeText')
cipherNumInput = document.getElementById("cipherNumInput")
cipherNum = 0
mostRecent = -1
alph = [
" ",
"!",
"#",
"$",
"%",
"&",
"'",
"(",
")",
"*",
"+",
",",
"-",
".",
"/",
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
":",
";",
"<",
"=",
">",
"?",
"@",
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"[",
"^",
"_",
"`",
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
"{",
"|",
"}",
"~"
]
result = ""

function encode () {
    console.log(cipherNum)
    input = plainText.value
    for (i=0; i<input.length; i++) {
        charCode = alph.indexOf(input.substring(i, i+1))
        codeChar = alph[(charCode+cipherNum) % alph.length]
        result += codeChar
    }
    codeText.value = result
    result = ""
    mostRecent = 0
}

function decode () {
    console.log(cipherNum)
    input = codeText.value
    for (i=0; i<input.length; i++) {
        charCode = alph.indexOf(input.substring(i, i+1))
        if (charCode-cipherNum < 0) {
            charCode = alph.length + charCode
        }
        plainChar = alph[(charCode-cipherNum)]
        result += plainChar
    }
    plainText.value = result
    result = ""
    mostRecent = 1
}

function updateCipherNum() {
    cipherNum = parseInt(cipherNumInput.value)
    console.log(cipherNum)

    if (mostRecent == 0) {
        encode()
    }
    else if (mostRecent == 1) {
        decode()
    }

}