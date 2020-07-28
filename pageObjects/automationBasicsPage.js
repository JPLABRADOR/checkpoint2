var checkpoint2Commands = {
    evensAndOdds: function (data) {
        var self = this
        this
            .setValue("@inputEvensOdds", data.input)
            .click("@buttonEvensOdds")

            .getText("@resultEven", function (result) {
                var outputEven = result.value
                self.getText("@resultOdd", function (result) {
                    var outputOdd = result.value

                    if (outputEven === data.evenOutput && outputOdd === data.oddOutput) {
                        self
                            .verify.containsText("@resultEven", data.evenOutput, 
                                "VERIFIED: The Even field output is correct: " + outputEven)
                            .verify.containsText("@resultOdd", data.oddOutput, 
                                "VERIFIED: The Odd field output is correct: " + outputOdd)
                    } else {
                        self
                            .verify.not.containsText("@resultEven", data.evenOutput, 
                                "BUG: The Even field output is incorrect: " + outputEven)
                            .verify.not.containsText("@resultOdd", data.oddOutput, 
                                "BUG: The Odd field output is incorrect: " + outputOdd)
                    }

                })
            })
            .clearValue("@inputEvensOdds")
        return this
    },
    filterObject: function (data) {
        var self = this
        this
            .setValue("@inputFilterObject", data.key)
            .click("@buttonFilterObject")

            .getText("@resultFilterObject", function (result) {
                var outputFilterObject = result.value

                if (outputFilterObject === data.objects) {
                    self
                        .verify.containsText("@resultFilterObject", data.objects, 
                            "VERIFIED: The Filter Object output is correct: " + outputFilterObject)
                } else {
                    self
                        .verify.not.containsText("@resultFilterObject", data.objects, 
                            "BUG: The Filter Object output is incorrect: " + outputFilterObject)
                }

            })
            .clearValue("@inputFilterObject")
        return this
    },
    filterString: function (data) {
        var self = this
        this
            .setValue("@inputFilterString", data.name)
            .click("@buttonFilterString")

            .getText("@resultFilterString", function (result) {
                var outputFilterString = result.value

                if (outputFilterString === data.nameOutput) {
                    self
                        .verify.containsText("@resultFilterString", data.nameOutput, 
                            "VERIFIED: The Filter String output is correct: " + outputFilterString)
                } else {
                    self
                        .verify.not.containsText("@resultFilterString", data.nameOutput, 
                            "BUG: The Filter String output is incorrect: " + outputFilterString)
                }

            })
            .clearValue("@inputFilterString")
        return this
    },
    palindrome: function (data) {
        var self = this
        this
            .setValue("@inputPalindrome", data.input)
            .click("@buttonPalindrome")

            .getText("@resultPalindrome", function (result) {
                var outputPalindrome = result.value

                if (outputPalindrome === data.booleanOutput) {
                    self
                        .verify.containsText("@resultPalindrome", data.booleanOutput, 
                            "VERIFIED: The Palindrome output is correct: " + outputPalindrome)
                } else {
                    self
                        .verify.not.containsText("@resultPalindrome", data.booleanOutput, 
                            "BUG: The Palindrome output is incorrect: " + outputPalindrome)
                }

            })
            .clearValue("@inputPalindrome")
        return this
    },
    sum: function (data) {
        var self = this
        this
            .setValue("@inputSumOne", data.inputOne)
            .setValue("@inputSumTwo", data.inputTwo)
            .click("@buttonSum")

            .getText("@resultSum", function (result) {
                var outputSum = result.value

                if (outputSum === data.result) {
                    self
                        .verify.containsText("@resultSum", data.result, 
                            "VERIFIED: The Sum output is correct: " + outputSum)
                } else {
                    self
                        .verify.not.containsText("@resultSum", data.result, 
                            "BUG: The Sum output is incorrect: " + outputSum)
                }

            })
            .clearValue("@inputSumOne")
            .clearValue("@inputSumTwo")
        return this
    }
}

module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    commands: [checkpoint2Commands],
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