
var autoBasic = {}

module.exports = {
    beforeEach: browser => {
        autoBasic = browser.page.automationBasicsPage()
        autoBasic.navigate()
    },
    after: browser => {
        autoBasic.end()
    },

    'Test 1 - Enter And Submit Valid Data From The "Evens and Odds" Field': browser => {
        autoBasic   
            .setValue("@inputEvensOdds", '0')
            .click("@buttonEvensOdds")
            .verify.containsText("@resultEven", "[0]")
            .verify.containsText("@resultOdd", "[]")
            .clearValue("@inputEvensOdds")

            .setValue("@inputEvensOdds", '1')
            .click("@buttonEvensOdds")
            .verify.containsText("@resultEven", "[]")
            .verify.containsText("@resultOdd", "[1]")
            .clearValue("@inputEvensOdds")

            .setValue("@inputEvensOdds", '2')
            .click("@buttonEvensOdds")
            .verify.containsText("@resultEven", "[2]")
            .clearValue("@inputEvensOdds")
            
            .setValue("@inputEvensOdds", '3')
            .click("@buttonEvensOdds")
            .verify.containsText("@resultEven", "[]")
            .verify.containsText("@resultOdd", "[3]")
            .clearValue("@inputEvensOdds")

            .setValue("@inputEvensOdds", '4')
            .click("@buttonEvensOdds")
            .verify.containsText("@resultEven", "[4]")
            .verify.containsText("@resultOdd", "[]")
            .clearValue("@inputEvensOdds")

            .setValue("@inputEvensOdds", '5')
            .click("@buttonEvensOdds")
            .verify.containsText("@resultEven", "[]")
            .verify.containsText("@resultOdd", "[5]")
            .clearValue("@inputEvensOdds")

            .pause(3000)

    },

    'Test 2 - Enter And Submit Valid Data From The "Filter Object" Field': browser => {
        autoBasic
            .setValue("@inputFilterObject", 'name')
            .click("@buttonFilterObject")
            .verify.containsText("@resultFilterObject", '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]')
            .clearValue("@inputFilterObject")

            .setValue("@inputFilterObject", 'title')
            .click("@buttonFilterObject")
            .verify.containsText("@resultFilterObject", '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]')
            .clearValue("@inputFilterObject")

            .setValue("@inputFilterObject", 'age')
            .click("@buttonFilterObject")
            .verify.containsText("@resultFilterObject", '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
            .clearValue("@inputFilterObject")

            .setValue("@inputFilterObject", 'hairColor')
            .click("@buttonFilterObject")
            .verify.containsText("@resultFilterObject", '[ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
            .clearValue("@inputFilterObject")

            .pause(3000)

    },

    'Test 3 - Enter And Submit Valid Data From The "Filter String" Field': browser => {
        autoBasic
            .setValue("@inputFilterString", 'James')
            .click("@buttonFilterString")
            .verify.containsText("@resultFilterString", "James")
            .clearValue("@inputFilterString")

            .setValue("@inputFilterString", 'Jessica')
            .click("@buttonFilterString")
            .verify.containsText("@resultFilterString", "Jessica")
            .clearValue("@inputFilterString")

            .setValue("@inputFilterString", 'Melody')
            .click("@buttonFilterString")
            .verify.containsText("@resultFilterString", "Melody")
            .clearValue("@inputFilterString")
            
            .setValue("@inputFilterString", 'Tyler')
            .click("@buttonFilterString")
            .verify.containsText("@resultFilterString", "Tyler")
            .clearValue("@inputFilterString")
            
            .setValue("@inputFilterString", 'Blake')
            .click("@buttonFilterString")
            .verify.containsText("@resultFilterString", "Blake")
            .clearValue("@inputFilterString")
            
            .setValue("@inputFilterString", 'Jennifer')
            .click("@buttonFilterString")
            .verify.containsText("@resultFilterString", "Jennifer")
            .clearValue("@inputFilterString")
            
            .setValue("@inputFilterString", 'Mark')
            .click("@buttonFilterString")
            .verify.containsText("@resultFilterString", "Mark")
            .clearValue("@inputFilterString")
                        
            .setValue("@inputFilterString", 'Maddy')
            .click("@buttonFilterString")
            .verify.containsText("@resultFilterString", "Maddy")
            .clearValue("@inputFilterString")

            .pause(3000)

    },

    'Test 4 -  Enter And Submit Valid Data From The "Palindrome" Field': browser => {
        autoBasic
            .setValue("@inputPalindrome", 'racecar')
            .click("@buttonPalindrome")
            .verify.containsText("@resultPalindrome", "true")
            .clearValue("@inputPalindrome")

            .setValue("@inputPalindrome", '!@!')
            .click("@buttonPalindrome")
            .verify.containsText("@resultPalindrome", "true")
            .clearValue("@inputPalindrome")

            .setValue("@inputPalindrome", '123454321')
            .click("@buttonPalindrome")
            .verify.containsText("@resultPalindrome", "true")
            .clearValue("@inputPalindrome")

            .pause(3000)

    },

    'Test 5 - Enter And Submit Invalid Data From The "Palindrome" Field': browser => {
        autoBasic
            .setValue("@inputPalindrome", 'blah')
            .click("@buttonPalindrome")
            .verify.containsText("@resultPalindrome", "false")
            .clearValue("@inputPalindrome")

            //Doesn't understand capital letters            
            .setValue("@inputPalindrome", 'Able was I ere I saw Elba') 
            .click("@buttonPalindrome")
            .verify.containsText("@resultPalindrome", "false")
            .clearValue("@inputPalindrome")

            //Doesn't understand spaces            
            .setValue("@inputPalindrome", 'murder for a jar of red rum') 
            .click("@buttonPalindrome")
            .verify.containsText("@resultPalindrome", "false")
            .clearValue("@inputPalindrome")

            .pause(3000)

    },

    'Test 6 - Enter And Submit Valid Data From The "Sum" Field': browser => {
        autoBasic
            .setValue("@inputSumOne", '1')
            .setValue("@inputSumTwo", '2')
            .click("@buttonSum")
            .verify.containsText("@resultSum", "3")
            .clearValue("@inputSumOne")
            .clearValue("@inputSumTwo")

            .setValue("@inputSumOne", '10')
            .setValue("@inputSumTwo", '20')
            .click("@buttonSum")
            .verify.containsText("@resultSum", "30")
            .clearValue("@inputSumOne")
            .clearValue("@inputSumTwo")

            .setValue("@inputSumOne", '100')
            .setValue("@inputSumTwo", '200')
            .click("@buttonSum")
            .verify.containsText("@resultSum", "300")
            .clearValue("@inputSumOne")
            .clearValue("@inputSumTwo")

            .pause(3000)

    }
}