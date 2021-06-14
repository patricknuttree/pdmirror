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

    Six = Reflection(
        user_id=1,
        pd_id=2,
        post="Veniam dolor nisi eu elit in fugiat incididunt. Proident laboris\
            magna consectetur ea in laborum nisi magna esse sunt reprehenderit\
            in elit nisi. Ea consectetur occaecat duis reprehenderit aute\
            . Magna nisi cupidatat incididunt labore in incididunt sit sit\
            aliquip. Culpa laborum aliqua commodo sit ad ullamco labore\
            . Cupidatat dolore laborum et sit occaecat laboris aute occaecat.",
        rating=5
    )

    Seven = Reflection(
        user_id=2,
        pd_id=2,
        post="Cillum ea ea do consectetur eiusmod id. Incididunt anim\
            adipisicing ut occaecat. Officia et voluptate nisi aliqua sunt\
            mollit fugiat fugiat enim. Fugiat cillum culpa et consequat\
            aliquip amet adipisicing occaecat consequat.",
        rating=4
    )

    Eight = Reflection(
        user_id=3,
        pd_id=2,
        post="Veniam dolor nisi eu elit in fugiat incididunt. Proident laboris\
            magna consectetur ea in laborum nisi magna esse sunt reprehenderit\
            in elit nisi. Ea consectetur occaecat duis reprehenderit aute.\
            Magna nisi cupidatat incididunt labore in incididunt sit sit\
            aliquip. Culpa laborum aliqua commodo sit ad ullamco labore\
            . Cupidatat dolore laborum et sit occaecat laboris aute occaecat.",
        rating=3
    )

    Nine = Reflection(
        user_id=4,
        pd_id=2,
        post="Mollit nostrud officia fugiat proident consequat do. Proident\
            deserunt labore consectetur consequat voluptate. Laboris ad mollit\
            pariatur duis.",
        rating=2
    )

    Ten = Reflection(
        user_id=5,
        pd_id=2,
        post="Incididunt exercitation voluptate ullamco veniam deserunt magna\
            et qui. Dolor veniam reprehenderit est adipisicing adipisicing.\
            Laborum mollit ea est ullamco quis consectetur ea officia\
            incididunt. Ullamco anim Lorem ullamco adipisicing deserunt\
            consequat incididunt. Commodo quis nisi voluptate velit.",
        rating=1
    )

    Eleven = Reflection(
        user_id=1,
        pd_id=3,
        post="Sunt dolore consequat qui fugiat enim consectetur. Ullamco\
            eiusmod in labore do ipsum in sint. Ut occaecat ad reprehenderit\
            tempor esse consectetur incididunt do. Excepteur pariatur eiusmod\
            esse occaecat occaecat incididunt nisi. Culpa fugiat magna\
            consequat elit commodo et incididunt.",
        rating=5
    )

    Twelve = Reflection(
        user_id=2,
        pd_id=3,
        post="Ipsum occaecat enim nisi laborum exercitation anim mollit ea\
            aliqua commodo deserunt. Dolor occaecat eu ut incididunt nulla\
            occaecat excepteur. Aliquip dolor sunt sint amet aute et excepteur\
            occaecat nisi irure.",
        rating=5
    )

    Thirteen = Reflection(
        user_id=3,
        pd_id=3,
        post="Voluptate reprehenderit sit nulla Lorem esse. Ut commodo sint\
            occaecat ut sint sunt ad amet voluptate est excepteur do. Elit sit\
            nostrud consectetur officia ullamco sunt non do. Commodo eu\
            pariatur deserunt tempor.",
        rating=3
    )

    Fourteen = Reflection(
        user_id=4,
        pd_id=3,
        post="Et aliquip sunt laborum do cillum laborum nulla reprehenderit\
            tempor. Nostrud aute sit duis amet. Tempor cillum labore irure\
            nostrud laborum est reprehenderit eiusmod. Deserunt elit enim eu\
            ut voluptate.",
        rating=4
    )

    Fifthteen = Reflection(
        user_id=5,
        pd_id=3,
        post="Duis nostrud aute adipisicing labore excepteur aliqua quis eu\
            sint esse commodo et. Amet consectetur culpa irure amet. Irure\
            aute irure id qui anim voluptate eu.",
        rating=2
    )

    Sixteen = Reflection(
        user_id=1,
        pd_id=4,
        post="Id esse veniam officia sunt non aute eiusmod. Labore excepteur\
            officia nisi amet anim. Tempor eu dolore non consectetur laborum\
            . Lorem laborum excepteur fugiat proident anim proident.",
        rating=4
    )

    Seventeen = Reflection(
        user_id=2,
        pd_id=4,
        post="Ad nostrud deserunt sint quis non non labore aliqua sit est\
            commodo. Exercitation anim laboris proident minim commodo id\
            cillum anim officia eiusmod mollit dolor aliquip. Aliqua ex esse\
            dolore enim deserunt nisi consequat aliqua magna sint aliqua\
            voluptate. Mollit eiusmod veniam nisi qui.",
        rating=2
    )

    Eighteen = Reflection(
        user_id=3,
        pd_id=4,
        post="Est ex commodo minim voluptate voluptate ea commodo ut sunt do\
            . Excepteur sint occaecat aute esse ullamco sit aliquip amet\
            commodo eiusmod non velit. Exercitation cupidatat ad minim minim\
            ex dolor aliquip proident exercitation non aliquip id. Nostrud\
            eiusmod enim Lorem ad aliquip Lorem magna velit consectetur. Anim\
            proident Lorem labore pariatur cupidatat pariatur est Lorem\
            reprehenderit officia sunt qui. Excepteur ex exercitation aliquip\
            incididunt enim anim Lorem.",
        rating=3
    )

    Nineteen = Reflection(
        user_id=4,
        pd_id=4,
        post="Pariatur excepteur nostrud occaecat sit culpa excepteur\
            cupidatat dolore est. Sunt adipisicing adipisicing sunt occaecat\
            ad nulla adipisicing mollit cillum cupidatat cillum. Lorem elit et\
            labore in veniam do magna. Dolore consectetur cupidatat commodo in\
            sunt non nulla. Velit consectetur officia nisi ullamco proident\
            aliqua culpa velit laborum consequat ullamco.",
        rating=5
    )

    Twenty = Reflection(
        user_id=5,
        pd_id=4,
        post="Irure irure ex nulla cillum est ex aliquip et ut cillum. Ullamco\
            consequat enim velit dolore non enim. Do nostrud magna id eiusmod\
            reprehenderit nostrud cillum anim incididunt et do eu veniam\
            voluptate. Labore sit irure incididunt cupidatat eu do duis quis\
            ad excepteur proident est ea anim. Esse laborum ad in dolor\
            . Veniam incididunt est aliquip est reprehenderit laboris culpa et\
            dolore mollit sint qui adipisicing.",
        rating=3
    )

    short1 = Reflection(
        user_id=1,
        pd_id=5,
        post="Enim nisi adipisicing cupidatat nisi deserunt amet sint pariatur\
            aliqua nisi eu proident. Quis duis cupidatat sint dolore et dolor\
            incididunt esse consequat laboris minim Lorem. Est do adipisicing\
            cupidatat sint nulla sit consequat irure laborum. Quis eiusmod\
            labore reprehenderit eiusmod et veniam laboris ut enim duis nisi\
            magna. Est tempor culpa velit adipisicing mollit amet fugiat\
            laboris veniam et ex. Minim nisi anim adipisicing nulla ea cillum\
            nostrud adipisicing enim ut esse do dolore in.",
        rating=4
    )

    short2 = Reflection(
        user_id=2,
        pd_id=5,
        post="Ex in ex magna officia enim dolor ex ex sit esse sit enim do.\
            Deserunt nisi adipisicing ut ipsum quis anim ullamco eu tempor\
            ullamco excepteur. Nulla minim culpa aute cupidatat irure sunt\
            excepteur. Nulla est qui pariatur occaecat laborum excepteur\
            incididunt sit exercitation ullamco proident. Ex ex anim ea veniam\
            excepteur ex.",
        rating=3
    )

    short3 = Reflection(
        user_id=3,
        pd_id=6,
        post="In ex magna deserunt esse duis incididunt enim non. Aliquip\
            adipisicing qui magna aliquip. Ex elit excepteur qui ullamco in eu\
            Elit exercitation irure ex excepteur anim culpa tempor aliquip\
            dolor dolore aliquip ea. Id nulla cillum deserunt enim do anim\
            consequat minim sunt ex adipisicing. Eiusmod dolor eiusmod\
            pariatur nisi anim commodo.",
        rating=5
    )

    short4 = Reflection(
        user_id=4,
        pd_id=6,
        post="Adipisicing nostrud culpa nostrud sint nisi adipisicing id\
            eiusmod tempor ut dolore non laboris. Aute enim quis nostrud\
            aliquip nisi dolor incididunt nisi. Laborum anim tempor non esse.\
            Reprehenderit veniam cupidatat anim eiusmod in aliqua eu minim\
            eiusmod labore duis est deserunt. Do do nostrud esse nostrud\
            tempor cupidatat et et elit.",
        rating=2
    )

    short5 = Reflection(
        user_id=5,
        pd_id=7,
        post="Minim sint id labore sit adipisicing. Aute nulla veniam non\
            reprehenderit commodo eu pariatur culpa aliqua enim labore.\
            Occaecat incididunt esse in labore amet officia.",
        rating=3
    )

    short6 = Reflection(
        user_id=1,
        pd_id=7,
        post="Sit reprehenderit anim est reprehenderit ipsum eiusmod fugiat\
            aute non voluptate elit consequat. Enim sit deserunt consequat\
            laboris eiusmod commodo nisi non ipsum velit dolore tempor laboris\
            sint. Nisi reprehenderit dolor sit consequat proident voluptate.\
            Velit officia laboris ad ipsum reprehenderit voluptate et velit\
            qui eiusmod non consequat.",
        rating=4
    )

    short7 = Reflection(
        user_id=2,
        pd_id=8,
        post="Mollit laboris cupidatat dolor laborum ad ea culpa eiusmod\
            adipisicing dolore magna et exercitation. Veniam dolore ea aliqua\
            qui nulla cupidatat et commodo veniam veniam minim mollit enim\
            culpa. Aute dolor dolore fugiat cillum anim non cupidatat tempor\
            proident nisi tempor sint laborum magna. Lorem irure voluptate\
            mollit elit elit culpa do occaecat tempor ipsum ad id sit. Eu enim\
            minim sunt amet ullamco exercitation ipsum id.",
        rating=2
    )

    short8 = Reflection(
        user_id=3,
        pd_id=8,
        post="Aute laboris est reprehenderit duis mollit. Sunt sit occaecat\
            occaecat ex velit ipsum. Sint do in sit ea Lorem irure eiusmod et\
            aliqua labore reprehenderit qui. Id ut ipsum anim eiusmod fugiat\
            incididunt in labore. Excepteur minim ea reprehenderit elit velit\
            quis exercitation consectetur. Tempor duis cillum elit deserunt\
            velit nostrud aliqua cillum.",
        rating=5
    )

    short9 = Reflection(
        user_id=4,
        pd_id=9,
        post="Velit eiusmod dolore sint et Lorem minim sit exercitation\
            deserunt exercitation. Ex sit aliquip reprehenderit consectetur in\
            veniam. Eiusmod elit mollit ipsum do eiusmod.",
        rating=5
    )

    short10 = Reflection(
        user_id=5,
        pd_id=9,
        post="Ipsum elit amet eu commodo. Reprehenderit pariatur est aute\
            ullamco amet deserunt eu velit ipsum ad est irure. Ipsum magna\
            nisi ullamco nulla. Nisi est consectetur elit nostrud in sint\
            nulla ex tempor ut id.",
        rating=3
    )

    short11 = Reflection(
        user_id=1,
        pd_id=10,
        post="Ad adipisicing consectetur magna non. Excepteur laboris\
            consequat veniam mollit do excepteur Lorem esse aliqua esse fugiat\
            Duis voluptate aliqua fugiat laboris nostrud culpa enim\
            exercitation sit eiusmod mollit. Tempor eu laboris eu aute culpa\
            consequat tempor et. Nisi minim eiusmod ut commodo laborum id aute\
            esse occaecat sunt enim cillum. Esse Lorem aliqua aliqua quis\
            pariatur exercitation sit deserunt.",
        rating=3
    )

    short12 = Reflection(
        user_id=2,
        pd_id=10,
        post="Esse commodo irure eu amet consectetur deserunt excepteur\
            consectetur consectetur esse. Pariatur officia minim nisi\
            incididunt pariatur aliqua id qui laborum irure. Nulla sit ex\
            aliqua in. Amet in non ex id exercitation non. Sit eu magna veniam\
            exercitation ad aliqua ullamco ex consequat proident anim. Non\
            exercitation et incididunt nulla ullamco eiusmod laboris commodo\
            aliquip ex.",
        rating=1
    )

    short13 = Reflection(
        user_id=3,
        pd_id=11,
        post="Ex non laborum elit minim cupidatat consectetur ipsum quis. Ut\
            in cupidatat officia voluptate. Occaecat enim nisi laborum\
            pariatur voluptate voluptate aliquip dolor ipsum irure esse\
            pariatur voluptate nisi. Ex ad mollit est officia aliqua.\
            Cupidatat excepteur nisi adipisicing velit laboris occaecat id non\
            incididunt in ut officia laborum. Occaecat aliquip cillum sit esse\
            sit tempor irure duis voluptate. Eiusmod aliquip ut consectetur\
            Lorem id ut excepteur dolore in ipsum in.",
        rating=2
    )

    short14 = Reflection(
        user_id=4,
        pd_id=11,
        post="Voluptate aliquip enim Lorem nulla in sint qui consectetur. Sit\
            sunt qui id nisi nulla adipisicing quis qui eu enim cupidatat\
            culpa magna labore. Laborum incididunt in excepteur adipisicing\
            anim ipsum duis adipisicing fugiat consequat. Dolor incididunt\
            quis dolor consectetur nostrud est. Aliqua nostrud consectetur\
            irure pariatur anim ex ad id. Consequat adipisicing officia sint\
            culpa nostrud magna velit qui mollit quis.",
        rating=4
    )

    short15 = Reflection(
        user_id=5,
        pd_id=12,
        post="Nisi in commodo Lorem tempor quis proident ad exercitation\
            excepteur nulla sunt. Commodo duis aute ad aliqua ullamco\
            cupidatat fugiat nisi veniam occaecat aliqua. Deserunt ut proident\
            dolor Lorem est commodo consectetur anim voluptate velit officia\
            laboris ut. Magna reprehenderit non nulla ea exercitation in et\
            mollit in elit qui eu.",
        rating=2
    )

    short16 = Reflection(
        user_id=1,
        pd_id=12,
        post="Est ea sit enim minim incididunt elit occaecat deserunt nisi\
            voluptate pariatur. Officia id cillum adipisicing id dolor culpa\
            quis tempor id. Excepteur quis anim eiusmod culpa quis enim Lorem\
            culpa. Nisi veniam occaecat occaecat pariatur eu cillum enim dolor\
            consequat pariatur. Deserunt consectetur velit aute amet duis. Ea\
            eu cillum magna pariatur mollit dolore. Veniam culpa consectetur\
            duis consequat ullamco.",
        rating=5
    )

    short17 = Reflection(
        user_id=2,
        pd_id=13,
        post="Aliqua sunt cillum est quis commodo elit ut. Quis ex velit\
            nostrud non Lorem est veniam elit non. Dolor amet id ea pariatur.\
            Et aliqua qui mollit do. Ad esse do dolore aute aliqua laboris\
            nulla commodo officia ullamco et. Eiusmod proident laboris irure\
            mollit exercitation in esse enim deserunt non aute.",
        rating=1
    )

    short18 = Reflection(
        user_id=3,
        pd_id=13,
        post="Exercitation nulla occaecat elit minim ad nostrud aute nisi\
            ipsum veniam pariatur. Laborum qui sint qui aliqua. Veniam amet\
            aute aliqua esse commodo. Magna do aute minim officia excepteur\
            eiusmod aute id in. Mollit anim adipisicing voluptate non\
            excepteur ex cupidatat irure excepteur incididunt duis. Nulla\
            cillum dolore cupidatat aliquip officia cupidatat.",
        rating=2
    )

    short19 = Reflection(
        user_id=4,
        pd_id=14,
        post="Eu nulla enim dolor consequat enim occaecat tempor et\
            reprehenderit anim deserunt sunt eu. Ipsum ullamco ullamco\
            voluptate do voluptate reprehenderit id. Voluptate labore proident\
            ea in dolore magna.",
        rating=2
    )

    short20 = Reflection(
        user_id=5,
        pd_id=15,
        post="Commodo exercitation occaecat occaecat consectetur ad ad est do\
            nostrud aliquip. Occaecat pariatur culpa aliqua pariatur ex dolor\
            commodo irure id consectetur dolore ea nulla labore. Esse ipsum id\
            velit voluptate incididunt aliqua laboris Lorem minim Lorem ex\
            ipsum.",
        rating=3
    )

    short21 = Reflection(
        user_id=1,
        pd_id=15,
        post="Non sunt sit voluptate aute id. Irure dolor cillum aliquip\
                labore. Tempor incididunt do eiusmod commodo voluptate\
                pariatur amet sint do irure.",
        rating=5
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
    db.session.add(Eleven)
    db.session.add(Twelve)
    db.session.add(Thirteen)
    db.session.add(Fourteen)
    db.session.add(Fifthteen)
    db.session.add(Sixteen)
    db.session.add(Seventeen)
    db.session.add(Eighteen)
    db.session.add(Nineteen)
    db.session.add(Twenty)
    db.session.add(short1)
    db.session.add(short2)
    db.session.add(short3)
    db.session.add(short4)
    db.session.add(short5)
    db.session.add(short6)
    db.session.add(short7)
    db.session.add(short8)
    db.session.add(short9)
    db.session.add(short10)
    db.session.add(short11)
    db.session.add(short12)
    db.session.add(short13)
    db.session.add(short14)
    db.session.add(short15)
    db.session.add(short16)
    db.session.add(short17)
    db.session.add(short18)
    db.session.add(short19)
    db.session.add(short20)

    db.session.commit()


def undo_reflections():
    db.session.execute('TRUNCATE reflections RESTART IDENTITY CASCADE;')
    db.session.commit()
