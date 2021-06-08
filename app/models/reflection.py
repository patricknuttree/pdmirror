from sqlalchemy.orm import backref, relationship
from .db import db


class Reflection(db.Model):
    __tablename__ = 'reflections'

    id = db.Column(db.Integer, primary_key=True)
    post = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    pd_id = db.Column(db.Integer, db.ForeignKey("pds.id"), nullable=False)
    pd = db.relationship("Pd", backref="reflection")

    def to_dict(self):
        return {
            "id": self.id,
            "post": self.post,
            "rating": self.rating,
            "user_id": self.user_id,
            "pd_id": self.pd_id,
            "username": self.user.username
        }
