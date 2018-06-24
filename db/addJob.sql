INSERT INTO jobs (
estimator_id,
date,
estimate_amount,
company_id,
city
)
VALUES
( $1, $2, $3, $4, $5)
RETURNING *;
