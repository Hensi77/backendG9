// Microsoft Windows [Version 10.0.22631.4112]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\HP>mongosh
// Current Mongosh Log ID: 66d1456ee596babe3e2710bb
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/


// To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
// You can opt-out by running the disableTelemetry() command.

// ------
//    The server generated these startup warnings when booting
//    2024-08-30T09:34:43.443+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> db.col.countDocuments();
// 0
// test> db.createcollection("user")
// TypeError: db.createcollection is not a function
// test> db.createCollection("user")
// { ok: 1 }
// test> use chitkara
// switched to db chitkara
// chitkara> use chitkara
// already on db chitkara
// chitkara> db.createCollection("user")
// { ok: 1 }
// chitkara> db.user.insertOne({name:"hensi", age:20})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d146ade596babe3e2710bc')
// }
// chitkara> db.createCollection("student")
// { ok: 1 }
// chitkara> db.user.insertOne({name:"Tanya", age:20, subject:"Maths", marks:90})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d14a06e596babe3e2710bd')
// }
// chitkara> db.createCollection("faculty")
// { ok: 1 }
// chitkara> db.user.insertOne({name:"Tanisha", age:20, subject:"Maths", marks:80})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d14a66e596babe3e2710be')
// }
// chitkara> db.createCollection("staff")
// { ok: 1 }
// chitkara> db.user.insertOne({name:"Gurleen", age:20, subject:"Maths", marks:75})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d14a8ae596babe3e2710bf')
// }
// chitkara> db.createCollection("Class")
// { ok: 1 }
// chitkara> db.user.insertOne({name:"Diksha", age:20, subject:"Maths", marks:92})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d14ac0e596babe3e2710c0')
// }
// chitkara> db.student.inserMany([{name:"Tanya", age:20, subject:"Maths", marks:90},{name:"Tanisha", age:20, subject:"Maths", marks:80},{name:"Gurleen", age:20, subject:"Maths", marks:75},{name:"Diksha", age:20, subject:"Maths", marks:92},   {name:"Hensi", age:20, subject:"Maths", marks:78}])
// TypeError: db.student.inserMany is not a function
// chitkara> db.student.insertMany([{name:"Tanya", age:20, subject:"Maths", marks:90},{name:"Tanisha", age:20, subject:"Maths", marks:80},{name:"Gurleen", age:20, subject:"Maths", marks:75},{name:"Diksha", age:20, subject:"Maths", marks:92},   {name:"Hensi", age:20, subject:"Maths", marks:78}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d14c14e596babe3e2710c1'),
//     '1': ObjectId('66d14c14e596babe3e2710c2'),
//     '2': ObjectId('66d14c14e596babe3e2710c3'),
//     '3': ObjectId('66d14c14e596babe3e2710c4'),
//     '4': ObjectId('66d14c14e596babe3e2710c5')
//   }
// }
// chitkara> db.student.updateMany({}, { $set:{subject:"DataScience", address:"Chitkara University"} } )
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 5,
//   modifiedCount: 5,
//   upsertedCount: 0
// }
// chitkara> db.student.insertMany([{name:"Teesta", age:20, subject:"English", rating:10},{name:"Mushkan", age:20, subject:"English", Rating:8},{name:"Kajal", age:21, subject:"English", rating:7},{name:"Janvi", age:21, subject:"English", rating:9},   {name:"Riya", age:19, subject:"English", rating:8}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d14da2e596babe3e2710c6'),
//     '1': ObjectId('66d14da2e596babe3e2710c7'),
//     '2': ObjectId('66d14da2e596babe3e2710c8'),
//     '3': ObjectId('66d14da2e596babe3e2710c9'),
//     '4': ObjectId('66d14da2e596babe3e2710ca')
//   }
// }
// chitkara> db.faculty.insertMany([{name:"Teesta", age:20, subject:"English", rating:10},{name:"Mushkan", age:20, subject:"English", Rating:8},{name:"Kajal", age:21, subject:"English", rating:7},{name:"Janvi", age:21, subject:"English", rating:9},   {name:"Riya", age:19, subject:"English", rating:8}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66d14dbee596babe3e2710cb'),
//     '1': ObjectId('66d14dbee596babe3e2710cc'),
//     '2': ObjectId('66d14dbee596babe3e2710cd'),
//     '3': ObjectId('66d14dbee596babe3e2710ce'),
//     '4': ObjectId('66d14dbee596babe3e2710cf')
//   }
// }
// chitkara> db.student.bulkWrite([ {db.student.bulkWrite([{
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:26)

// > 1 | db.student.bulkWrite([ {db.student.bulkWrite([{
//     |                           ^
//   2 |

// chitkara>     updateOne: {
// ...       filter: { name: "Alice" },
// Uncaught:
// SyntaxError: Unexpected token (2:31)

//   1 |     updateOne: {
// > 2 |       filter: { name: "Alice" },
//     |                                ^
//   3 |

// chitkara>       update: { $set: { grade: "A+" } }
// A+
// chitkara>     }
// Uncaught:
// SyntaxError: Unexpected token (1:4)

// > 1 |     }
//     |     ^
//   2 |

// chitkara>   },
// Uncaught:
// SyntaxError: Unexpected token (1:2)

