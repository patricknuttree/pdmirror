from sqlalchemy.orm import relationship
from .db import db


class Pd(db.Model):
    __tablename__ = 'pds'

    id = db.Column(db.Integer, primary_key=True)
    department_name = db.Column(db.String(100), nullable=False)
    jurisdictions = db.relationship("Jurisdiction", back_populates="pd")
    reflections = db.relationship("Reflection", back_populates="pd")

    def to_dict(self):
        return {
            "id": self.id,
            "department_name": self.department_name,
        }
