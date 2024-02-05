import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/taskSlice';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
    const [text, setText] = useState('');
    const [isSubmitting, setSubmitting] = useState(false); // Track form submission
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        // Check if the form is already being submitted
        if (isSubmitting) {
            return;
        }

        setSubmitting(true);

        // Dispatch the action and handle any asynchronous operations
        try {
            await dispatch(createTask({ text }));
            setText('');
            navigate('/alltasks');
        } catch (error) {
            // Handle any errors if needed
            console.error('Error submitting form:', error);
        } finally {
            // Reset the submitting state
            setSubmitting(false);
        }
    };

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='text' style={{ fontWeight: 'bold' }}>Enter Task</label>
                    <input
                        type='text'
                        id='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    );
};

export default TaskForm;
