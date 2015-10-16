/*
in order to run this script just use the mongo shell and 
pass the javascript file to it on the command line:

mongo test-data.js
*/

var mongo = new Mongo();
var db = mongo.getDB('myDatabase');

print('deleting all documents from myCollection...');
db.myCollection.remove({});

var documents = [
    {
        firstName: 'Thomas',
        lastName: 'Stringer',
        age: 29,
        gender: 'male',
        address: {
            street: '123 Anywhere St.',
            city: 'Newark',
            state: 'NJ'
        }
    },
    {
        firstName: 'Alexis',
        lastName: '	Andrews',
        age: 25,
        gender: 'female',
        address: {
            street: '456 Good Rd.',
            city: 'Redmond',
            state: 'WA'
        }
    },
    {
        firstName: 'Hazel',
        lastName: 'Flores',
        age: 34,
        gender: 'female',
        address: {
            street: '8 Main St.',
            city: 'Seattle',
            state: 'WA'
        }
    },
    {
        firstName: 'Steven',
        lastName: 'Wong',
        age: 41,
        gender: 'male',
        address: {
            street: '86 Here Ln.',
            city: 'Atlanta',
            state: 'GA'
        }
    },
    {
        firstName: 'Bev',
        lastName: 'Dominguez',
        age: 37,
        gender: 'female',
        address: {
            street: '74 Here St.',
            city: 'Toms River',
            state: 'NJ'
        }
    }
];

print('inserting data...');
db.myCollection.insert(documents);
print('completed inserting data...');