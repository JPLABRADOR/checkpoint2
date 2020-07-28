module.exports = [
    {
        input: 'blah',
        booleanOutput: 'Palindrome: false'
    },
    {
        //Doesn't understand capital letters 
        input: 'Able was I ere I saw Elba',
        booleanOutput: 'Palindrome: false'
    },
    {
        //Doesn't understand spaces  
        input: 'murder for a jar of red rum',  
        booleanOutput: 'Palindrome: false'
    }
]