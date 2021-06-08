from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired
from app.models import Reflection


class ReflectionForm(FlaskForm):
    post = TextAreaField('Post', validators=[DataRequired()])
    rating = IntegerField('Rating')
    pd_id = IntegerField('pd_id')
    submit = SubmitField('Submit')
