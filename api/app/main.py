from fastapi import BackgroundTasks, Depends, FastAPI
from sqlalchemy.orm import Session
from .database import SessionLocal, engine
from .model import CommentRequest
from fastapi.middleware.cors import CORSMiddleware
from .models import Comment
import .models
from .classify import comment_classification

app = FastAPI(title='Comment Classification API',)
models.Base.metadata.create_all(bind=engine)


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


origins = ["http://localhost:3000", "localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
async def root():
    docs_path = 'http://127.0.0.1:8000/docs'
    return f"Hello welcome to the Comment classifier API. Visit {docs_path} to try out."


@app.post("/comments")
def create_comments(comment_request: CommentRequest, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    comment = Comment()
    comment.name = comment_request.name
    comment.email = comment_request.email
    comment.phoneNumber = comment_request.phoneNumber
    comment.comment = comment_request.comment
    
    db.add(comment)
    db.commit()
    background_tasks.add_task(comment_classification, comment, db)

    return {
        "status_code": "200",
        "message": "comment was added to the database"
    }


@app.get("/comments")
def get_comments(db: Session = Depends(get_db)):

    comments = db.query(Comment).all()
    return comments


@app.delete("/comments/{id}")
async def delete_comment(id, db: Session = Depends(get_db)):
    comment = db.query(Comment).filter(Comment.id == id).first()
    db.delete(comment)
    db.commit()
    return {"ok": True}
