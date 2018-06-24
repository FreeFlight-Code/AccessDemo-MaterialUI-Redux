INSERT INTO persons
(user_name, email, phone, img, auth_id, auth)
VALUES
( $1, $2, $3, $4, $5, 'administrator')
RETURNING *;