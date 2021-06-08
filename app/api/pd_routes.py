from app.models.pd import Pd
from flask import request
from flask.blueprints import Blueprint
from flask_login import login_required, current_user
from app.forms import ReflectionForm
from app.models import db, Pd, Reflection, User

pd_routes = Blueprint("pds", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


# GET ALL THE POLICE DEPARTMENTS
@pd_routes.route('/')
@login_required
def pds():
    pds = Pd.query.all()
    # return "Hello World"
    return {"pds": [pd.to_dict() for pd in pds]}


# GET ALL THE REFLECTIONS FOR A POLICE DEPARTMENT (api/pds/:id/reflections)
@pd_routes.route('/<int:id>/reflections')
@login_required
def pd_reflections(id):
    reflections = Reflection.query.filter(Reflection.pd_id == id).join(
        User, User.id == Reflection.user_id).all()
    return {
        "reflections": [reflection.to_dict() for reflection in reflections]
        }


# POST A REFLECTION FOR A POLICE DEPARTMENT (api/pds/:id/reflections)
# @login_required
@pd_routes.route('/<int:id>/reflections', methods=['POST'])
def add_reflection(id):
    print("CURRENT USER", current_user)
    form = ReflectionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_reflection = Reflection(
            post=form.data['post'],
            rating=form.data['rating'],
            user_id=current_user.id,
            pd_id=form.data['pd_id']
        )
        db.session.add(new_reflection)
        db.session.commit()
        return new_reflection.to_dict()
    # return {'errors': validation_errors_to_errors_messages(form.errors)}, 401
