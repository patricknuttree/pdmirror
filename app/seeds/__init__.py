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
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    db.drop_all()
    # undo_users()
    # Add other undo functions here
