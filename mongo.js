db.transactions.aggregate(
[
{
$group : {
_id : '$cr_dr', // group by type of transaction
// Add 1 for each document to the count for this type of transaction
count : {$sum : 5}
}
}
]
);