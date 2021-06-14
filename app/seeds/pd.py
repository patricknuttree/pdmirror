from app.models import db, Pd


def seed_pds():
    avon_police_dep = Pd(
        department_name="Avon Police Department",
        street_address="36145 Detroit Road",
        city="Avon",
        state="Ohio",
        zip_code=44011
        
    )

    sheffield_lake_police_dep = Pd(
        department_name="Sheffield Lake Police Department",
        street_address="44054 Harris Road",
        city="Sheffield Lake",
        state="Ohio",
        zip_code=44054
    )

    sheffield_village_police_dep = Pd(
        department_name="Sheffield Village Police Department",
        street_address="4340 Colorado Avenue",
        city="Sheffield",
        state="Ohio",
        zip_code=44054
    )

    avon_lake_police_dep = Pd(
        department_name="Avon Lake Police Department",
        street_address="32855 Walker Road",
        city="Avon Lake",
        state="Ohio",
        zip_code=44012
    )

    north_ridgeville_police_dep = Pd(
        department_name="North Ridgeville Police Department",
        street_address="7307 Avon Belden Road",
        city="North Ridgeville",
        state="Ohio",
        zip_code=44039
    )

    amherst_police_dep = Pd(
        department_name="Amherst Police Department",
        street_address="911 N Lake St",
        city="Amherst",
        state="Ohio",
        zip_code=44001
    )

    rocky_river_police_dep = Pd(
        department_name="Rocky River Police Department",
        street_address="21012 Hillard Blvd",
        city="Cleveland",
        state="Ohio",
        zip_code=44116
    )

    lakewood_police_dep = Pd(
        department_name="Lakewood Police Department",
        street_address="12650 Detroit Ave",
        city="Lakewood",
        state="Ohio",
        zip_code=44107
    )

    bay_village_police_dep = Pd(
        department_name="Bay Village Police Department",
        street_address="28000 Wolf Rd",
        city="Bay Village",
        state="Ohio",
        zip_code=44140
    )

    elyria_police_dep = Pd(
        department_name="Elyria Police Department",
        street_address="18 West Ave",
        city="Elyria",
        state="Ohio",
        zip_code=44035
    )

    westlake_police_dep = Pd(
        department_name="Westlake Police Department",
        street_address="27300 Hillard Blvd",
        city="Westlake",
        state="Ohio",
        zip_code=44145
    )

    parma_heights_police_dep = Pd(
        department_name="Parma Heights Police Department",
        street_address="6184 Pearl Rd",
        city="Parma Heights",
        state="Ohio",
        zip_code=44130
    )

    lorain_police_dep = Pd(
        department_name="Lorain Police Department",
        street_address="200 W Erie Ave",
        city="Lorain",
        state="Ohio",
        zip_code=44052
    )

    fairview_park_police_dep = Pd(
        department_name="Fairview Park Police Department",
        street_address="20777 Lorain Rd",
        city="Cleveland",
        state="Ohio",
        zip_code=44126
    )

    olmsted_township_police_dep = Pd(
        department_name="Olmsted Township Police Department",
        street_address="26900 Cook Rd",
        city="Olmsted Township",
        state="Ohio",
        zip_code=44138
    )

    cleveland_police_dep = Pd(
        department_name="Cleveland Police Department",
        street_address="1300 Ontario St",
        city="Cleveland",
        state="Ohio",
        zip_code=44113
    )

    cleveland_police_department_2nd_district = Pd(
        department_name="Cleveland Police Department 2nd District",
        street_address="3481 Fulton Rd",
        city="Cleveland",
        state="Ohio",
        zip_code=44109
    )

    cuyahoga_heights_police_dep = Pd(
        department_name="Cuyahoga Heights Police Department",
        street_address="5480 Grant Ave Ste 2",
        city="Cleveland",
        state="Ohio",
        zip_code=44125
    )

    north_olmsted_police_dep = Pd(
        department_name="North Olmsted Police Department",
        street_address="27243 Lorain Rd.",
        city="North Olmsted",
        state="Ohio",
        zip_code=44070
    )

    linndale_police_dep = Pd(
        department_name="Linndale Police Department",
        street_address="4016 W 119th St",
        city="Cleveland",
        state="Ohio",
        zip_code=44135
    )

    db.session.add(avon_police_dep)
    db.session.add(sheffield_lake_police_dep)
    db.session.add(sheffield_village_police_dep)
    db.session.add(avon_lake_police_dep)
    db.session.add(north_ridgeville_police_dep)
    db.session.add(amherst_police_dep)
    db.session.add(rocky_river_police_dep)
    db.session.add(lakewood_police_dep)
    db.session.add(bay_village_police_dep)
    db.session.add(elyria_police_dep)
    db.session.add(westlake_police_dep)
    db.session.add(parma_heights_police_dep)
    db.session.add(lorain_police_dep)
    db.session.add(fairview_park_police_dep)
    db.session.add(olmsted_township_police_dep)
    db.session.add(cleveland_police_dep)
    db.session.add(cleveland_police_department_2nd_district)
    db.session.add(cuyahoga_heights_police_dep)
    db.session.add(north_olmsted_police_dep)
    db.session.add(linndale_police_dep)

    db.session.commit()


def undo_pds():
    db.session.execute('TRUNCATE pds RESTART IDENTITY CASCADE;')
    db.session.commit()
