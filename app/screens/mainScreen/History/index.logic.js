import { useState } from "react";

const useLogic = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const transactions = [
        { id: '1', name: 'Netflix', description: 'Card decline at', amount: "$8.79", cateIcon: "cached", status: "debit", date: 'today' },
        { id: '2', name: 'Daniel Agozirim', description: 'Received from bank', amount: "+₦35,000", cateIcon: "cached", status: "credit", date: 'today' },
        { id: '3', name: '@chinonsogreat', description: 'Sent to bank', amount: "₦40,000", cateIcon: "cached", status: "debit", date: 'today' },
        { id: '4', name: 'Oluwatobi Oseni', description: 'Sent to bank', amount: "₦8,000", cateIcon: "cached", status: "debit", date: 'today' },
        { id: '5', name: 'Ref_Temidayo Anifowo...', description: 'Reversal for', amount: "+₦31,950", cateIcon: "cached", status: "credit", date: 'today' },
        { id: '6', name: '@moneymade$$', description: 'Received from', amount: "+₦6,900", cateIcon: "cached", status: "credit", date: 'july2023' },
        { id: '7', name: 'NETFLIX.COM', description: 'Spent on', amount: "$50.09", cateIcon: "cached", status: "debit", date: 'july2023' },
    ];

    
    const todayTransactions = transactions
        .filter(transaction => transaction.date === 'today' &&
            (transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );


    const julyTransactions = transactions
        .filter(transaction => transaction.date === 'july2023' &&
            (transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    return {
        searchQuery,
        setSearchQuery,
        todayTransactions,
        julyTransactions
    }
}


export default useLogic