import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import Header from "../../Components/Header/Header"
import './Bookingsystem.css'

import imgs from '../../assets/bs/bs-images'


const Bookingssystem = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const setTitleImg = () => {
        const currentWindowWidth = window.innerWidth
        const titleImg = currentWindowWidth <= 513 ? imgs[1] : imgs[0]
        
        return titleImg
    }

    const navigate = useNavigate();

    return (
        <div className="BookingContainer">
            <Header />
            <div className="TitleImg">
            
            </div>
            <img src={setTitleImg()} alt='TitleImg' className='TitleImg' />
            <div className="ProjectDetails">
                <div className="ProjectContext">
                    <b>Project Context</b>
                    <div>
                        <p>Designed in 7 days in Spring 2021</p>
                        <p>Solo project for the Goethe University, Frankfurt</p>
                    </div>
                </div>
                <div className="Responsibilities">
                    <b>Responsibilities</b>
                    <div>
                        <p>User Research </p>
                        <p>Wireframing, Prototyping</p>
                        <p>UI design + Iterations</p>
                    </div>
                </div>
            </div>
            <hr className="Divider"/>
            <div className="Problem">
                <p className="Subheading">the problem</p>
                <p className='SectionTitle'>College students fail to prevent contact points due to the inefficiency of current application</p>
                <p>During Covid-19, Goethe University created a seat reservation system to prevent further infections. Many students welcomed this step, but found the presented system <b>not necessarily user-friendly as well as inefficient regarding reducing physical contact points</b>, as it led to queues at the control post or students did not find their seats directly.
                This led me to the question: How can we make an existing system efficient in order to <b>prevent possible contact points?</b></p>
            </div>
            <hr className="Divider"/>
            <div className="Solution">
                <p className="Subheading">the solution</p>
                <p className='SectionTitle'>Rapid authentification and seat indicator are key</p>
                <div className="Screens">
                    <div>
                        <img src={imgs[2]} alt='Home Screen'/>
                        <p><span>1. Reservation Overview: </span>Keep on top of all YOUR seat bookings over the whole week</p>        
                    </div>
                    <div>
                        <p><span>2. Easy booking: </span>Knowing how much booking balance there is, you can easily decide for yourself when and where you want to learn</p>        
                        <img src={imgs[3]} alt='Booking Step 1 - Screen'/>
                    </div>
                    <div>
                        <img src={imgs[4]} alt='Booking Step 2 - Screen'/>
                        <p><span>3. Real-Time seat availability and positioning: </span>See all free booking times for a specific seat and know where the seat is located</p>        
                    </div>
                </div>
            </div>
            <hr className="Divider"/>
            <div className="Competition">
                <p className="Subheading">competitive analysis</p>
                <p className='SectionTitle'>The competition was neither publicly viewable nor better</p>
                <p>I started surveying other university booking applications. Internationally, I could not find any alternatives, because many websites contained a login and were therefore <b>not viewable</b>. In the German area, there were the same problems, whereby those that were viewable presented exactly the <b>same</b> solution as Goethe University. Some of the examples include <a href='https://ubwww.uni-hildesheim.de/einzelplatzbuchung/' className="LinkColor">the University of Hildesheim</a>, <a href='https://www.ub.uni-bielefeld.de/mrbs4ap/' className="LinkColor">Bielefeld</a> and <a href='https://arbeitsplatz.ub.uni-marburg.de/' className="LinkColor">Marburg</a>.</p>
            </div>
            <hr className="Divider"/>
            <div className="Interviews">
                <p className="Subheading">User Interviews</p>
                <p className='SectionTitle'>The focus was on qualitative interviews</p>
                <p>Although I was a student myself and was aware of the problems with the application, I wanted to take off my own UX glasses so I could base my findings on reliable data. In order to do that I asked students about their perception of the current application. If the application would have been perceived as satisfactory, I would not have pursued this case study further, as I also had to keep an eye on the budget for the changes from a stakeholder perspective.
                <br /><br />
                For this reason, I conducted interviews and tests with 10 users. In the first interview, I interviewed 5 users who had just used the application and 5 users after the first design iteration to identify any gaps in my solution.
                I asked the first users the bottom questions to find out about their learning behavior (to exclude casual as well as one-time users) as well as what they thought of the current solution. Then I organized my data through Affinity Mapping.</p>
                <p className="Questions"><b>Research Questions:</b></p>
                <p>How often do you come to the library to study?</p>
                <p>What do you think of the Goethe University booking system?</p>
                <p>Where could improvements be made?</p>
                <p>Would you recommend this system for use to other universities? (Net Promoter Score)</p>
            </div>
            <hr className="Divider"/>
            <div className="Insights">
                <p className="Subheading">the main insight</p>
                <p className='SectionTitle'>The current app was inefficient regarding contact restrictions</p>
                <p>Based on the trends in my affinity map, I've noticed that while many students were glad that this application existed because otherwise they would not have been able to learn elsewhere, but the application's flaws would make it impossible to stick to the contact restrictions with complete efficiency.</p>
                <div className="InsightsContainer">
                    <p className="MajorTitle">Major Insights</p>
                    <p className="ThemeTitle CustomUnderline">Theme 1: Showing reservation with proof of identity</p>
                    <div>
                        <p><span className='Keypoint'>- </span>Students complain about long lines forming in front of the control post to show their reservation</p>
                        <p><span className='Keypoint'>- </span>Not everyone takes their proof of identity regularly with them</p>
                        <p><span className='Keypoint'>- </span>PDF for reservation can be easily manipulated</p>
                    </div>
                    <p className="ThemeTitle CustomUnderline">Theme 2: Searching for reserved seat</p>
                    <div>
                        <p><span className='Keypoint'>- </span>Students need to look at the site plan repeatedly, as the same seats cannot always be taken</p>
                        <p><span className='Keypoint'>- </span>There are always students wandering around because they can't find their seat</p>
                        <p><span className='Keypoint'>- </span>Many sit in the wrong seats, which in turn argues against contact restriction efforts</p>
                    </div>
                    <p className="ThemeTitle CustomUnderline">Theme 3: Overview of reservations</p>
                    <div>
                        <p><span className='Keypoint'>- </span>Use of screenshots to keep track of reservations; if changes are made, screenshots would have to be taken again accordingly</p>
                        <p><span className='Keypoint'>- </span>Many people do not know how often they can still make reservations</p>
                    </div>
                    <p className="ThemeTitle CustomUnderline">Others</p>
                    <div>
                        <p><span className='Keypoint'>- </span>The application is not responsive, therefore cumbersome to use on-the-go</p>
                        <p><span className='Keypoint'>- </span>Somewhat information overload, since there are many boxes to choose from, but still good to get an overview of free capacity</p>
                    </div>
                    <div className="ProblemPictures">
                    <img src={imgs[5]} alt='Long queues' id='long-queue-pic'/>
                    <img src={imgs[6]} alt='Study room' id='room-pic' />
                    <img src={imgs[7]} alt='Current solution' id='current-solution-pic' />
                </div>
                </div>
            </div>
            <hr className="Divider"/>
            <div className="Persona">
                <p className="Subheading BottomMargin">persona + user journey</p>
                <div className="PersonaContainer">
                    <img src={imgs[8]} alt='Persona' className='PersonaImg'/>
                    <img src={imgs[9]} alt='User Journey' className='JourneyImg'/>
                </div>
            </div>
            <hr className="Divider"/>
            <div className="FlowDiagram">
                <p className="Subheading BottomMargin">flow diagram</p>
                <p>Based on the user journey and the opportunities identified in it, I came up with a flow diagram that solves the user's problems and thus contributes to a better booking UX. If it eventually contributes to a better UX, I would find out through testing.
                The flow diagram shows all paths the user can acquire and does not visualize any specific scenario.</p>
                <img src={imgs[10]} alt='Flow Diagram'/>
            </div>
            <hr className="Divider"/>
            <div className="Sketches">
                <p className="Subheading BottomMargin">sketches</p>
                <p>Based on the previous steps I started to create first sketches to think through possible UIs. Various flight or seat booking apps at cinemas as well as task management apps were sources of inspiration!</p>
                <div>
                    <img src={imgs[11]} alt='Sketches'/>
                    <img src={imgs[12]} alt='Sketches'/>
                    <img src={imgs[13]} alt='Sketches'/>
                    <img src={imgs[14]} alt='Sketches'/>
                </div>
            </div>
            <hr className="Divider"/>
            <div className="FirstDesign">
                <p className="Subheading BottomMargin">first design + prototype</p>
                <p>So this was the first prototype I created. It was definitely responsive compared to the current application.
                    The design of the seat reservation block was only slightly changed (e.g. larger distances between buttons, splitting into several seating groups)
                    since similar solutions existed in the apps, which had served as my inspiration.
                </p>
                <div>
                    <img src={imgs[15]} alt='Home Screen - Initial Design'/>
                    <img src={imgs[16]} alt='Booking1 Screen - Initial Design'/>
                    <img src={imgs[17]} alt='Booking2 Screen - Initial Design'/>
                </div>
            </div>
            <hr className="Divider"/>
            <div className="Testing">
                <p className="Subheading">testing and improvements</p>
                <p className='SectionTitle'>5 major improvements in my design</p>
                <p>Based on the feedback by second group of interviewees, who tested the prototype and the workers
                    at the library, I was able to iterate on the solution with 5 major improvements.
                </p>
                <div>
                    <div>
                        <p className="ImprovementTitle CustomUnderline">Display of Covid rules</p>
                        <p>Stakeholders liked the app, but criticized that many students still neglect the AHA rules for preventing corona spread. The app is expected to provide a remedy for this as well, by demonstratively reminding them to follow and control the measures.</p>
                    </div>
                    <div>
                        <p className="ImprovementTitle CustomUnderline">Display of the student profile picture</p>
                        <p>In addition to the students, the gatekeepers at the entrance controls were also asked about their opinion of the app. Although the majority of the feedback was positive, it was noted that the name and matriculation number in the screen "Booking-Overview" were not sufficient enough to identify a student precisely. In contrast, the addition of a student photo would lead to a more clear identification. </p>
                    </div>
                    <div>
                        <p className="ImprovementTitle CustomUnderline">Better handling of the booking of places and timeframes</p>
                        <p>The interviewed students praised the division of the booking process into two screens, but did not find the solution of the seat/ and time frame booking particularly user-friendly, as on the one hand it would be very similar to the current "bad" solution, on the other hand the buttons were too small to make the right choice directly at the first use.</p>
                    </div>
                    <div>
                        <p className="ImprovementTitle CustomUnderline">Position of the "Approximate Seat" indicator during booking</p>
                        <p>Less important from a student perspective, however, the placement of the "Approximate Seat" indicator in the second screen of the booking process is not intuitive, as it is displayed before a seat is selected. </p>
                    </div>
                    <div>
                        <p className="ImprovementTitle CustomUnderline">Updating of the Color Palette</p>
                        <p>The request for this revision came from my side, as I noticed that the color scheme has not been consistent and too many different colors are used for buttons.</p>
                    </div>
                </div>
            </div>
            <hr className="Divider"/>
            <div className="FinalScreens">
                <p className="Subheading">the final screens</p>
                <p className='SectionTitle'>The final product</p>
                <div>
                    <img src={imgs[2]} alt='Home Screen'/>
                    <img src={imgs[3]} alt='Booking Step 1 - Screen'/>
                    <img src={imgs[4]} alt='Booking Step 2 - Screen'/>
                </div>
            </div>
            <hr className="Divider"/>
            <div className="Styleguide">
                <p className="Subheading BottomMargin">styleguide</p>
                <img src={imgs[18]} alt='Styleguide'/>
            </div>
            <hr className="Divider"/>
            <div className="LessonsLearned">
                <p className="Subheading">conclusion + lessons learned</p>
                <p className='SectionTitle'>What I’d do differently next time.</p>
                <p>Even though it wasn't my first UX study, I'm still glad I did it, 
                    because with every study you get the chance to reflect on your own approach. 
                    On that note, a few things I’ve learned:</p>
                <div className="LearndList">
                    <p><b>1. Not working with user stories: </b>While it has helped me to have worked with a 
                    flow diagram, I have come to the realization that I would have been much more likely 
                    to get initial results by using user stories, as they combine a goal with a motivation 
                    and are always perceived by me as a to-do list to be checked off.</p>
                    <p><b>2. Understanding color relations: </b>Here I have to admit that I didn't put much time 
                    into creating a well thought out color palette before the first iteration, which led me to 
                    use too many different colors. Colors from the same color family eventually led to a more 
                    pleasing visual perception of the app.</p>
                </div>
            </div>
            <hr className="Divider"/>
            <div className="LastNotes">
                <p>And that's it. For more work inquiries, or to grab a coffee do email me at zishon@hotmail.de ☕️✨ </p>
                <b>Thank you for reading! 🧠</b>
                <button onClick={() => navigate(-1)}>Back to home</button>
            </div>
        </div>
    )
}

export default Bookingssystem