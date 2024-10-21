import React, { createContext, useState, useContext } from 'react';


const BalanceContext = createContext();


export const BalanceProvider = ({ children }) => {
  const [homeBalance, setHomeBalance] = useState(1000);
  const [cardBalance, setCardBalance] = useState(0);   

  const transferToCard = (amount) => {
    if (homeBalance >= amount) {
      setHomeBalance(homeBalance - amount); 
      setCardBalance(cardBalance + amount);
      return {
        status: "success"
      }  
    } else {
      alert("Insufficient funds");
    }
  };

  return (
    <BalanceContext.Provider value={{ homeBalance, cardBalance, transferToCard }}>
      {children}
    </BalanceContext.Provider>
  );
};


export const useBalance = () => useContext(BalanceContext);
