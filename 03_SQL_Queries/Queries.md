# 50 SQL Queries - Movies Database

## Basic Queries (Questions 1-10)

### 1. Write a SQL query to find the name and year of the movies. Return movie title, movie release year.

**Query:**
```sql
SELECT mov_title, mov_year 
FROM movie;
```

**Result:**
| mov_title               | mov_year |
|------------------------|----------|
| Vertigo                 | 1958     |
| The Innocents           | 1961     |
| Lawrence of Arabia      | 1962     |
| The Deer Hunter         | 1978     |
| Amadeus                 | 1984     |
| Blade Runner            | 1982     |
| Eyes Wide Shut          | 1999     |
| The Usual Suspects      | 1995     |
| Chinatown               | 1974     |
| Boogie Nights           | 1997     |
| Annie Hall              | 1977     |
| Princess Mononoke       | 1997     |
| The Shawshank Redemption| 1994     |
| American Beauty         | 1999     |
| Titanic                 | 1997     |
| Good Will Hunting       | 1997     |
| Deliverance             | 1972     |
| Trainspotting           | 1996     |
| The Prestige            | 2006     |
| Donnie Darko            | 2001     |
| Slumdog Millionaire     | 2008     |
| Aliens                  | 1986     |
| Beyond the Sea          | 2004     |
| Avatar                  | 2009     |
| Seven Samurai           | 1954     |
| Spirited Away           | 2001     |
| Back to the Future      | 1985     |
| Braveheart              | 1995     |

---

### 2. Write a SQL query to find when the movie 'American Beauty' released. Return movie release year.

**Query:**
```sql
SELECT mov_year 
FROM movie 
WHERE mov_title = 'American Beauty';
```

**Result:**
| mov_year |
|----------|
| 1999     |

---

### 3. Write a SQL query to find the movie that was released in 1999. Return movie title.

**Query:**
```sql
SELECT mov_title 
FROM movie 
WHERE mov_year = 1999;
```

**Result:**
| mov_title       |
|----------------|
| Eyes Wide Shut  |
| American Beauty |

---

### 4. Write a SQL query to find those movies, which were released before 1998. Return movie title.

**Query:**
```sql
SELECT mov_title 
FROM movie 
WHERE mov_year < 1998;
```

**Result:**
| mov_title                |
|--------------------------|
| Vertigo                  |
| The Innocents            |
| Lawrence of Arabia       |
| The Deer Hunter          |
| Amadeus                  |
| Blade Runner             |
| The Usual Suspects       |
| Chinatown                |
| Boogie Nights            |
| Annie Hall               |
| Princess Mononoke        |
| The Shawshank Redemption |
| Titanic                  |
| Good Will Hunting        |
| Deliverance              |
| Trainspotting            |
| Aliens                   |
| Seven Samurai            |
| Back to the Future       |
| Braveheart               |

---

### 5. Write a SQL query to find the name of all reviewers and movies together in a single list.

**Query:**
```sql
SELECT rev_name  
FROM movie_reviewer 
UNION 
SELECT mov_title 
FROM movie;
```

**Result:**
| name                     |
|--------------------------|
| Righty Sock              |
| Jack Malvern             |
| Flagrant Baronessa       |
| Alec Shaw                |
| Victor Woeltjen          |
| Simon Wright             |
| Neal Wruck               |
| Paul Monks               |
| Mike Salvati             |
| Wesley S. Walker         |
| Sasha Goldshtein         |
| Josh Cates               |
| Krug Stillo              |
| Scott LeBrun             |
| Hannah Steele            |
| Vincent Cadena           |
| Brandt Sponseller        |
| Richard Adams            |
| Vertigo                  |
| The Innocents            |
| Lawrence of Arabia       |
| The Deer Hunter          |
| Amadeus                  |
| Blade Runner             |
| Eyes Wide Shut           |
| The Usual Suspects       |
| Chinatown                |
| Boogie Nights            |
| Annie Hall               |
| Princess Mononoke        |
| The Shawshank Redemption |
| American Beauty          |
| Titanic                  |
| Good Will Hunting        |
| Deliverance              |
| Trainspotting            |
| The Prestige             |
| Donnie Darko             |
| Slumdog Millionaire      |
| Aliens                   |
| Beyond the Sea           |
| Avatar                   |
| Seven Samurai            |
| Spirited Away            |
| Back to the Future       |
| Braveheart               |

