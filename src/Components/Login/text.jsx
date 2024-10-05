import { useState } from 'react';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");  
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(null); 
    const [generatedOtp, setGeneratedOtp] = useState(null); 

    const validatePhoneNumber = () => {
        const phoneNumberRegex = /^[0-9]{10}$/; 
        const isValid = phoneNumberRegex.test(phoneNumber);
        setIsPhoneNumberValid(isValid); 
        return isValid;
    };

    const handleInputChange = (event) => {
        setPhoneNumber(event.target.value); 
    };

    const handleGenerateOtp = () => {
        const isValid = validatePhoneNumber(); 
        if (!isValid) {
            setGeneratedOtp(null); 
        } else {
            const otp = Math.floor(1000 + Math.random() * 9000); 
            setGeneratedOtp(otp); 
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
            <div style={{ padding: '50px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: 'white' }}>
                <h1 style={{ marginBottom: '30px', fontSize: '34px', color: 'black' }}>Login</h1>
                <input
                    style={{ width: '200px', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '20px' }}
                    type="text"
                    onChange={handleInputChange}
                    value={phoneNumber}
                    placeholder="Enter your phone number"
                /><br />
                <button
                    style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    onClick={handleGenerateOtp}
                >
                    Send OTP
                </button>
                <div style={{ marginTop: '20px', fontSize: '18px', color: isPhoneNumberValid === false ? 'red' : 'green' }}>
                    {isPhoneNumberValid === false 
                        ? "Invalid Phone Number" 
                        : (generatedOtp ? `Your OTP: ${generatedOtp}` : "")
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;
