# Store Api
new simple api coded along freecodecamp toturial ..
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)



## Installation

To install this project, follow these steps:

1. Clone the repo.
2. run npm install 
3. copy yout mongoose database link to .env file and specify port 
4. run npm start 
5. enjoy my art <3

## Usage

Here's how you can use this project:

Visit localhost:3000/products to see all available products .
add the following queries to filter your result the way you want :
1. name(STRING) : search by name .
2. featured(BOOLEAN) : get featured content.
3. company(STRING) : get products from your favorite company of choice (from <a name="ourSupportedList">ourSupportedList</a> tho)
4. sort(comma seprated values) : sort content alphapetically or by date , price or rating , just send the value you prefer.
5. fields(comma seprated values) : choose the fields you want in the response json object.
6. numericFilters(exp: price>40) : filters by a certain range for price or rating .
   





##  ourSupportedList
[ikea', 'liddy', 'caressa', 'marcos']



