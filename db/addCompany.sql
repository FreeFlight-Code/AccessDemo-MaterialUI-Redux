INSERT INTO companies
(name,
phone,
address,
url,
logo,
contact_id)
VALUES
( $1, $2, $3, $4, $5, $6)
RETURNING *;
