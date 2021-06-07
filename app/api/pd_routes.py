from app.models.pd import Pd
from flask import request
from flask.blueprints import Blueprint
from flask_login import login_required, current_user
from app.models import db, Pd, Reflection, User

pd_routes = Blueprint("pds", __name__)


# GET ALL THE POLICE DEPARTMENTS
@pd_routes.route('/')
def pds():
    pds = Pd.query.all()
    # return "Hello World"
    return {"pds": [pd.to_dict() for pd in pds]}


# GET ALL THE REFLECTIONS FOR A POLICE DEPARTMENT (api/pds/:id/reflections)
@pd_routes.route('/<int:id>/reflections')
def pd_reflections(id):
    reflections = Reflection.query.filter(Reflection.pd_id == id).join(
        User, User.id == Reflection.user_id).all()
    return {
        "reflections": [reflection.to_dict() for reflection in reflections]
        }
