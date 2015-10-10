# MongoDB for the SQL Server person

*Learn MongoDB and transfer your SQL Server knowledge through examples*

## Set database context

#### SQL Server

```sql
use YourDatabase;
go
```

#### MongoDB (shell)

```javascript
use yourDatabase;
```

## Read entire table/collection

#### SQL Server

```sql
SELECT *
FROM MyTable;
```

#### MongoDB (shell)

```javascript
db.myCollection.find();

// or for prettified output
db.myCollection.find().pretty();
```

## Read certain columns/fields from the table/collection

#### SQL Server

```sql
SELECT FirstName, LastName
FROM MyTable;
```

#### MongoDB (shell)

```javascript
db.myCollection.find({}, {firstName: 1, lastName: 1}); // .pretty()

// and to NOT select the default _id field
db.myCollection.find({}, {_id: -1, firstName: 1, lastName: 1}); // .pretty()
```