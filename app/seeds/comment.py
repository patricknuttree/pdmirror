from app.models import db, Comment


def seed_comment():
    One = Comment(
        comment="Aww thats nice. Its great when people take the time to chat.",
        user_id=2,
        reflection_id=1
    )
    Two = Comment(
        comment="Thats great, hope you didn't admit to anything.",
        user_id=2,
        reflection_id=1
    )
    Three = Comment(
        comment="Did they end up coming and checking it out? If not that is\
                not cool.",
        user_id=3,
        reflection_id=2
    )
    Four = Comment(
        comment="What are we paying taxes for if not exactly that.",
        user_id=4,
        reflection_id=2
    )
    Five = Comment(
        comment="Woooo way to go Avon PD.",
        user_id=5,
        reflection_id=3
    )
    Six = Comment(
        comment="That was awesome of you to be on the ball and call 911.\
                Way to beat the bystander effect.",
        user_id=2,
        reflection_id=3
    )
    Seven = Comment(
        comment="3 miles over!!! Way to go there speed demon. Over is still\
                over",
        user_id=4,
        reflection_id=4
    )
    Eight = Comment(
        comment="Three miles over the speed limit? Seems like it should have\
                been a warning.",
        user_id=3,
        reflection_id=4
    )
    Nine = Comment(
        comment="Sounds like that situation could have used some real\
                community policing.",
        user_id=2,
        reflection_id=5
    )
    Ten = Comment(
        comment="Forget community policing that situation needed some basic\
                humanity.",
        user_id=5,
        reflection_id=5
    )

    db.session.add(One)
    db.session.add(Two)
    db.session.add(Three)
    db.session.add(Four)
    db.session.add(Five)
    db.session.add(Six)
    db.session.add(Seven)
    db.session.add(Eight)
    db.session.add(Nine)
    db.session.add(Ten)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
