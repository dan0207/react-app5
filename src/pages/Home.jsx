import Accordion from "../components/Accordion"
import Card from "../components/Card"
import Header from "../components/Header"
import Main from "../components/Main"
import Opac from "../components/Opac"
// import Sidebar from "../components/Sidebar"


function Home() {

    const card1 = {
        cardTitle: "LIBRARY HOURS",
        cardContent: <><h5 className="card-title">Monday - Thursday</h5><p className="card-text fs-2 fw-bold text-primary">7AM-6PM</p></>
    }
    const card2 = {
        cardTitle: "CALENDAR OF EVENTS",
        cardContent: <><h5 className="card-title">Monday - Thursday</h5><p className="card-text fs-2 fw-bold text-primary">7AM-6PM</p></>
    }
    const card3 = {
        cardTitle: "DOCUMENTATION",
        cardContent: <> <ul>
            <li>Library Website Instructions</li>
            <li>Login using CvSU Mail</li>
            <li>Requesting Reservation for Borrowing Books</li>
        </ul>
        </>
    }

    const links = [
        { title: "Access Engineering", link: "https://www.accessengineeringlibrary.com/" },
        { title: "EBSCO Databases", link: "https://search.ebscohost.com/Login.aspx/" },
        { title: "Infotrac", link: "https://link.gale.com/apps/menu?userGroupName=phslsu&prodId=MENU/" },
        { title: "Engineering Study Material", link: "http://ww7.engineeringstudymaterial.net/?usid=24&utid=4925535969/" },
        { title: "Cogprints", link: "https://web-archive.southampton.ac.uk/cogprints.org/" },
        { title: "Directory of Open Access Books", link: "https://www.doabooks.org/" },
        { title: "Get Free Books", link: "https://www.getfreeebooks.com/" },
        { title: "Project Gutenberg", link: "https://www.gutenberg.org/" },
        { title: "Intechopen", link: "https://www.intechopen.com/" },
    ]

    const listLinks = links.map((link, index) =>
        <li key={index}>
            <a href={link.link}>{link.title}</a>
        </li>
    )

    const accordion1 = { id: "books", title: "NEWLY ACQUIRED BOOKS", content: "This is a content" }
    const accordion2 = { id: "links", title: "OPEN ACCESS LINKS", content: <><ul>{listLinks}</ul></> }


    return (
        <>
            <Header />
            <Opac />

            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 col-lg-3 order-2 order-lg-1">
                        <Card cardTitle={card1.cardTitle} cardContent={card1.cardContent} />
                        <Card cardTitle={card2.cardTitle} cardContent={card2.cardContent} />
                        <Card cardTitle={card3.cardTitle} cardContent={card3.cardContent} />
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2 px-3">
                        <Main />
                    </div>
                    <div className="col-12 col-lg-3 order-3 order-lg-3">
                        <Accordion id={accordion1.id} title={accordion1.title} content={accordion1.content} />
                        <Accordion id={accordion2.id} title={accordion2.title} content={accordion2.content} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home