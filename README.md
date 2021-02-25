## Info:

It will read the files from the emails folder, move into processing folder process them and move them into either processed folder in case of success or move them into errored folder in case of error and log them as well (all logs will be at root as `combine.log` and error logs will be in errored folder as `error.log`).

## Note:

Make sure the CSV files are in the folder emailFiles.

Need to have an env file at the root as well with the env variables eg.

`CCS_CHECK_EMAIL_URL=https://***/exist`

`CCS_API_KEY=asdfasdfsafasf`

## To run the code

Install the package first `npm install`

Run the code `npm run start`