// > 1 |   },
//     |   ^
//   2 |

// chitkara>   {
// ...     updateOne: {
// ...       filter: { name: "Bob" },
// ...       update: { $set: { grade: "A" } }
// ...     }
// ...   },
// ...   {
// ...     updateOne: {
// ...       filter: { name: "Charlie" },
// ...       update: { $set: { grade: "B+" } }
// ...     }
// ...   },
// ...   {
// ...     updateOne: {
// ...       filter: { name: "David" },
// ...       update: { $set: { grade: "A" } }
// ...     }
// ...   },
// ...   {
// ...     updateOne: {
// ...
// ...
// ...
// ...
// ...
// chitkara> db.student.bulkWrite([{
// ... updateOne:{
// ... filter: {name:"Tanya"}
// ... update:{$set: {grade:"A+"}}
// Uncaught:
// SyntaxError: Unexpected token, expected "," (4:0)

//   2 | updateOne:{
//   3 | filter: {name:"Tanya"}
// > 4 | update:{$set: {grade:"A+"}}
//     | ^
//   5 |

// chitkara> db.student.bulkWrite([{ updateOne:{ filter: {name:"Tanya"} update:{$set: {grade:"A+"}}}}, {updateOne:{ filter: {name:"Tanisha"} update:{$set: {grade:"A"}}}},{updateOne:{ filter: {name:"Gurleen"} update:{$set: {grade:"B+"}}}},{updateOne:{ filter: {name:"Diksha"} update:{$set: {grade:"B"}}}},{updateOne:{ filter: {name:"Hensi"} update:{$set: {grade:"C"}}}} ])
// Uncaught:
// SyntaxError: Unexpected token, expected "," (1:59)

// > 1 | db.student.bulkWrite([{ updateOne:{ filter: {name:"Tanya"} update:{$set: {grade:"A+"}}}}, {updateOne:{ filter: {name:"Tanisha"} update:{$set: {grade:"A"}}}},{updateOne:{ filter: {name:"Gurleen"} update:{$set: {grade:"B+"}}}},{updateOne:{ filter: {name:"Diksha"} update:{$set: {grade:"B"}}}},{updateOne:{ filter: {name:"Hensi"} update:{$set: {grade:"C"}}}} ])
//     |                                                            ^
//   2 |

// chitkara> db.student.bulkWrite([
// ...   { updateOne: { filter: { name: "Tanya" }, update: { $set: { grade: "A+" } } } },
// ...   { updateOne: { filter: { name: "Tanisha" }, update: { $set: { grade: "A" } } } },
// ...   { updateOne: { filter: { name: "Gurleen" }, update: { $set: { grade: "B+" } } } },
// ...   { updateOne: { filter: { name: "Diksha" }, update: { $set: { grade: "B" } } } },
// ...   { updateOne: { filter: { name: "Hensi" }, update: { $set: { grade: "C" } } } }
// ... ])
// {
//   acknowledged: true,
//   insertedCount: 0,
//   insertedIds: {},
//   matchedCount: 5,
//   modifiedCount: 5,
//   deletedCount: 0,
//   upsertedCount: 0,
//   upsertedIds: {}
// }
// chitkara> db.student.find({age:20, marks:80})
// [
//   {
//     _id: ObjectId('66d14c14e596babe3e2710c2'),
//     name: 'Tanisha',
//     age: 20,
//     subject: 'DataScience',
//     marks: 80,
//     address: 'Chitkara University',
//     grade: 'A'
//   }
// ]
// chitkara> db.student.find({marks:{$gte:75},age:{$gte:18}})
// [
//   {
//     _id: ObjectId('66d14c14e596babe3e2710c1'),
//     name: 'Tanya',
//     age: 20,
//     subject: 'DataScience',
//     marks: 90,
//     address: 'Chitkara University',
//     grade: 'A+'
//   },
//   {
//     _id: ObjectId('66d14c14e596babe3e2710c2'),
//     name: 'Tanisha',
//     age: 20,
//     subject: 'DataScience',
//     marks: 80,
//     address: 'Chitkara University',
//     grade: 'A'
//   },
//   {
//     _id: ObjectId('66d14c14e596babe3e2710c3'),
//     name: 'Gurleen',
//     age: 20,
//     subject: 'DataScience',
//     marks: 75,
//     address: 'Chitkara University',
//     grade: 'B+'
//   },
//   {
//     _id: ObjectId('66d14c14e596babe3e2710c4'),
//     name: 'Diksha',
//     age: 20,
//     subject: 'DataScience',
//     marks: 92,
//     address: 'Chitkara University',
//     grade: 'B'
//   },
//   {
//     _id: ObjectId('66d14c14e596babe3e2710c5'),
//     name: 'Hensi',
//     age: 20,
//     subject: 'DataScience',
//     marks: 78,
//     address: 'Chitkara University',
//     grade: 'C'
//   }
// ]
// chitkara> db.student.find({grade:"A+"})
// [
//   {
//     _id: ObjectId('66d14c14e596babe3e2710c1'),
//     name: 'Tanya',
//     age: 20,
//     subject: 'DataScience',
//     marks: 90,
//     address: 'Chitkara University',
//     grade: 'A+'
//   }
// ]
// chitkara>