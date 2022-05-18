# IdleLands Global Backend Server

A server for IdleLands/Global.

## Setup

Set `MONGODB_URI` in a `.env` file.

For example if you are running a local IdleLands database:
```
MONGODB_URI=mongodb://admin-user:admin-password@127.0.0.1:27017/admin?retryWrites=true&w=majority
```

## Testing
Install depencies by `npm install` and then run the server after starting the mongodb database by `npm start`.
