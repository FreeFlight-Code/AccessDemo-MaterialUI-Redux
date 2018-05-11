
-- three types of users admin, estimator, contact
CREATE TABLE IF NOT EXISTS persons (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180) NOT NULL,
    email VARCHAR(180) UNIQUE,
    phone VARCHAR(180),
    img TEXT,
    auth_id TEXT,
    auth VARCHAR(25) DEFAULT 'contact'
);

CREATE TABLE IF NOT EXISTS companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255),
    url VARCHAR(255),
    logo VARCHAR(255),
    contact_id INT,
    CONSTRAINT fk_companies_contactid FOREIGN KEY (contact_id) REFERENCES persons(id)
);

CREATE TABLE IF NOT EXISTS jobs (
    id SERIAL PRIMARY KEY,
    estimator_id INT,
    date date DEFAULT CURRENT_DATE,
    estimate_amount INT NOT NULL,
    company_id INT,
    city VARCHAR(25),
    CONSTRAINT fk_jobs_companyid FOREIGN KEY (company_id) REFERENCES companies(id),
    CONSTRAINT fk_jobs_estimatorid FOREIGN KEY (estimator_id) REFERENCES persons(id)
);

