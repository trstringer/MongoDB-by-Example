# Learn MongoDB by Examples

*Learn MongoDB  through examples*

#### General tasks
- [create test data](/test-data/test-data.js) for the purpose of running these examples
- [set database context](#set-database-context)

#### Read data
- [read entire collection](#read-entire-collection)
- [read certain fields from the collection](#read-certain-fields-from-the-collection)

#### Update data
- [update documents with search predicate](#update-documents-with-search-predicate)

## Set database context

#### MongoDB (shell)

```javascript
use yourDatabase;
```

## Read entire collection

#### MongoDB (shell)

```javascript
db.myCollection.find();

// or for prettified output
db.myCollection.find().pretty();
```

## Read certain fields from the collection

#### MongoDB (shell)

```javascript
db.myCollection.find({}, { firstName: 1, lastName: 1 }); // .pretty()

// and to NOT select the default _id field
db.myCollection.find({}, { _id: 0, firstName: 1, lastName: 1 }); // .pretty()
```

## Update documents with search predicate

#### MongoDB (shell)

```javascript
db.myCollection.update(
    { lastName: 'Stringer' }, 
    { 
        $set: { 
            firstName: 'Thomas' 
        } 
    }
);
```