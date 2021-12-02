import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
  const titleInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInput.current.value;
    const enteredImage = imageInput.current.value;
    const enteredAddress = addressInput.current.value;
    const enteredDescription = descriptionInput.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={titleInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required ref={imageInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Description</label>
          <textarea
            id="address"
            rows="5"
            required
            ref={descriptionInput}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
