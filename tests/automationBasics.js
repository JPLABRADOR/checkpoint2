var autoBasics = {}
var validEvensOddsFieldData = require('../testAssets/validEvensOddsArray')
var invalidEvensOddsFieldData = require('../testAssets/invalidEvensOddsArray')
var validFilterObjectFieldData = require('../testAssets/validFilterObjectArray')
var invalidFilterObjectFieldData = require('../testAssets/invalidFilterObjectArray')
var validFilterStringFieldData = require('../testAssets/validFilterStringArray')
var invalidFilterStringFieldData = require('../testAssets/invalidFilterStringArray')
var validPalindromeFieldData = require('../testAssets/validPalindromeArray')
var invalidPalindromeFieldData = require('../testAssets/invalidPalindromeArray')
var validSumFieldData = require('../testAssets/validSumArray')
var invalidSumFieldData = require('../testAssets/invalidSumArray')

module.exports = {
    beforeEach: browser => {
        autoBasics = browser.page.automationBasicsPage()
        autoBasics
            .maximizeWindow()
            .navigate()
    },
    after: browser => {
        autoBasics.end()
    },
    'Test 1 - Enter And Submit Valid Data From The "Evens and Odds" Field': browser => {
        validEvensOddsFieldData.forEach(test => {
            autoBasics.evensAndOdds(test)
        })
    },
    'Test 2 - Enter And Submit Invalid Data From The "Evens and Odds" Field': browser => {
        invalidEvensOddsFieldData.forEach(test => {
            autoBasics.evensAndOdds(test)
        })
    },
    'Test 3 - Enter And Submit Valid Data From The "Filter Object" Field': browser => {
        validFilterObjectFieldData.forEach(test => {
            autoBasics.filterObject(test)
        })
    },
    'Test 4 - Enter And Submit Invalid Data From The "Filter Object" Field': browser => {
        invalidFilterObjectFieldData.forEach(test => {
            autoBasics.filterObject(test)
        })
    },
    'Test 5 - Enter And Submit Valid Data From The "Filter String" Field': browser => {
        validFilterStringFieldData.forEach(test => {
            autoBasics.filterString(test)
        })
    },
    'Test 6 - Enter And Submit Invalid Data From The "Filter String" Field': browser => {
        invalidFilterStringFieldData.forEach(test => {
            autoBasics.filterString(test)
        })
    },
    'Test 7 -  Enter And Submit Valid Data From The "Palindrome" Field': browser => {
        validPalindromeFieldData.forEach(test => {
            autoBasics.palindrome(test)
        })
    },
    'Test 8 - Enter And Submit Invalid Data From The "Palindrome" Field': browser => {
        invalidPalindromeFieldData.forEach(test => {
            autoBasics.palindrome(test)
        })
    },
    'Test 9 - Enter And Submit Valid Data From The "Sum" Field': browser => {
        validSumFieldData.forEach(test => {
            autoBasics.sum(test)
        })
    },
    'Test 10 - Enter And Submit Invalid Data From The "Sum" Field': browser => {
        invalidSumFieldData.forEach(test => {
            autoBasics.sum(test)
        })
    }
}