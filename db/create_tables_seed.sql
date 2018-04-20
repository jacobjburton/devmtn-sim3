CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    username varchar(20) not null,
    password varchar(20) not null,
    profile_pic text
);


CREATE TABLE IF NOT EXISTS posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id int,
    foreign key(author_id) references users(id)
)