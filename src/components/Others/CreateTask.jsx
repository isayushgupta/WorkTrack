import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const CreateTask = () => {

    const { employees, createTask } = useContext(AuthContext);

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [to, setTo] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = e => {
        e.preventDefault();

        const employee = employees.find(e => e.firstName === to.trim());
        if (!employee) {
            alert("Employee not found");
            return;
        }

        const newTask = {
            id: Date.now(),
            title,
            description,
            date,
            priority: category,
            newTask: true,
            active: false,
            completed: false,
            failed: false
        };

        createTask(employee.id, newTask);

        setTitle("");
        setDate("");
        setTo("");
        setCategory("");
        setDescription("");
    };

    return (
        <div className='mt-10 flex items-center'>
            <form
                onSubmit={submitHandler}
                className='rounded-lg bg-[#1c1c1c] w-full flex flex-wrap p-12 gap-10 justify-between'
            >
                <div className='w-[45%] text-xl flex flex-col gap-3'>

                    <div>
                        <label className='block mb-2'>Task Title</label>
                        <input value={title} onChange={e => setTitle(e.target.value)}
                            className='w-full border-white border-2 bg-transparent rounded-lg py-1 px-3'
                        />
                    </div>

                    <div>
                        <label className='block mb-2 mt-3'>Date</label>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)}
                            className='border-white border-2 bg-transparent rounded-lg py-1 px-5'
                        />
                    </div>

                    <div>
                        <label className='block mb-2 mt-3'>Assign To</label>
                        <input value={to} onChange={e => setTo(e.target.value)}
                            placeholder='Employee Name'
                            className='w-full border-white border-2 bg-transparent rounded-lg py-1 px-3'
                        />
                    </div>

                    <div>
                        <label className='block mb-2 mt-3'>Priority</label>
                        <input value={category} onChange={e => setCategory(e.target.value)}
                            placeholder='High/Medium/Low?'
                            className='w-full border-white border-2 bg-transparent rounded-lg py-1 px-3'
                        />
                    </div>
                </div>

                <div className='text-xl w-[45%]'>
                    <label className='block mb-2'>Description</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)}
                        className='w-full border-white border-2 bg-transparent rounded-lg p-5 text-base'
                        rows="8"
                    />
                    <button className='w-full rounded-lg py-1 mt-3 bg-green-600 active:bg-green-700'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
