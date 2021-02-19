select ordinal_position as column_id,
    column_name as column_name,
    data_type as data_type,
    case when numeric_precision is not null
              then numeric_precision
        else character_maximum_length end as max_length,
    case when datetime_precision is not null
              then datetime_precision
        when numeric_scale is not null
             then numeric_scale
        else 0 end as data_precision,
    is_nullable,
    column_default
from information_schema.columns
where table_name = 'table name' -- put table name here
--    and table_schema = 'schema name' -- put schema name here
order by ordinal_position;
-- https://dataedo.com/kb/query/mysql/list-columns-names-in-specific-table