---

### 6. Write a SQL query to find all reviewers who have rated seven or more stars to their rating. Return reviewer name.

**Query:**
```sql
SELECT DISTINCT r.rev_name
FROM movie_reviewer r
JOIN movie_rating mr ON r.rev_id = mr.rev_id
WHERE mr.rev_stars >= 7;
```

**Result:**
| rev_name            |
|--------------------|
| Righty Sock         |
| Jack Malvern        |
| Flagrant Baronessa  |
| Victor Woeltjen     |
| Simon Wright        |
| Mike Salvati        |
| Sasha Goldshtein    |
| Krug Stillo         |
| Hannah Steele       |
| Vincent Cadena      |
| Brandt Sponseller   |

---

### 7. Write a SQL query to find the movies without any rating. Return movie title.

**Query:**
```sql
SELECT mov_title 
FROM movie 
WHERE mov_id NOT IN (SELECT mov_id FROM movie_rating);
```

**Result:**
| mov_title                |
|--------------------------|
| The Deer Hunter          |
| Amadeus                  |
| Eyes Wide Shut           |
| The Shawshank Redemption |
| Deliverance              |
| The Prestige             |
| Spirited Away            |
| Back to the Future       |
| Braveheart               |

---

### 8. Write a SQL query to find the movies with ID 905 or 907 or 917. Return movie title.

**Query:**
```sql
SELECT mov_title 
FROM movie 
WHERE mov_id IN (905, 907, 917);
```

**Result:**
| mov_title |
|-----------|
| NULL      |

---

### 9. Write a SQL query to find the movie titles that contain the word 'Boogie Nights'. Sort the result-set in ascending order by movie year. Return movie ID, movie title and movie release year.

**Query:**
```sql
SELECT mov_id, mov_title, mov_year 
FROM movie 
WHERE mov_title LIKE '%Boogie Nights%'
ORDER BY mov_year ASC;
```

**Result:**
| mov_id | mov_title     | mov_year |
|--------|---------------|----------|
| 10     | Boogie Nights | 1997     |

---

### 10. Write a SQL query to find those actors with the first name 'Woody' and the last name 'Allen'. Return actor ID.

**Query:**
```sql
SELECT act_id 
FROM actor 
WHERE act_fname = 'Woody' 
AND act_lname = 'Allen';
```

**Result:**
| act_id |
|--------|
| 11     |

---

## Subqueries (Questions 11-26)

### 11. Write a SQL query to find the actors who played a role in the movie 'Annie Hall'. Return all the fields of actor table.

**Query:**
```sql
SELECT * 
FROM actor 
WHERE act_id IN (
    SELECT act_id 
    FROM movie_cast 
    WHERE mov_id = (
        SELECT mov_id 
        FROM movie 
        WHERE mov_title = 'Annie Hall'
    )
);
```

**Result:**
| act_id | act_fname | act_lname | act_gender |
|--------|-----------|-----------|------------|
| 11     | Woody     | Allen     | M          |

---

### 12. Write a SQL query to find the director of a film that cast a role in 'Eyes Wide Shut'. Return director first name, last name.

**Query:**
```sql
SELECT DISTINCT d.dir_fname, d.dir_lname 
FROM director d 
WHERE d.dir_id IN (
    SELECT md.dir_id 
    FROM movie_direction md 
    WHERE md.mov_id = (
        SELECT mov_id 
        FROM movie 
        WHERE mov_title = 'Eyes Wide Shut'
    )
);
```

