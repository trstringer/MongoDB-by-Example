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
use YourDatabase
```

## Read entire table/collection


#### SQL Server

```sql
SELECT *
FROM MyTable;
```

#### MongoDB (shell)

```javascript
db.MyCollection.find();

// or for prettified output
db.MyCollection.find().pretty();
```