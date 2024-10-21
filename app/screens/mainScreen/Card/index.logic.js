import { useState } from "react";
import { useBalance } from '../../../assets/utils/balanceCard'
import { useRoute, useNavigation } from "@react-navigation/native";

const useLogic = () => {

    const navigation = useNavigation()

    const { cardBalance, transferToCard } = useBalance()

    const [modalVisible, setModalVisible] = useState(false);
    const [displayedValue, setDisplayedValue] = useState(cardBalance);



    const handleTopUpPress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const formattedCardBalance = cardBalance.toString();

    const displayCardBalance = formattedCardBalance.length > 1 && formattedCardBalance.startsWith('0')
        ? formattedCardBalance.slice(1)
        : formattedCardBalance;




    const handleNumberPress = (num) => {
        setDisplayedValue(displayedValue === 0 ? num : displayedValue + num)
    };

    const handleDecimalPress = () => {
        if (!displayedValue.includes(".")) {
            setDisplayedValue(displayedValue + ".");
        }
    };

    const handleDeletePress = () => {
        setDisplayedValue(displayedValue.slice(0, -1));
    };

    const isDisabled = displayedValue === 0 || !displayedValue;



    const transfer = (data) => {
        const res = transferToCard(data)
        if (res.status === "success") {
            navigation.navigate(
                "Success",
                {
                    amount: data,
                    title: "SUCCESS",
                    message: `You withdrew ${data} from your Virtual Card`
                }
            )
        }
    }


    return {
        modalVisible,
        setModalVisible,
        handleTopUpPress,
        handleCloseModal,
        displayCardBalance,
        handleNumberPress,
        handleDecimalPress,
        handleDeletePress,
        isDisabled,
        displayedValue,
        setDisplayedValue,
        transferToCard,
        transfer
    }
}


export default useLogic