**Result:**
| dir_fname | dir_lname |
|-----------|-----------|
| Stanley   | Kubrick   |

---

### 13. Write a SQL query to find those movies that have been released in countries other than the United Kingdom. Return movie title, movie year, movie time, and date of release, releasing country.

**Query:**
```sql
SELECT mov_title, mov_year, mov_time, mov_dt_rel, mov_rel_country 
FROM movie 
WHERE mov_rel_country != 'UK';
```

**Result:**
| mov_title     | mov_year | mov_time | mov_dt_rel | mov_rel_country |
|---------------|----------|----------|------------|-----------------|
| The Innocents | 1961     | 100      | 1962-02-19 | SW              |
| Annie Hall    | 1977     | 93       | 1977-04-20 | USA             |
| Seven Samurai | 1954     | 207      | 1954-04-26 | JP              |

---

### 14. Write a SQL query to find for movies whose reviewer is unknown. Return movie title, year, release date, director first name, last name, actor first name, last name.

**Query:**
```sql
SELECT m.mov_title, m.mov_year, m.mov_dt_rel,
       d.dir_fname, d.dir_lname,
       a.act_fname, a.act_lname
FROM movie m
JOIN movie_rating mr ON m.mov_id = mr.mov_id
JOIN movie_reviewer r ON mr.rev_id = r.rev_id
JOIN movie_direction md ON m.mov_id = md.mov_id
JOIN director d ON md.dir_id = d.dir_id
JOIN movie_cast mc ON m.mov_id = mc.mov_id
JOIN actor a ON mc.act_id = a.act_id
WHERE r.rev_name IS NULL;
```

**Result:**
| mov_title                | mov_year | mov_dt_rel | dir_fname | dir_lname | act_fname | act_lname |
|--------------------------|----------|------------|-----------|-----------|-----------|-----------|
| The Deer Hunter          | 1978     | 1979-03-08 | Michael   | Cimino    | Robert    | De Niro   |
| Amadeus                  | 1984     | 1985-01-07 | Milos     | Forman    | F. Murray | Abraham   |
| Eyes Wide Shut           | 1999     | NULL       | Stanley   | Kubrick   | Nicole    | Kidman    |
| The Shawshank Redemption | 1994     | 1995-02-17 | Frank     | Darabont  | Tim       | Robbins   |
| Deliverance              | 1972     | 1982-10-05 | John      | Boorman   | Jon       | Voight    |

---

### 15. Write a SQL query to find those movies directed by the director whose first name is Woody and last name is Allen. Return movie title.

**Query:**
```sql
SELECT m.mov_title
FROM movie m
JOIN movie_direction md ON m.mov_id = md.mov_id
JOIN director d ON md.dir_id = d.dir_id
WHERE d.dir_fname = 'Woody'
AND d.dir_lname = 'Allen';
```

**Result:**
| mov_title  |
|------------|
| Annie Hall |

---

### 16. Write a SQL query to determine those years in which there was at least one movie that received a rating of at least three stars. Sort the result-set in ascending order by movie year. Return movie year.

**Query:**
```sql
SELECT DISTINCT m.mov_year
FROM movie m
JOIN movie_rating mr ON m.mov_id = mr.mov_id
WHERE mr.rev_stars >= 3
ORDER BY m.mov_year;
```

**Result:**
| mov_year |
|----------|
| 1954     |
| 1958     |
| 1961     |
| 1962     |
| 1977     |
| 1982     |
| 1986     |
| 1995     |
| 1997     |
| 1999     |
| 2001     |
| 2004     |
| 2008     |
| 2009     |

---

### 17. Write a SQL query to search for movies that do not have any ratings. Return movie title.

**Query:**
```sql
SELECT mov_title
FROM movie
WHERE mov_id NOT IN (SELECT mov_id FROM movie_rating);
```

**Result:**
| mov_title                |
|--------------------------|
| The Deer Hunter          |
| Amadeus                  |
| Eyes Wide Shut           |
| The Shawshank Redemption |
| Deliverance              |
| The Prestige             |
| Spirited Away            |
| Back to the Future       |
| Braveheart               |

