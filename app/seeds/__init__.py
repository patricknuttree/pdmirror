from app.seeds.comment import seed_comment, undo_comments
from app.seeds.pd import seed_pds, undo_pds
from app.seeds.reflection import seed_reflections, undo_reflections
from flask.cli import AppGroup
from .users import seed_users, undo_users
from app.models import db

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    db.create_all()
    seed_users()
    seed_pds()
    seed_reflections()
    seed_comment()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    db.drop_all()
    undo_users()
    undo_pds()
    undo_reflections()
    undo_comments()
    # undo_users()
    # Add other undo functions here
