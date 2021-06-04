from app.models.pd import Pd
from flask import request
from flask.blueprints import Blueprint
from flask_login import login_required, current_user
from app.models import db, Pd

pd_routes = Blueprint("pds", __name__)


@pd_routes.route('/')
def pds():
    pds = Pd.query.all()
    return "Hello World"
    # return {"pds": [pd.to_dict() for pd in pds]}