---

### 18. Write a SQL query to find those reviewers who have not given a rating to certain films. Return reviewer name.

**Query:**
```sql
SELECT rev_name
FROM movie_reviewer
WHERE rev_id NOT IN (SELECT rev_id FROM movie_rating);
```

**Result:**
| rev_name         |
|------------------|
| Alec Shaw        |
| Wesley S. Walker |

---

### 19. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Sort the result-set in ascending order by reviewer name, movie title, review stars. Return reviewer name, movie title, review stars.

**Query:**
```sql
SELECT r.rev_name, m.mov_title, mr.rev_stars
FROM movie_rating mr
JOIN movie_reviewer r ON mr.rev_id = r.rev_id
JOIN movie m ON mr.mov_id = m.mov_id
ORDER BY r.rev_name, m.mov_title, mr.rev_stars;
```

**Result:**
| rev_name           | mov_title           | rev_stars |
|--------------------|---------------------|-----------|
| NULL               | Blade Runner        | 8.2       |
| NULL               | Princess Mononoke   | 8.4       |
| Brandt Sponseller  | Aliens              | 8.4       |
| Flagrant Baronessa | Lawrence of Arabia  | 8.3       |
| Hannah Steele      | Donnie Darko        | 8.1       |
| Jack Malvern       | The Innocents       | 7.9       |
| Josh Cates         | Good Will Hunting   | 4.0       |
| Krug Stillo        | Seven Samurai       | 7.7       |
| Mike Salvati       | Annie Hall          | 8.1       |
| Neal Wruck         | Chinatown           | NULL      |
| Paul Monks         | Boogie Nights       | 3.0       |
| Richard Adams      | Beyond the Sea      | 6.7       |
| Righty Sock        | Titanic             | 7.7       |
| Righty Sock        | Vertigo             | 8.4       |
| Sasha Goldshtein   | American Beauty     | 7.0       |
| Scott LeBrun       | Trainspotting       | NULL      |
| Simon Wright       | The Usual Suspects  | 8.6       |
| Victor Woeltjen    | Avatar              | 7.3       |
| Vincent Cadena     | Slumdog Millionaire | 8.0       |

---

### 20. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Group the result set on reviewer's name, movie title. Return reviewer's name, movie title.

**Query:**
```sql
SELECT r.rev_name, m.mov_title
FROM movie_rating mr
JOIN movie_reviewer r ON mr.rev_id = r.rev_id
JOIN movie m ON mr.mov_id = m.mov_id
GROUP BY r.rev_name, m.mov_title;
```

**Result:**
| rev_name           | mov_title           |
|--------------------|---------------------|
| Righty Sock        | Vertigo             |
| Jack Malvern       | The Innocents       |
| Flagrant Baronessa | Lawrence of Arabia  |
| NULL               | Blade Runner        |
| Victor Woeltjen    | Avatar              |
| Simon Wright       | The Usual Suspects  |
| Neal Wruck         | Chinatown           |
| Paul Monks         | Boogie Nights       |
| Mike Salvati       | Annie Hall          |
| NULL               | Princess Mononoke   |
| Sasha Goldshtein   | American Beauty     |
| Righty Sock        | Titanic             |
| Josh Cates         | Good Will Hunting   |
| Krug Stillo        | Seven Samurai       |
| Scott LeBrun       | Trainspotting       |
| Hannah Steele      | Donnie Darko        |
| Vincent Cadena     | Slumdog Millionaire |
| Brandt Sponseller  | Aliens              |
| Richard Adams      | Beyond the Sea      |

---

### 21. Write a SQL query to find those movies, which have received highest number of stars. Group the result set on movie title and sorts the result-set in ascending order by movie title. Return movie title and maximum number of review stars.

