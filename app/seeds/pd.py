from app.models import db, Pd


def seed_pds():
    avon_police_dep = Pd(
        department_name="Avon Police Department",
        street_number=36145,
        street_name="Detroit Road",
        city="Avon",
        state="Ohio",
        zip_code=44011
    )

    sheffield_lake_police_dep = Pd(
        department_name="Sheffield Lake Police Department",
        street_number=44054,
        street_name="Harris Road",
        city="Sheffield Lake",
        state="Ohio",
        zip_code=44054
    )

    sheffield_village_police_dep = Pd(
        department_name="Sheffield Village Police Department",
        street_number=4340,
        street_name="Colorado Avenue",
        city="Sheffield",
        state="Ohio",
        zip_code=44054
    )

    avon_lake_police_dep = Pd(
        department_name="Avon Lake Police Department",
        street_number=32855,
        street_name="Walker Road",
        city="Avon Lake",
        state="Ohio",
        zip_code=44012
    )

    north_ridgeville_police_dep = Pd(
        department_name="North Ridgeville Police Department",
        street_number=7307,
        street_name="Avon Belden Road",
        city="North Ridgeville",
        state="Ohio",
        zip_code=44039
    )

    db.session.add(avon_police_dep)
    db.session.add(sheffield_lake_police_dep)
    db.session.add(sheffield_village_police_dep)
    db.session.add(avon_lake_police_dep)
    db.session.add(north_ridgeville_police_dep)

    db.session.commit()


def undo_pds():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()