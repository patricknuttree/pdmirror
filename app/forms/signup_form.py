from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


def email_valid(form, field):
    print("Validating Email Address")
    email = field.data
    if not email.count("@"):
        raise ValidationError("Email is invalid")


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), Email(), user_exists, email_valid])
    pd_rep = SelectField('pd_rep', choices=["true", "false"])
    password = StringField('password', validators=[DataRequired()])
