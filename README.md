A simple app, that inputs a number say N, and returns the N most frequently used words in a file (stored at backend).

Server Side:
-It is made on Node.js runtime environment and have make use of express frame-work for ease.
-A api is set in it that takes in the input N in the get request and returns the N most used words in the file.
-No out of the box libraries has been used, just the required ones - express, body-parser, fs(for reading file), path.

Client Side:
-It is made on Angular (latest version 5.2.0).
-It takes in a single integer input (won't return anything if the input is not an integer), and on pressing the submit button or Enter,  it makes a get request to the api at backend.
-Api returns the data which is then shown at the client side in the tabular form.
