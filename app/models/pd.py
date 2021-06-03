from sqlalchemy.orm import backref, relationship
from .db import db


class Pd(db.Model):
    __tablename__ = 'pds'

    id = db.Column(db.Integer, primary_key=True)
    department_name = db.Column(db.String(100), nullable=False)
    jurisdictions = db.relationship("Jurisdiction", backref="pd")

    def to_dict(self):
        return {
            "id": self.id,
            "department_name": self.department_name,
        }