**Query:**
```sql
SELECT m.mov_title, MAX(mr.rev_stars) AS max_stars
FROM movie m
JOIN movie_rating mr ON m.mov_id = mr.mov_id
GROUP BY m.mov_title
ORDER BY m.mov_title;
```

**Result:**
| mov_title           | max_stars |
|---------------------|-----------|
| Aliens              | 8.4       |
| American Beauty     | 7.0       |
| Annie Hall          | 8.1       |
| Avatar              | 7.3       |
| Beyond the Sea      | 6.7       |
| Blade Runner        | 8.2       |
| Boogie Nights       | 3.0       |
| Chinatown           | NULL      |
| Donnie Darko        | 8.1       |
| Good Will Hunting   | 4.0       |
| Lawrence of Arabia  | 8.3       |
| Princess Mononoke   | 8.4       |
| Seven Samurai       | 7.7       |
| Slumdog Millionaire | 8.0       |
| The Innocents       | 7.9       |
| The Usual Suspects  | 8.6       |
| Titanic             | 7.7       |
| Trainspotting       | NULL      |
| Vertigo             | 8.4       |

---

### 22. Write a SQL query to find all reviewers who rated the movie 'American Beauty'. Return reviewer name.

**Query:**
```sql
SELECT rev_name 
FROM movie_reviewer 
WHERE rev_id IN (
    SELECT rev_id 
    FROM movie_rating 
    WHERE mov_id = (
        SELECT mov_id 
        FROM movie 
        WHERE mov_title = 'American Beauty'
    )
);
```

---

### 23. Write a SQL query to find the movies that have not been reviewed by any reviewer body other than 'Paul Monks'. Return movie title.

**Query:**
```sql
SELECT mov_title 
FROM movie 
WHERE mov_id NOT IN (
    SELECT mov_id 
    FROM movie_rating 
    WHERE rev_id IN (
        SELECT rev_id 
        FROM movie_reviewer 
        WHERE rev_name <> 'Paul Monks'
    )
);
```

**Result:**
| mov_title                |
|--------------------------|
| The Deer Hunter          |
| Amadeus                  |
| Blade Runner             |
| Eyes Wide Shut           |
| Boogie Nights            |
| Princess Mononoke        |
| The Shawshank Redemption |
| Deliverance              |
| The Prestige             |
| Spirited Away            |
| Back to the Future       |
| Braveheart               |

---

### 24. Write a SQL query to find the movies with the lowest ratings. Return reviewer name, movie title, and number of stars for those movies.

**Query:**
```sql
SELECT r.rev_name, m.mov_title, mr.rev_stars
FROM movie_rating mr
JOIN movie_reviewer r ON mr.rev_id = r.rev_id
JOIN movie m ON mr.mov_id = m.mov_id
WHERE mr.rev_stars = (
    SELECT MIN(rev_stars) 
    FROM movie_rating 
    WHERE rev_stars IS NOT NULL
);
```

**Result:**
| rev_name   | mov_title     | rev_stars |
|------------|---------------|-----------|
| Paul Monks | Boogie Nights | 3.0       |

---

### 25. Write a SQL query to find the movies directed by 'James Cameron'. Return movie title.

**Query:**
```sql
SELECT m.mov_title 
FROM movie m 
JOIN movie_direction md ON m.mov_id = md.mov_id 
JOIN director d ON md.dir_id = d.dir_id
WHERE d.dir_fname = 'James'
AND d.dir_lname = 'Cameron';
```

**Result:**
| mov_title |
|-----------|
| Titanic   |
| Aliens    |

---

### 26. Write a query in SQL to find the movies in which one or more actors appeared in more than one film.

**Query:**
```sql
SELECT DISTINCT m.mov_title 
FROM movie m 
JOIN movie_cast mc ON m.mov_id = mc.mov_id 
WHERE mc.act_id IN (
    SELECT act_id  
    FROM movie_cast 
    GROUP BY act_id  
    HAVING COUNT(mov_id) > 1
);
```

**Result:**
| mov_title       |
|-----------------|
| American Beauty |
| Beyond the Sea  |

