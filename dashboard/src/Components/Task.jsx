
import Tasks from './Tasks'

function Task () {


    return (
       <section className="taskes">
        <header className="head">
            <div className="span-1">
           <p>Create Task</p>
           <span>18</span>
            </div>
            <div className="span-2">
          <p>Completed task</p>
          <span>1 of 10</span>
            </div>
        </header>

        <div className="list">
            <Tasks />
        </div>
       </section>
    )
}

export default Task