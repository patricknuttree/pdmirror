from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io', pd_rep=False,
                password='password')
    chuck = User(
        username='Chuck',
        email='chuckles@chuck.com',
        pd_rep=False,
        password='Chuck'
    )
    emily = User(
        username='Emily',
        email='Ems@emily.com',
        pd_rep=False,
        password='Emily'
    )
    phil = User(
        username='Phil',
        email='philip@phil.com',
        pd_rep=True,
        password='Phil'
    )
    sandy = User(
        username='Sandy',
        email='SandySand@sandy.com',
        pd_rep=True,
        password='Sandy'
    )

    db.session.add(demo)
    db.session.add(chuck)
    db.session.add(emily)
    db.session.add(phil)
    db.session.add(sandy)

    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
