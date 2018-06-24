UPDATE companies
SET 
name = $2,
phone = $3,
address = $4,
url = $5,
logo = $6,
contact_id = $7
WHERE id = $1;
