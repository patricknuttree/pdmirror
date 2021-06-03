from sqlalchemy.orm import backref
from .db import db


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    reflection_id = db.Column(db.Integer, db.ForeignKey("reflections.id"),
                              nullable=False)
    reflection = db.relationship("Reflection", backref="comments")

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "user_id": self.user_id,
            "reflection_id": self.reflection_id
        }
