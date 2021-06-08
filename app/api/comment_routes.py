from flask import request
from flask.blueprints import Blueprint
from flask_login import login_required, current_user
# from app.forms import CommentForm
from app.models import db, Comment, User, Reflection

comment_routes = Blueprint("comments", __name__)


# GET ALL THE COMMENTS ON A REFLECTION (api/comments/reflection/:id/comments)
@comment_routes.route('/reflection/<int:id>/comments')
@login_required
def reflection_comments(id):
    comments = Comment.query.filter(Comment.reflection_id == id).join(
        User, User.id == Comment.user_id).join(Reflection, Reflection.id == Comment.reflection_id).all()
    return {
        "comments": [comment.to_dict() for comment in comments]
        # "Hello World Comments Are Here"
    }


@comment_routes.route('/reflection/<int:id>/comments', methods=['POST'])
def add_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = Comment(
            comment=form.data['comment'],
            user_id=current_user.id,
            reflection_id=form.data['reflection_id']
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()