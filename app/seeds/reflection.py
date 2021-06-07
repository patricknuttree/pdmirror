from app.models import db, Reflection


def seed_reflections():
    One = Reflection(
        user_id=1,
        pd_id=1,
        post="Met with a few officers in the park. They were just on patrol\
              and stopped to chat. Had a nice interaction with the officers it\
              It was good to catch up on the goings on around town.\
              (This is seeded data not a true story)",
        rating=5
    )
    Two = Reflection(
        user_id=1,
        pd_id=1,
        post="Spoke with officers about an odd character hanging around the\
              neighborhood. They were rather dismissive of my concern.\
              (This is seeded data not a true story)",
        rating=2
    )
    Three = Reflection(
        user_id=1,
        pd_id=1,
        post="A woman passed out in the store right in front of me.\
              PD was on the seen within two minutes of the call to 911.\
              I was still on the phone when two officer came walking in and\
              started administering first aid.\
              (This is seeded data not a true story)",
        rating=5
    )
    Four = Reflection(
        user_id=1,
        pd_id=1,
        post="Just got a speeding ticket from these guys. I was going 38 in a\
             35 the officer was cordial and everything about the ticketing\
             seemed above board. It seems a little overly strict to nab\
             for being 3 mph over. But the officer did let me go on the\
             broken tail light\
             (This is seeded data not a true story)",
        rating=3
    )
    Five = Reflection(
        user_id=1,
        pd_id=1,
        post="Watched an officer be rather rough on an elderly man who was\
              just confused. The officer spoke rather harshely to him.\
              The situation would have been better handled with an ounce of\
              compassion on the officers part. Sad to see.\
              (This is seeded data not a true story)",
        rating=1
    )

    db.session.add(One)
    db.session.add(Two)
    db.session.add(Three)
    db.session.add(Four)
    db.session.add(Five)

    db.session.commit()


def undo_reflections():
    db.session.execute('TRUNCATE reflections RESTART IDENTITY CASCADE;')
    db.session.commit()
