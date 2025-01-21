import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { APIUrl, handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';


const Dashboard = () => {

    // const [loggedInUser, setLoggedInUser] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [incomeAmt, setIncomeAmt] = useState(0);
    const [expenseAmt, setExpenseAmt] = useState(0);

    const navigate = useNavigate();

    const GotoHome = () => {
        navigate('/home')
    }

    // useEffect(() => {
    //     setLoggedInUser(localStorage.getItem('loggedInUser'))
    // }, [])


    useEffect(() => {
        const amounts = expenses.map(item => item.amount);
        const income = amounts.filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0);
        const exp = amounts.filter(item => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1;
        setIncomeAmt(income);
        setExpenseAmt(exp);
    }, [expenses])

    const fetchExpenses = async () => {
        try {
            const url = `${APIUrl}/expenses`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            
            if (response.status === 403) {
                localStorage.removeItem('token');
                navigate('/login');
                return
            }
            const result = await response.json();
            console.log(result);
            console.log('--result', result.data);
            setExpenses(result.data);
        } catch (err) {
            handleError(err);
        }
    }

    useEffect(() => {
        fetchExpenses()
        console.log("HElloOO",expenses)
    }, [])

    const [query, setQuery] = useState(''); // Holds the search term
    const [filteredData, setFilteredData] = useState([]); // Holds filtered results


    const handleInputChange = (event) => {
        setQuery(event.target.value); // Update the query state
        // console.log(query)
        
    };
    const onSearch = () => {
        const data = expenses.filter((item) => item.text.toLowerCase() === query.toLowerCase()).map((item) => item.amount);
        setFilteredData(data); // Update the state with the filtered data
    };

    return (
        <div>
            <div>
                <button onClick={GotoHome}>Home</button>
            </div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search by name or email"
            />
            <button onClick={onSearch}>Search</button>
            
            <div>
                <h3>Filtered Amounts:</h3>
                {filteredData.length > 0 ? (
                    filteredData.map((amount, index) => <div key={index}>Amount: {amount}</div>)
                ) : (
                    <div>No matching expenses found.</div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;