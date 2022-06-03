import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './CreateCampsite.css'

const CreateCampsite = () => {
  const user = useSelector(state => state.session.user);

  const history = useHistory();
  const sendToForm = () => {
    history.push('/new')
  }

  if (!user) {
    <Redirect to='/' />
  }

  return (
  <div className='create-cs'>
    <div id='create-btn' onClick={sendToForm}>
      <span>+</span>
    </div>
    <span>Create Campsite</span>
  </div>
  );
}


export default CreateCampsite