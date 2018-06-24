UPDATE jobs
SET 
estimator_id = $2,
date = $3,
estimate_amount = $4,
company_id = $5,
city = $6
WHERE id = $1;
