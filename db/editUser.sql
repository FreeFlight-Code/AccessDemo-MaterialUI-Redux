-- UPDATE table_name
-- SET column1 = value1, column2 = value2, ...
-- WHERE condition; 

UPDATE persons
SET 
user_name = $2,
email = $3,
phone = $4,
img = $5,
auth_id = $6,
auth = $7
WHERE id = $1;
