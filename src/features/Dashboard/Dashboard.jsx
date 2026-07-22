import Card from "../../common/components/Card";

export const Dashboard = () => {

    const AboutUser = [{ title: "Current Streak", value: 12, icon: "🔥" }, { title: "Time Learned", value: 24.5, icon: "⏰" }, { title: "Courses Completed", value: 8, icon: "🎓" }]
    const CoursesPending = [{ module: '4 of 22', title: "Project Management & Essentials" }, { module: '2 of 12', title: "Advance Data analytics" }, { module: '1 of 8', title: 'Python for Beginners' }]
    const LiveClasses = [{ day: 'Today', time: '08:00pm-09:00pm', title: 'Advanced python', with: 'Jhon' }, { day: "Tomorrow", time: "08:00pm-09:00pm", title: "Advanced python", with: "Jhon" }, { day: "Tomorrow", time: "08:00pm-09:00pm", title: "Advanced python", with: "Jhon" }]
    return (

        <div
            className=" grid grid-cols-12 gap-4 "
        >
            <div className="col-span-8 m-8">
                <Card className="p-8 ">
                    <h1 className="text-white text-4xl font-semibold">
                        WelCome Back,Alex!
                    </h1>
                    <h2 className="text-md font-medium text-gray-500 mt-2">You are doing great!Completed 4 lesson this week keep the momentum <br />going to finish <span className="text-blue-500">Project Management</span> by Friday</h2>
                    <div className="flex justify-between  items-center gap-8 m-2 ">
                        {AboutUser.map((item, index) => (
                            <Card key={index} className="w-1/3 h-24 p-4 text-center rounded-xl text-blue-800 ">
                                <p className="font-medium text-white"> {item.title}</p>
                                <p className="font-semibold text-2xl flex items-center justify-center ">  {item.icon}{item.value}</p>
                            </Card>))}

                    </div>
                </Card>
                <div className="mt-4 p-2 ">
                    <h2 className="text-xl m-2">Continue Learning</h2>
                    <div className="grid grid-cols-3 gap-2 ">
                        {CoursesPending.map((course, index) => (<Card key={index} className="w-full h-24 p-4 text-start rounded-xl text-white-800 " >
                            <p>{course.module}</p>
                            <p>{course.title}</p>
                        </Card>))}
                    </div>

                </div>
                <div className="mt-4 p-2">
                    <h2 className="text-xl">Recomended for you</h2>
                    {/* <Card> </Card>
                    <Card></Card> */}
                </div>
            </div>
            <div className="col-span-4">
                <Card className="w-full h-90 p-4 text-start rounded-xl text-white-800 " >
                    <h4>Live Classes</h4>
                    {LiveClasses.map((liveclass, index) => (<Card key={index} className="w-full h-24 p-4 text-start rounded-xl text-white-800 " >
                        <p>{liveclass.day}</p>
                        <p>{liveclass.time}</p>
                        <p>{liveclass.title}</p>
                        <p>{liveclass.with}</p>
                    </Card>))}
                </Card>
                {/* <Card>
                    <h4>Module Explorer</h4>
                </Card> */}
            </div>

        </div>

    );
};


export default Dashboard