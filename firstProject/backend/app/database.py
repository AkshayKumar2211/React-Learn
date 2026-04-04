from sqlalchemy import create_engine
from  sqlalchemy.orm import DeclarativeBase,sessionmaker

engine=create_engine("postgresql://postgres:akshay2211@localhost:5432/jwtdb")

SessionLocal=sessionmaker(autocommit=False,autoflush=False ,bind=engine)


class Base (DeclarativeBase):
    pass


