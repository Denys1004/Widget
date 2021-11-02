import React, { useEffect, useState } from 'react'
import '../sass/App.scss';
import axios from 'axios';
import MyButton from './UI/MyButton';
import MyModal from './UI/MyModal';
import DonationForm from './DonationForm';
import Notification from './UI/Notification';


const Thermometer = (props) => {
    const [amountRaised, setAmountRaised] = useState(0);
    const [progress, setProgress] = useState(0);
    const [percentOfTheGoal, setPercentOfTheGoal] = useState(100);
    const [formInfo, setFormInfo] = useState(null);
    const[modal, setModal] = useState(false);
    const[notification, setNotification] = useState(false);

    useEffect(() => {
        let progress_width = (amountRaised /+props.data.goal) * 100;
        setProgress(progress_width);
        if((progress_width) > 100){
            setPercentOfTheGoal(progress_width);
        }
    }, [amountRaised, props.data.goal]);

    const donate = () => {
        getData("https://jsonplaceholder.typicode.com/todos/1");
    }

    const getData = async (link) => {
        const data = await axios.get(link);
        if(data.status === 200) {
            let new_data = {
                id: 1,
                form_name: "Donate Now!",
                theme_color: props.theme_color,
            };
            setFormInfo(new_data);
            setModal(true);
        }
    };

    const closeModal = (e) => {
        e.preventDefault();
        setModal(false);
    }

    const setNewAmount = (amount) => {
        let inputed_amount = +amount;
        setModal(false);
        setNotification(true);
        setTimeout(() => {
            setNotification(false);
        }, 2000);
        setAmountRaised(amountRaised + inputed_amount);
    }

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div>
            <div className='thermometer_container'>
                { props.data?.image &&
                    <div className="thermometer_logo" style={{ 
                        backgroundColor: `${props.data.image_bg_color}`}}>
                        <img src={props.data.image} alt='logo' />
                    </div>
                }
                <div className="thermometer_content">
                    <div className="thermometer_name">
                        <h2>{props.data.title}</h2>
                    </div>
                    <div className="thermometer_amount" style={{ 
                        color: `${props.data.theme_color}`}}>
                        { formatter.format(parseFloat(amountRaised).toFixed(2)) }
                    </div>
                    <div className="thermometer_progress">
                        <div className="progress_text">
                            <p>0%</p>
                            <p className="progress_text_middle">Raised</p>
                            <p>{Math.floor(percentOfTheGoal)}%</p>
                        </div>
                        <div className="progress_bar">
                            <div className="progress_bar_line" style={{ 
                                backgroundColor: `${props.data.theme_color}` , 
                                width: `${progress}%`}}>
                            </div>
                        </div>
                    </div>
                    <div className="thermometer_action">
                        <MyButton style={{ 
                            backgroundColor: props.data.theme_color, 
                            color:props.data.btn_text_color }}
                            onClick={()=>{donate()}}>
                            {props.data.btn_text}
                        </MyButton>
                    </div>
                </div>
                <Notification message="Thank you for help!" notification={notification}/>
            </div>
            <MyModal modal = {modal} setModal={setModal}> 
                <DonationForm 
                    formInfo={formInfo} 
                    theme_color={props.data.theme_color} 
                    closeModal={closeModal} 
                    setNewAmount={setNewAmount} 
                /> 
            </MyModal>
        </div>
    )
}

export default Thermometer
