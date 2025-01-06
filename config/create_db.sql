-- This script creates a PostgreSQL database named 'url_shorten_db' and a table named 'urls'.
-- 
-- The 'urls' table has the following columns:
-- - id: A unique identifier for each URL entry, automatically incremented (SERIAL PRIMARY KEY).
-- - url_code: A unique code associated with the URL (VARCHAR(255) NOT NULL UNIQUE).
-- - long_url: The original long URL (TEXT NOT NULL).
-- - short_url: The shortened version of the URL (TEXT NOT NULL UNIQUE).
-- - timestamp: The time when the URL entry was created, with a default value of the current timestamp (TIMESTAMP DEFAULT CURRENT_TIMESTAMP).

CREATE DATABASE url_shorten_db;

\c url_shorten_db;

CREATE TABLE urls (
    id SERIAL PRIMARY KEY,
    url_code VARCHAR(255) NOT NULL UNIQUE,
    long_url TEXT NOT NULL,
    short_url TEXT NOT NULL UNIQUE,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
