module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        inputEvensOdds: "input[name='evenOddInput']",
        buttonEvensOdds: "button[name='evenOddButton']",
        resultEven: "span[name='evenResults']",
        resultOdd: "span[name='oddResults']",

        inputFilterObject: "input[name='objectFilterInput']",
        buttonFilterObject: "button[name='objectFilterButton']",
        resultFilterObject: "span[name='objectFilterResults']",

        inputFilterString: "input#nameFilterInput",
        buttonFilterString: "button#nameFilterButton",
        resultFilterString: "span[name='nameFilterResults']",

        inputPalindrome: "input[name='palindromeInput']",
        buttonPalindrome: "button[name='palindromeButton']",
        resultPalindrome: "span[name='palindromeResults']",

        inputSumOne: "input[name='sumInput1']",
        inputSumTwo: "input[name='sumInput2']",
        buttonSum: "button[name='sumButton']",
        resultSum: "span[name='sumResults']",
    }
}