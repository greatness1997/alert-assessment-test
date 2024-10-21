import { useBalance } from '../../../assets/utils/balanceCard'


const useLogic = () => {

    const currentDate = new Date();
    const { homeBalance } = useBalance();


    const transactions = [
        { id: '1', name: 'Convert Money', description: 'Swap between currencies', iconName: "dots-vertical", cateIcon: "cached" },
        { id: '2', name: 'Tuition payment', description: 'Pay your tuition in school', iconName: "chevron-right", cateIcon: "school" },
        { id: '3', name: 'Pay a merchant', description: 'Pay your suppliers globally', iconName: "chevron-right", cateIcon: "briefcase" },
    ];

    return {
        currentDate,
        homeBalance,
        transactions
    }
}


export default useLogic