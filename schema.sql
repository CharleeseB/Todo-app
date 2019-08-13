create table todos(
    id serial primary key,
    priority integer not null,
    task varchar(50) not null,
    status boolean default false
);