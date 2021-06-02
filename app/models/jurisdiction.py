from .db import db


class Jurisdiction(db.Model):
    __tablename__ = 'jurisdictions'

    id = db.Column(db.Integer, primary_key=True)
    location = db.Column(db.String(100), nullable=False)
    pd_id = db.Column(db.Integer, db.ForeignKey("pds.id"), nullable=False)
    pd = db.relationship("Pd", back_populates="jurisdiction")

    def to_dict(self):
        return {
            "id": self.id,
            "location": self.location,
            "pd_id": self.pd_id
        }
