import { useState, useEffect } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { items } from './data/items'
import { categories } from './data/categories'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import TableArea from './components/TableArea'
import InfoArea from './components/InfoArea'

export default function App()
{
  const [list, setList] = useState(items);
  const [filtedredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>
  {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(()=>
  {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filtedredList)
    {
      if(categories[filtedredList[i].category].expense)
      {
        expenseCount += filtedredList[i].value;
      }
      else
      {
        incomeCount += filtedredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filtedredList])

  const handleMonthChange = (newMonth: string) => 
  {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />
        <TableArea list={filtedredList} />
      </C.Body>
    </C.Container>
  );
}