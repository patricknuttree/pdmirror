from sqlalchemy.orm import relationship
from .db import db


class Reflection(db.Model):
    __tablename__ = 'reflection'

    id = db.Column(db.Integer, primary_key=True)
    post = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    user = db.relationship("User", back_populates="reflections")
    pd_id = db.Column(db.Integer, db.ForeignKey("pd.id"), nullable=False)
    pd = db.relationship("Pd", back_populates="reflection")

    def to_dict(self):
        return {
            "id": self.id,
            "post": self.post,
            "rating": self.rating,
            "user_id": self.user_id,
            "product_id": self.pd_id,
        }