---

## Joins (Questions 27-50)

### 27. Write a SQL query to find all reviewers whose ratings contain a NULL value. Return reviewer name.

**Query:**
```sql
SELECT DISTINCT r.rev_name  
FROM movie_reviewer r  
JOIN movie_rating mr ON r.rev_id = mr.rev_id 
WHERE mr.rev_stars IS NULL;
```

**Result:**
| rev_name           |
|--------------------|
| Righty Sock        |
| Jack Malvern       |
| Flagrant Baronessa |
| Alec Shaw          |
| NULL               |
| Victor Woeltjen    |
| Simon Wright       |
| Neal Wruck         |
| Paul Monks         |
| Mike Salvati       |
| Wesley S. Walker   |
| Sasha Goldshtein   |
| Josh Cates         |
| Krug Stillo        |
| Scott LeBrun       |
| Hannah Steele      |
| Vincent Cadena     |
| Brandt Sponseller  |
| Richard Adams      |

---

### 28. Write a SQL query to find out who was cast in the movie 'Annie Hall'. Return actor first name, last name and role.

**Query:**
```sql
SELECT a.act_fname, a.act_lname, mc.role 
FROM actor a 
JOIN movie_cast mc ON a.act_id = mc.act_id
WHERE mc.mov_id = (
    SELECT mov_id 
    FROM movie 
    WHERE mov_title = 'Annie Hall'
);
```

**Result:**
| act_fname | act_lname | role        |
|-----------|-----------|-------------|
| Woody     | Allen     | Alvy Singer |

---

### 29. Write a SQL query to find the director who directed a movie that featured a role in 'Eyes Wide Shut'. Return director first name, last name and movie title.

**Query:**
```sql
SELECT d.dir_fname, d.dir_lname, m.mov_title 
FROM director d 
JOIN movie_direction md ON d.dir_id = md.dir_id 
JOIN movie m ON md.mov_id = m.mov_id 
WHERE m.mov_id = (
    SELECT mov_id 
    FROM movie 
    WHERE mov_title = 'Eyes Wide Shut'
);
```

**Result:**
| dir_fname | dir_lname | mov_title      |
|-----------|-----------|----------------|
| Stanley   | Kubrick   | Eyes Wide Shut |

---

### 30. Write a SQL query to find the director of a movie that cast a role as Sean Maguire. Return director first name, last name and movie title.

**Query:**
```sql
SELECT d.dir_fname, d.dir_lname, m.mov_title 
FROM director d 
JOIN movie_direction md ON d.dir_id = md.dir_id 
JOIN movie m ON md.mov_id = m.mov_id 
JOIN movie_cast mc ON m.mov_id = mc.mov_id
WHERE mc.role = 'Sean Maguire';
```

**Result:**
| dir_fname | dir_lname | mov_title         |
|-----------|-----------|-------------------|
| Gus       | Van Sant  | Good Will Hunting |

---

### 31. Write a SQL query to find out which actors have not appeared in any movies between 1990 and 2000 (Begin and end values are included). Return actor first name, last name, movie title and release year.

**Query:**
```sql
SELECT a.act_fname, a.act_lname, m.mov_title, m.mov_year
FROM actor a
LEFT JOIN movie_cast mc ON a.act_id = mc.act_id
LEFT JOIN movie m ON mc.mov_id = m.mov_id
WHERE m.mov_year NOT BETWEEN 1990 AND 2000
   OR m.mov_year IS NULL;
```

