

select  
    date_format(min(created_at), "%M %D %Y") as Earliest_Date
from users;

select * from users where created_at = (select min(created_at) from users);

select monthname(created_at) as Month,count(*) as Count from users group by Month order by Count desc;

select count(*) as yahoo_users from users where email like '%@yahoo.com';

