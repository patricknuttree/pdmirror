from .db import db


class Pd(db.Model):
    __tablename__ = 'pds'

    id = db.Column(db.Integer, primary_key=True)
    department_name = db.Column(db.String(100), nullable=False)
    street_number = db.Column(db.Integer, nullable=False)
    street_name = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "department_name": self.department_name,
            "street_number": self.street_number,
            "street_name": self.street_name,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code
        }
