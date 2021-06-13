import React from "react"
import AuthNavBar from "./AuthNavBar"
import patrickheadshot from "../images/patrickprofessionalphoto.png"
import "./styles/about.css"

function About(){
    return (
        <div>
            <AuthNavBar />
            <div className="about-container-outer">
                <div className="about-container-inner">
                    <div className="about-dev-container">
                        <div className="about-dev-title">About the Developer</div>
                        <img src={patrickheadshot} className="about-dev-photo" />
                        <div className="about-dev-name">Patrick Nusbaum</div>
                        <div className="about-dev-link-container">
                            <div className="about-dev-professional-link-container">
                            <div className="about-dev-link-title">Professional Links</div>
                                <a className="about-dev-link" href="https://github.com/patricknuttree" target="_blank">github</a>
                                <a className="about-dev-link" href="https://www.linkedin.com/in/patrick-nusbaum-mpa" target="_blank">linkedin</a>
                            </div>
                            <div className="about-dev-other-proj-container">
                            <div className="about-dev-link-title">Other sites by the developer</div>
                                <a className="about-dev-link" href="https://travelscape-app.herokuapp.com/" target="_blank">travelscape</a>
                                <a className="about-dev-link" href="https://the-pour.herokuapp.com/" target="_blank">The-Pour</a>
                                <a className="about-dev-link" href="https://hobbetsy.herokuapp.com/" target="_blank">Hobbetsy</a>
                            </div>
                        </div>
                        <div className="about-dev-reason">
                            <p>A note from the Dev:</p>
                            <p>I made the PDMirror as a capstone project to round out my experience for a couple reasons. First it was a passion project of mine as a person who cares about equity and effectiveness deeply when I had the idea originally I got excited about it. The second reason is I have a bachelors degree in Sociology and a Masters in public administration. I am now adding a third degree in software development and I thought what better way of presenting myself to world as a software developer than by integrating my entire educational background in this site. The PDMirror integrates all three of my degrees which made this project a lot of fun and let me flex all parts of my brain.</p>
                        </div>
                    </div>
                    <div className="about-pdmirror-container">
                        <div className="about-title">About PDMirror</div>
                        <div className="about-info-container">
                            <div className="about-info-box">
                                <p className="about-info-box-title">What is PDMirror?</p>
                                <p className="about-info-box-content">PDMirror is a place for users to come and talk with their communities about their interactions with police departments. The intent being that police departments along with other users can view this communicative exchange and walk away with new perspective and understanding. Users and Police Department Representatives can both be on this site. Neither the User or a Police Department representative has more power over the other. The site is meant to be an equalizer of power and status.</p>
                            </div>
                            <div className="about-info-box">
                                <p className="about-info-box-title">The idea behind the PDMirror</p>
                                <p className="about-info-box-content">PDMirror's original inspiration comes from a sociological theory called Social Mirror Theory first introduced by Wihlelm Dilthey. The theory basically posits that an individual cannot gauge the normalcy or deviancy of an action based on their perspective alone. But by seeing how other people respond to their actions determine if their action was normal or deviant. Police departments currently do not have a very good system for seeing their social reflection accept for in extreme circumstances. This is where the PDMirror shines. It gives people a place to give their reflections on the police departments actions and in reality the police department to give a reflection back to the community on its actions.</p>
                            </div>
                            <div className="about-info-box">
                                <p className="about-info-box-title">A point on Neutrality</p>
                                <p className="about-info-box-content">The PDMirror as a site its self is intended to be neutral. I as the developer am not taking a stance either in favor of the police or the community. To take a side would defeat the purpose of the site. The site's purpose is to create an unopinionated reflection where neither side of the reflection has any more power or status over the other. The overall opinion of the site is that the best resolution to conflict is constructive communication.</p>
                            </div>
                            <div className="about-info-box">
                            <p className="about-info-box-title">How to delete a reflection</p>
                                <p className="about-info-box-content">There is only one way for a user to delete a reflection. That is by making a delete reflection request by emailing pdmirrordeletereflection@gmail.com. The reason a user cannot delete a reflection is NOT because as a developer I could not let a user delete a reflection but because I would not. Reflections on the PDMirror should work the same way as a reflection would in the real world. You cannot rollback the tape and react differently to something that happens in real life thus to keep to the original theory of the sociological mirror reflections can not so easily be deleted.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default About