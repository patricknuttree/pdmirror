from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired
from app.models import Reflection


class CommentForm(FlaskForm):
    comment = TextAreaField('Comment', validators=[DataRequired()])
    reflection_id = IntegerField('reflection_id')
    submit = SubmitField('Submit')
