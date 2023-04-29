from sqlalchemy import Column, Integer, String
from database import Base


class Comment(Base):
    __tablename__ = "comments"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    phoneNumber = Column(Integer)
    comment = Column(String)
    classification = Column(String, nullable=True)
