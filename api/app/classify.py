from dotenv import load_dotenv
from sqlalchemy import text
from .models import Comment
from .model import CommentResponse
from sqlalchemy import create_engine
import pymysql
import os

load_dotenv()

user = os.getenv('user')
password = os.getenv('password')
host = os.getenv('host')
port = os.getenv('port')
database = os.getenv('database')


def establish_connection():
    engine = create_engine(
        url=f"mysql+pymysql://{user}:{password}@{host}:{port}/{database}")
    return engine


async def comment_classification(comment, db):
    try:
        engine = establish_connection()
        with engine.connect() as eng:
            query = f"SELECT topic, topic_explain FROM mindsdb.zero_short_classifier WHERE text_short ='{comment.comment}'"
            result = eng.execute(text(query))
            for row in result:
                res = CommentResponse()
                res.message = f'Request processed successfully.'
                res.status_code = 200
                res.topic = row[0]
            comment.classification = res.topic
            comment = db.query(Comment).filter(
                Comment.id == comment.id).with_for_update().first()
            comment.classification = res.topic
            db.add(comment)
            db.commit()
            return res
    except Exception as e:
        print("Couldn't connect to the database:\n", e)
