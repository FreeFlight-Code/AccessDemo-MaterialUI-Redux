SELECT jobs.id, jobs.date, jobs.estimate_amount, jobs.city, persons.user_name, companies.name

FROM jobs 

INNER JOIN persons on jobs.estimator_id = persons.id
INNER JOIN companies on jobs.company_id = companies.id