### dynamodb-unmarshal-cli

A tiny tool using [dynamodb-marshaler](https://www.npmjs.com/package/dynamodb-marshaler) to allow you to pipe the output from [aws dynamodb cli](http://docs.aws.amazon.com/cli/latest/reference/dynamodb/index.html#cli-aws-dynamodb) through an unmarshaler to get simpler output.


#### Installation

```
npm install -g dynamodb-unmarshal-cli
```

#### Usage

```
aws dynamodb scan --table-name [your table name] | unmarshal
```

#### Supported command outputs

The tool currently only works for the output of the following commands:

- [batch-get-item](http://docs.aws.amazon.com/cli/latest/reference/dynamodb/batch-get-item.html)
- [get-item](http://docs.aws.amazon.com/cli/latest/reference/dynamodb/get-item.html)
- [query](http://docs.aws.amazon.com/cli/latest/reference/dynamodb/query.html)
- [scan](http://docs.aws.amazon.com/cli/latest/reference/dynamodb/scan.html)