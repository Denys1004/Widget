import React from 'react'
import '../sass/App.scss';
import MyButton from './UI/MyButton';

const DonationForm = (props) => {
    let refAmount = React.createRef(); 

    const submitForm = (e) => {
        e.preventDefault();
        let inputed_amount = refAmount.current.value;
        if(+inputed_amount && inputed_amount > 0){
            props.setNewAmount(inputed_amount);
            refAmount.current.value = "";
        }
    };

    return(
        < >
            {props.formInfo &&
                <div className="donationForm_container">
                    <h2 className="donationForm_title">{props.formInfo.form_name}</h2>
                    <form>
                        <label htmlFor="" style={{color: props.theme_color}}>Enter Amount</label><br />
                        <input type="number" ref={refAmount}/>
                        <div className="donationForm_actions">
                            <MyButton style={{ 
                                backgroundColor: "#f3f3f3", 
                                color: "#4b4b4b"}}
                                onClick={props.closeModal}>
                                Cancel
                            </MyButton>
                            <div className="space"></div>
                            <MyButton style={{ 
                                backgroundColor: props.theme_color, 
                                color: "#fff" }}
                                onClick={submitForm}>
                                Donate
                            </MyButton>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default React.memo(DonationForm);
