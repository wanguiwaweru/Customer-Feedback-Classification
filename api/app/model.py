from pydantic import BaseModel
from typing import Optional


class CommentRequest(BaseModel):
    name: str
    email: str
    phoneNumber: int
    comment: str
    classification: Optional[str]

    class Config:
        arbitrary_types_allowed = True
        schema_extra = {
            "example": {
                "name": "JaneDoe",
                "email": "janedoe@gmail.com",
                "phoneNumber": "07987654321",
                "comment": "Card not arrived yet"
            }
        }


class CommentResponse(BaseModel):
    status_code: Optional[int]
    message: Optional[str]
    topic: Optional[str]
