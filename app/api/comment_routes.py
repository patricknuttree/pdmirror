from flask import request
from flask.blueprints import Blueprint
from flask_login import login_required, current_user
from app.models import db, Comment, User, Reflection

comment_routes = Blueprint("comments", __name__)


# GET ALL THE COMMENTS ON A REFLECTION (api/comments/reflection/:id/comments)
@comment_routes.route('/reflection/<int:id>/comments')
def reflection_comments(id):
    comments = Comment.query.filter(Comment.reflection_id == id).join(
        User, User.id == Comment.user_id).join(Reflection, Reflection.id == Comment.reflection_id).all()
    return {
        "comments": [comment.to_dict() for comment in comments]
        # "Hello World Comments Are Here"
    }
