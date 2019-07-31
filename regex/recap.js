let regex;
//SINGLE REGEX PATTERN
regex = /wizard/; //match a specific string

//FLAGS
regex = /wizard/i; //match a specific string case insensitive
regex = /wizard/g; //match a specific string globally
regex = /wizard/gi; //match a specific string globally and case insensitive

//CHARACTER SETS AND NEGATIVE CHARACTER SETS
regex = /[abc]/; //match a specific characters set
regex = /[^abc]/; //not match a specific characters set

//RANGE OF CHARACTERS AND NEGATIVE RANGE OF CHARACTERS
regex = /[a-z]/; //match a range of characters
regex = /[^a-z]/; //not match a range of characters

//QUANTIFIERS
regex = /[0-9]+/; //match a range of characters for one or unlimited times
regex = /[0-9]{2}/; //match a range of characters exactly 2 times
regex = /[0-9]{2, 3}/; //match a range of characters from 2 to 3 times
regex = /[0-9]{2, }/; //match a range of characters from 2 to unlimited times

//METACHARACTERS
regex = /\d/; // matches any digit
regex = /\D/; // matches any non-digit
regex = /\w/; // matches any word character, underscore included (a-z, A-Z, 0-9, _)
regex = /\W/; // matches any non-word character
regex = /\s/; // matches any white space character (\r (carriage return),\n (new line), \t (tab), \f (form feed))
regex = /\S/; // matches any non-white space character
regex = /\t/; // matches any tab