**Result:**
| act_fname | act_lname  | mov_title           | mov_year |
|-----------|------------|---------------------|----------|
| James     | Stewart    | Vertigo             | 1958     |
| Deborah   | Kerr       | The Innocents       | 1961     |
| Peter     | O'Toole    | Lawrence of Arabia  | 1962     |
| Robert    | De Niro    | The Deer Hunter     | 1978     |
| F. Murray | Abraham    | Amadeus             | 1984     |
| Harrison  | Ford       | Blade Runner        | 1982     |
| Woody     | Allen      | Annie Hall          | 1977     |
| Jon       | Voight     | Deliverance         | 1972     |
| Maggie    | Gyllenhaal | Donnie Darko        | 2001     |
| Dev       | Patel      | Slumdog Millionaire | 2008     |
| Sigourney | Weaver     | Aliens              | 1986     |
| Jack      | Nicholson  | Chinatown           | 1974     |
| Christian | Bale       | Chinatown           | 1974     |

---

### 32. Write a SQL query to find the directors who have directed films in a variety of genres. Group the result set on director first name, last name and generic title. Sort the result-set in ascending order by director first name and last name. Return director first name, last name and number of genres movies.

**Query:**
```sql
SELECT d.dir_fname, d.dir_lname, COUNT(DISTINCT g.gen_id) AS num_genres
FROM director d
JOIN movie_direction md ON d.dir_id = md.dir_id
JOIN movie_genres mg ON md.mov_id = mg.mov_id
JOIN genres g ON mg.gen_id = g.gen_id
GROUP BY d.dir_fname, d.dir_lname
ORDER BY d.dir_fname, d.dir_lname;
```

**Result:**
| dir_fname | dir_lname | num_genres |
|-----------|-----------|------------|
| Alfred    | Hitchcock | 1          |
| Bryan     | Singer    | 1          |
| Danny     | Boyle     | 1          |
| David     | Lean      | 1          |
| Frank     | Darabont  | 1          |
| Hayao     | Miyazaki  | 1          |
| Jack      | Clayton   | 1          |
| James     | Cameron   | 1          |
| John      | Boorman   | 1          |
| Kevin     | Spacey    | 1          |
| Michael   | Cimino    | 1          |
| Ridley    | Scott     | 1          |
| Sam       | Mendes    | 1          |
| Stanley   | Kubrick   | 1          |
| Woody     | Allen     | 1          |

---

### 33. Write a SQL query to find the movies with year and genres. Return movie title, movie year and generic title.

**Query:**
```sql
SELECT m.mov_title, m.mov_year, g.gen_title 
FROM movie m 
JOIN movie_genres mg ON m.mov_id = mg.mov_id 
JOIN genres g ON mg.gen_id = g.gen_id;
```

**Result:**
| mov_title                | mov_year | gen_title |
|--------------------------|----------|-----------|
| Aliens                   | 1986     | Action    |
| Deliverance              | 1972     | Adventure |
| Lawrence of Arabia       | 1962     | Adventure |
| Princess Mononoke        | 1997     | Animation |
| Annie Hall               | 1977     | Comedy    |
| The Usual Suspects       | 1995     | Crime     |
| The Shawshank Redemption | 1994     | Crime     |
| Spirited Away            | 2001     | Drama     |
| Braveheart               | 1995     | Drama     |
| Trainspotting            | 1996     | Drama     |
| Slumdog Millionaire      | 2008     | Drama     |
| The Innocents            | 1961     | Horror    |
| Beyond the Sea           | 2004     | Music     |
| Eyes Wide Shut           | 1999     | Mystery   |
| Back to the Future       | 1985     | Mystery   |
| Vertigo                  | 1958     | Mystery   |
| American Beauty          | 1999     | Romance   |
| Blade Runner             | 1982     | Thriller  |
| The Deer Hunter          | 1978     | War       |

---

### 34. Write a SQL query to find all the movies with year, genres, and name of the director.

**Query:**
```sql
SELECT m.mov_title, m.mov_year, g.gen_title, d.dir_fname, d.dir_lname 
FROM movie m 
JOIN movie_genres mg ON m.mov_id = mg.mov_id 
JOIN genres g ON mg.gen_id = g.gen_id 
JOIN movie_direction md ON m.mov_id = md.mov_id
JOIN director d ON md.dir_id = d.dir_id;
```

**Result:**
| mov_title                | mov_year | gen_title | dir_fname | dir_lname